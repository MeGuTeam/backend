# Dokumentasi API IKIBAN NIHONGO

Dokumen ini menyediakan detail lengkap bagi tim frontend tentang cara berinteraksi dengan API backend aplikasi Ikiban Nihongo - platform pembelajaran bahasa Jepang interaktif.

## Deskripsi Proyek

Ikiban Nihongo adalah aplikasi pembelajaran bahasa Jepang yang menyediakan materi pembelajaran komprehensif meliputi:

-   Sistem penulisan Jepang (Hiragana, Katakana, Kanji)
-   Tata bahasa dasar (Partikel)
-   Materi JLPT N5 (Kanji, Kata Sifat, Kata Keterangan, Kata Benda, Kata Kerja)
-   Pembelajaran angka dalam bahasa Jepang
-   Quiz Sederhana untuk Setiap Level
-   Chatbot Assistant untuk Membantu Pembelajaran Anda

## Teknologi yang Digunakan

-   **Backend Framework:** Express.js
-   **Database:** Supabase (PostgreSQL)
-   **Authentication:** JWT (JSON Web Tokens)
-   **File Upload:** Multer
-   **Password Hashing:** bcrypt
-   **CORS:** Mendukung cross-origin requests dari frontend

## URL Dasar

```
http://localhost:8000
```

## Autentikasi

Sebagian besar endpoint memerlukan autentikasi melalui token JWT. Token harus disertakan dalam header Authorization sebagai berikut:

```
Authorization: Bearer <token>
```

**Catatan Penting:**

-   Token memiliki masa berlaku 12 jam
-   Setelah login berhasil, simpan token untuk digunakan pada request selanjutnya
-   Jika token expired, pengguna perlu login ulang
-   **User ID diambil dari JWT token**: Untuk endpoint yang memerlukan user ID (seperti ganti password, upload avatar, dll), user ID diambil secara otomatis dari JWT token yang dikirim melalui Authorization header, bukan dari request body atau URL parameter

### Endpoint Autentikasi

#### Pendaftaran Pengguna

-   **URL:** `/register`
-   **Method:** `POST`
-   **Autentikasi Diperlukan:** Tidak
-   **Body:**
    ```json
    {
        "username": "myusername",
        "password": "mypassword"
    }
    ```
-   **Catatan:**
    -   Username minimal 6 karakter
    -   Password minimal 8 karakter
-   **Respon Sukses:** (201 Created)
    ```json
    {
        "error": false,
        "message": "Berhasil mendaftar"
    }
    ```
-   **Respon Error:** (400 Bad Request)
    ```json
    {
        "error": true,
        "message": "Username sudah terdaftar",
        "data": null
    }
    ```
-   **Respon Error:** (400 Bad Request) - Validasi gagal
    ```json
    {
        "error": true,
        "message": "Username minimal 3 karakter dan password minimal 6 karakter",
        "data": null
    }
    ```

#### Login

-   **URL:** `/login`
-   **Method:** `POST`
-   **Autentikasi Diperlukan:** Tidak
-   **Body:**
    ```json
    {
        "username": "myusername",
        "password": "mypassword"
    }
    ```
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Login berhasil!",
        "data": {
            "id": "user_id",
            "username": "myusername",
            "profile_picture": "url_or_null",
            "token": "jwt_token" // Simpan token ini untuk request yang memerlukan autentikasi
        }
    }
    ```
-   **Respon Error:** (401 Unauthorized)
    ```json
    {
        "error": true,
        "message": "Password salah",
        "data": null
    }
    ```
-   **Respon Error:** (401 Unauthorized) - Username tidak ditemukan
    ```json
    {
        "error": true,
        "message": "Username tidak terdaftar",
        "data": null
    }
    ```

#### Ganti Password

-   **URL:** `/change-password`
-   **Method:** `POST`
-   **Autentikasi Diperlukan:** Ya
-   **Body:**
    ```json
    {
        "oldPassword": "password_lama",
        "newPassword": "password_baru"
    }
    ```
-   **Catatan:** User ID diambil dari JWT token yang dikirim melalui Authorization header, bukan dari body request
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Password berhasil diubah",
        "data": null
    }
    ```
-   **Respon Error:** (401 Unauthorized)
    ```json
    {
        "error": true,
        "message": "Password lama salah",
        "data": null
    }
    ```

## Sistem Penulisan Bahasa Jepang

### Hiragana

-   **URL:** `/hiragana`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Berhasil mendapatkan data hiragana",
        "datas": [
            {
                "id": 1,
                "character": "あ",
                "romaji": "a",
                "type": "monograph"
            }
        ]
    }
    ```

### Katakana

-   **URL:** `/katakana`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Berhasil mendapatkan data katakana",
        "datas": [
            {
                "id": 1,
                "character": "ア",
                "romaji": "a",
                "type": "monograph"
            }
        ]
    }
    ```

## Tata Bahasa Jepang

### Partikel

-   **URL:** `/particle`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Berhasil mendapatkan data partikel",
        "datas": [
            {
                "id": 1,
                "particle_name": "は",
                "description": "Menunjukkan topik kalimat",
                "example_sentence": "私は学生です。"
            }
        ]
    }
    ```

## Materi Pembelajaran JLPT N5

### Kanji N5

-   **URL:** `/kanjin5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Data kanji berhasil diambil",
        "data": [
            {
                "id": 1,
                "character": "人",
                "onyomi": "ジン、ニン",
                "kunyomi": "ひと",
                "meaning": "person, people"
            }
        ]
    }
    ```

### Kata Sifat N5

-   **URL:** `/adjectiven5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Data kata sifat berhasil diambil",
        "data": [
            {
                "id": 1,
                "reading": "あつい",
                "word": "暑い",
                "meaning": "hot (weather)",
                "example_sentence": "今日は暑いです。",
                "type": "i-adjective"
            }
        ]
    }
    ```

### Kata Keterangan N5

-   **URL:** `/adverbn5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Data kata keterangan berhasil diambil",
        "data": [
            {
                "id": 1,
                "reading": "とても",
                "word": "とても",
                "meaning": "very, much",
                "example_sentence": "とても嬉しいです。"
            }
        ]
    }
    ```

### Kata Benda N5

-   **URL:** `/nounn5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Data kata benda berhasil diambil",
        "data": [
            {
                "id": 1,
                "reading": "がっこう",
                "word": "学校",
                "meaning": "school",
                "example_sentence": "学校に行きます。"
            }
        ]
    }
    ```

### Kata Kerja N5

-   **URL:** `/verbn5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Data kata kerja berhasil diambil",
        "data": [
            {
                "id": 1,
                "reading": "いく",
                "word": "行く",
                "meaning": "to go",
                "example_sentence": "学校に行きます。"
            }
        ]
    }
    ```

## Profil Pengguna

### Mendapatkan Profil Pengguna

-   **URL:** `/profile/:profileId`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Parameter URL:** `profileId` - ID profil pengguna yang ingin diambil
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Data profil berhasil diambil",
        "data": {
            "user_id": "user_id",
            "username": "username",
            "profile_picture": "image_url_or_null"
        }
    }
    ```
-   **Respon Error:** (404 Not Found)
    ```json
    {
        "error": true,
        "message": "User tidak ditemukan",
        "data": null
    }
    ```

## Pembelajaran Angka

-   **URL:** `/number`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Data angka berhasil diambil",
        "data": [
            {
                "id": 1,
                "reading": "いち",
                "word": "一",
                "meaning": "one",
                "example_sentence": "一つください。",
                "type": "number"
            }
        ]
    }
    ```

## Penanganan Gambar

### Unggah Avatar

-   **URL:** `/upload`
-   **Method:** `POST`
-   **Autentikasi Diperlukan:** Ya
-   **Content Type:** `multipart/form-data`
-   **Body:**
    -   `avatar`: File gambar yang akan diunggah
-   **Catatan:** User ID diambil dari JWT token yang dikirim melalui Authorization header, bukan dari form data
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Gambar profil berhasil diunggah",
        "data": {
            "imageUrl": "https://supabase_url/storage/v1/object/public/avatarbucket/ikibannihongo/filename.jpg"
        }
    }
    ```
-   **Respon Error:** (400 Bad Request)
    ```json
    {
        "error": true,
        "message": "No file uploaded"
    }
    ```
-   **Respon Error:** (404 Not Found)
    ```json
    {
        "error": true,
        "message": "User tidak ditemukan",
        "data": null
    }
    ```

### Mendapatkan Avatar

-   **URL:** `/avatar`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Catatan:** User ID diambil dari JWT token yang dikirim melalui Authorization header
-   **Respon Sukses:** (200 OK)
    ```json
    {
        "error": false,
        "message": "Gambar profil berhasil diambil",
        "data": {
            "imageUrl": "image_url_or_null"
        }
    }
    ```
-   **Respon Error:** (404 Not Found)
    ```json
    {
        "error": true,
        "message": "User tidak ditemukan",
        "data": null
    }
    ```

## Penanganan Error

Respon error umum yang mungkin terjadi:

-   **400 Bad Request**

    ```json
    {
        "error": true,
        "message": "Username dan password tidak boleh kosong",
        "data": null
    }
    ```

-   **401 Unauthorized** - Header Authorization tidak ada

    ```json
    {
        "message": "Authorization header missing or invalid"
    }
    ```

-   **401 Unauthorized** - Token tidak valid

    ```json
    {
        "message": "Invalid or expired token",
        "error": "error_details"
    }
    ```

-   **404 Not Found**

    ```json
    {
        "error": true,
        "message": "User tidak ditemukan",
        "data": null
    }
    ```

-   **500 Internal Server Error**
    ```json
    {
        "error": true,
        "message": "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
        "data": null
    }
    ```

## Catatan Implementasi

1. **Autentikasi**: Selalu simpan JWT token setelah login dan sertakan dalam header Authorization untuk request yang memerlukan autentikasi.
2. **User ID dari Token**: Sistem menggunakan JWT token untuk mengidentifikasi user. User ID diambil dari token yang sudah di-decode, bukan dari request body atau parameter URL. Ini meningkatkan keamanan karena user tidak bisa mengirim ID user lain.
3. **Expire Token**: Token memiliki masa berlaku 12 jam, setelah itu pengguna perlu login ulang.
4. **Format Respon**: Semua respon mengikuti format standar dengan properti `error` (boolean), `message` (string), dan `data` (object atau null).
5. **CORS**: API menggunakan CORS dan hanya menerima request dari `http://localhost:3000`.
6. **Database**: Menggunakan Supabase sebagai database PostgreSQL.
7. **File Upload**: Gambar avatar disimpan di Supabase Storage dengan bucket `avatarbucket`.
8. **Validasi Input**: Semua input divalidasi untuk mencegah injeksi kode berbahaya.

## Struktur Respon Standar

Sebagian besar endpoint API mengembalikan respon dalam format berikut:

```json
{
  "error": boolean,  // true jika terjadi error, false jika berhasil
  "message": string, // Pesan yang menjelaskan hasil operasi
  "data": object     // Data yang dikembalikan, atau null jika terjadi error
}
```

**Catatan:** Beberapa endpoint menggunakan `datas` (plural) untuk mengembalikan array data.

## Cara Menjalankan Server

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Setup environment variables:**
   Buat file `.env` dengan variabel berikut:

    ```
    PORT=8000
    JWT_SECRET=your_jwt_secret_key
    SUPABASE_URL=your_supabase_url
    SUPABASE_API_KEY=your_supabase_api_key
    ```

3. **Jalankan server:**
    - Development: `npm run dev`
    - Production: `npm start`

## Dependencies

-   **@supabase/supabase-js**: Client untuk Supabase
-   **bcrypt**: Hash password
-   **cors**: Enable CORS
-   **dotenv**: Load environment variables
-   **express**: Web framework
-   **jsonwebtoken**: JWT implementation
-   **multer**: File upload middleware

## Contoh Implementasi

### Contoh: Autentikasi dan Pemanggilan API (JavaScript)

```javascript
// Fungsi untuk login dan menyimpan token
async function login(username, password) {
    try {
        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!data.error) {
            // Simpan token di localStorage atau secure storage
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userId", data.data.id);
            localStorage.setItem("username", data.data.username);
            return { success: true, data: data.data };
        } else {
            console.error("Login failed:", data.message);
            return { success: false, message: data.message };
        }
    } catch (err) {
        console.error("Login error:", err);
        return { success: false, message: "Network error" };
    }
}

// Contoh pemanggilan API yang memerlukan autentikasi
async function getHiragana() {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No authentication token found");
            return null;
        }
        const response = await fetch("http://localhost:8000/hiragana", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!data.error) {
            return data.datas; // Perhatikan: menggunakan 'datas' bukan 'data'
        } else {
            console.error("Failed to fetch hiragana:", data.message);
            return null;
        }
    } catch (err) {
        console.error("Error fetching hiragana:", err);
        return null;
    }
}

// Contoh ganti password
async function changePassword(oldPassword, newPassword) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No authentication token found");
            return null;
        }

        const response = await fetch("http://localhost:8000/change-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                oldPassword,
                newPassword,
                // User ID tidak perlu dikirim karena diambil dari JWT token
            }),
        });

        const data = await response.json();

        if (!data.error) {
            return { success: true, message: data.message };
        } else {
            console.error("Failed to change password:", data.message);
            return { success: false, message: data.message };
        }
    } catch (err) {
        console.error("Error changing password:", err);
        return { success: false, message: "Network error" };
    }
}

// Contoh upload avatar
async function uploadAvatar(file) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No authentication token found");
            return null;
        }

        const formData = new FormData();
        formData.append("avatar", file);
        // User ID tidak perlu dikirim karena diambil dari JWT token
        const response = await fetch("http://localhost:8000/upload", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        const data = await response.json();

        if (!data.error) {
            return data.data.imageUrl;
        } else {
            console.error("Failed to upload avatar:", data.message);
            return null;
        }
    } catch (err) {
        console.error("Error uploading avatar:", err);
        return null;
    }
}

// Contoh mendapatkan avatar
async function getAvatar() {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No authentication token found");
            return null;
        }

        const response = await fetch("http://localhost:8000/avatar", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!data.error) {
            return data.data.imageUrl;
        } else {
            console.error("Failed to get avatar:", data.message);
            return null;
        }
    } catch (err) {
        console.error("Error getting avatar:", err);
        return null;
    }
}

// Contoh fetch data JLPT N5
async function fetchN5Data(type) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No authentication token found");
        }

        const endpoints = {
            kanji: "/kanjin5",
            adjective: "/adjectiven5",
            adverb: "/adverbn5",
            noun: "/nounn5",
            verb: "/verbn5",
        };
        const response = await fetch(
            `http://localhost:8000${endpoints[type]}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const data = await response.json();

        if (!data.error) {
            return data.data;
        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        console.error(`Error fetching ${type} data:`, err);
        return null;
    }
}

// Contoh penggunaan:
// const kanjiData = await fetchN5Data('kanji');
// const adjectiveData = await fetchN5Data('adjective');
```

### Contoh: Manajemen State di React

```javascript
// Custom hook untuk manajemen autentikasi
import { useState, useEffect } from "react";

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const username = localStorage.getItem("username");

        if (token && userId && username) {
            setUser({ id: userId, username, token });
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        const result = await login(username, password);
        if (result.success) {
            setUser(result.data);
        }
        return result;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        setUser(null);
    };

    return { user, login, logout, loading };
};
```

## Tips untuk Frontend Developer

1. **Error Handling**: Selalu handle kemungkinan error dan token yang expired.
2. **Loading States**: Implementasikan loading state untuk memberikan feedback kepada user.
3. **Token Refresh**: Implementasikan mekanisme untuk mendeteksi token expired dan redirect ke login.
4. **File Upload**: Gunakan FormData untuk upload file dan tampilkan progress jika memungkinkan.
5. **Caching**: Pertimbangkan untuk menggunakan caching untuk data yang jarang berubah seperti hiragana/katakana.
6. **Responsive Design**: Pastikan UI responsif untuk berbagai ukuran layar.

## Endpoint Summary

| Endpoint           | Method | Auth | Deskripsi                    |
| ------------------ | ------ | ---- | ---------------------------- |
| `/register`        | POST   | No   | Pendaftaran pengguna baru    |
| `/login`           | POST   | No   | Login pengguna               |
| `/change-password` | POST   | Yes  | Ganti password               |
| `/hiragana`        | GET    | Yes  | Data karakter hiragana       |
| `/katakana`        | GET    | Yes  | Data karakter katakana       |
| `/particle`        | GET    | Yes  | Data partikel bahasa Jepang  |
| `/kanjin5`         | GET    | Yes  | Data kanji JLPT N5           |
| `/adjectiven5`     | GET    | Yes  | Data kata sifat JLPT N5      |
| `/adverbn5`        | GET    | Yes  | Data kata keterangan JLPT N5 |
| `/nounn5`          | GET    | Yes  | Data kata benda JLPT N5      |
| `/verbn5`          | GET    | Yes  | Data kata kerja JLPT N5      |
| `/number`          | GET    | Yes  | Data angka bahasa Jepang     |
| `/profile/:id`     | GET    | Yes  | Data profil pengguna         |
| `/upload`          | POST   | Yes  | Upload avatar                |
| `/avatar`          | GET    | Yes  | Mendapatkan avatar pengguna  |
