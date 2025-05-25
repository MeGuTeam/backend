# Dokumentasi API IKIBAN NIHONGO

Dokumen ini menyediakan detail bagi tim frontend tentang cara berinteraksi dengan API backend aplikasi Ikiban Nihongo.

## URL Dasar

```
http://localhost:3000
```

## Autentikasi

Sebagian besar endpoint memerlukan autentikasi melalui token JWT. Token harus disertakan dalam header Authorization sebagai berikut:

```
Authorization: Bearer <token>
```

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
    -   Username minimal 3 karakter
    -   Password minimal 6 karakter
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

#### Ganti Password

-   **URL:** `/change-password`
-   **Method:** `POST`
-   **Autentikasi Diperlukan:** Ya
-   **Body:**
    ```json
    {
        "id": "user_id",
        "oldPassword": "password_lama",
        "newPassword": "password_baru"
    }
    ```
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
-   **Respon Sukses:** Mengembalikan data karakter hiragana

### Katakana

-   **URL:** `/katakana`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data karakter katakana

## Tata Bahasa Jepang

### Partikel

-   **URL:** `/particle`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data partikel bahasa Jepang

## Materi Pembelajaran JLPT N5

### Kanji N5

-   **URL:** `/kanjin5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data kanji JLPT N5

### Kata Sifat N5

-   **URL:** `/adjectiven5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data kata sifat JLPT N5

### Kata Keterangan N5

-   **URL:** `/adverbn5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data kata keterangan JLPT N5

### Kata Benda N5

-   **URL:** `/nounn5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data kata benda JLPT N5

### Kata Kerja N5

-   **URL:** `/verbn5`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data kata kerja JLPT N5

## Profil Pengguna

### Mendapatkan Profil Pengguna

-   **URL:** `/profile/:profileId`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Parameter URL:** `profileId` - ID profil pengguna yang ingin diambil
-   **Respon Sukses:** Mengembalikan data profil pengguna

## Pembelajaran Angka

-   **URL:** `/number`
-   **Method:** `GET`
-   **Autentikasi Diperlukan:** Ya
-   **Respon Sukses:** Mengembalikan data angka bahasa Jepang

## Penanganan Gambar

### Unggah Avatar

-   **URL:** `/upload`
-   **Method:** `POST`
-   **Autentikasi Diperlukan:** Ya
-   **Content Type:** `multipart/form-data`
-   **Body:**
    -   `avatar`: File gambar yang akan diunggah
-   **Respon Sukses:** Mengembalikan data sukses unggah

### Get Avatar

-   **URL:** `/avatar/:userId`
-   **Method:** `GET`
-   **Auth Required:** Yes
-   **URL Parameters:** `userId` - ID of the user whose avatar to retrieve
-   **Success Response:** Returns the avatar image

## Error Responses

Common error responses include:

-   **401 Unauthorized**

    ```json
    {
        "message": "Authorization header missing or invalid"
    }
    ```

-   **401 Unauthorized**

    ```json
    {
        "message": "Invalid or expired token",
        "error": "error_details"
    }
    ```

-   **500 Internal Server Error**
    ```json
    {
        "message": "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
        "error": "error_details",
        "data": null
    }
    ```

## Implementation Notes

1. Always store the JWT token after login and include it in the Authorization header for authenticated requests.
2. Token expires after 12 hours, so users may need to log in again after that period.
3. All responses follow a standard format with `error` (boolean), `message` (string), and `data` (object or null) properties.
4. The API uses CORS and only allows requests from `http://localhost:3001`.

## Response Format

Most API endpoints return responses in the following format:

```json
{
  "error": boolean,  // true if there was an error, false otherwise
  "message": string, // A message describing the result of the operation
  "data": object     // The returned data, or null if there was an error
}
```

## Sample Code

### Example: Authentication and API Call (JavaScript)

```javascript
// Login and store token
async function login(username, password) {
    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!data.error) {
            // Store token in localStorage or secure storage
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userId", data.data.id);
            return true;
        } else {
            console.error("Login failed:", data.message);
            return false;
        }
    } catch (err) {
        console.error("Login error:", err);
        return false;
    }
}

// Example of an authenticated API call
async function getHiragana() {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No authentication token found");
            return null;
        }

        const response = await fetch("http://localhost:3000/hiragana", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!data.error) {
            return data.data;
        } else {
            console.error("Failed to fetch hiragana:", data.message);
            return null;
        }
    } catch (err) {
        console.error("Error fetching hiragana:", err);
        return null;
    }
}
```
