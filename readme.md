# Backend API - Aplikasi Pembelajaran Bahasa Jepang (MeGu)

## 📋 Prasyarat

Pastikan Anda sudah menginstall:

-   Node.js (versi 14 atau lebih baru)
-   npm atau yarn
-   Akun Supabase

## ⚙️ Instalasi

1. Clone repository ini

```bash
git clone <repository-url>
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Buat file `.env` di root folder dan isi dengan konfigurasi berikut:

```env
PORT=8000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
JWT_SECRET=your_jwt_secret_key
SUPABASE_API_KEY=your_supabase_api_key
```

4. Jalankan aplikasi

```bash
# Development mode (dengan auto-reload)
npm run dev

# Production mode
npm start
```

Server akan berjalan di `http://localhost:8000`

## ⚡ Scripts Tersedia

-   `npm start` - Menjalankan aplikasi dalam mode production
-   `npm run dev` - Menjalankan aplikasi dalam mode development dengan nodemon
-   `npm test` - Menjalankan test (belum diimplementasi)

## 📦 Dependencies

Project ini menggunakan dependencies berikut:

### Production Dependencies

-   **@supabase/supabase-js** - Client library untuk Supabase
-   **bcrypt** - Library untuk hashing password
-   **cors** - Middleware untuk mengatur Cross-Origin Resource Sharing
-   **dotenv** - Untuk mengload environment variables
-   **express** - Web framework untuk Node.js
-   **jsonwebtoken** - Untuk implementasi JWT authentication
-   **multer** - Middleware untuk handling multipart/form-data (file upload)

### Dev Dependencies

-   **nodemon** - Tool untuk auto-restart aplikasi saat development (perlu diinstall secara global atau tambahkan ke devDependencies)

## 🔧 Konfigurasi

### CORS Configuration

Aplikasi ini dikonfigurasi untuk menerima request dari:

-   **Origin**: `http://localhost:3000` (Frontend development server)
-   **Methods**: GET, POST, PUT, DELETE
-   **Credentials**: Enabled

### File Upload Configuration

-   Menggunakan **multer** dengan memory storage
-   Support untuk upload avatar/profile picture
-   File disimpan di Supabase Storage

## 📚 Dokumentasi Endpoint API

### 🔥 Autentikasi

#### POST `/register` - Registrasi Pengguna Baru

**Request Body:**

```json
{
    "username": "string", // 3-20 karakter, hanya huruf, angka, dan underscore
    "password": "string" // Min 8 karakter, kombinasi huruf besar/kecil, angka, simbol
}
```

**Success Response (201):**

```json
{
    "error": false,
    "message": "Berhasil mendaftar"
}
```

**Error Response (400/500):**

```json
{
    "error": true,
    "message": "Error message",
    "data": null
}
```

#### POST `/login` - Login Pengguna

**Request Body:**

```json
{
    "username": "string",
    "password": "string"
}
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Login berhasil!",
    "data": {
        "id": "integer",
        "username": "string",
        "profile_picture": "string|null",
        "token": "string"
    }
}
```

#### POST `/change-password` - Ganti Password

**Request Body:**

```json
{
    "oldPassword": "string",
    "newPassword": "string" // Min 8 karakter, kombinasi huruf besar/kecil, angka, simbol
}
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Password berhasil diubah",
    "data": null
}
```

### 👤 Profil Pengguna

#### POST `/upload/avatar` - Upload Foto Profil

**Request:** Multipart form-data

```
avatar: File (image file)
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mengunggah avatar"
}
```

#### GET `/avatar` - Ambil Avatar untuk Navbar

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mengambil data avatar",
    "data": {
        "imageUrl": "string|null"
    }
}
```

#### GET `/profile/:profileId` - Ambil Data Profil Lengkap

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mengambil data profil",
    "data": {
        "username": "string",
        "profile_picture": "string|null"
    }
}
```

### 🌟 Materi Dasar

#### GET `/particle` - Materi Partikel

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan data partikel",
    "data": [
        {
            "id": "integer",
            "particle_name": "string"
        }
    ]
}
```

#### GET `/particle/details` - Detail Materi Partikel

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan detail partikel",
    "data": [
        {
            "id": "integer",
            "romaji": "string",
            "particle_name": "string",
            "description": "string",
            "example_sentence": "string",
            "status": "boolean"
        }
    ]
}
```

#### GET `/hiragana` - Materi Hiragana

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan data hiragana",
    "data": [
        {
            "id": "integer",
            "character": "string",
            "romaji": "string",
            "type": "string",
            "status": "boolean"
        }
    ]
}
```

#### GET `/katakana` - Materi Katakana

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan data katakana",
    "data": [
        {
            "id": "integer",
            "character": "string",
            "romaji": "string",
            "type": "string",
            "status": "boolean"
        }
    ]
}
```

#### GET `/basic-conversation` - Percakapan Dasar

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan data percakapan dasar",
    "data": [
        {
            "id": "integer",
            "word": "string",
            "reading": "string",
            "meaning": "string"
        }
    ]
}
```

#### GET `/basic-conversation/details` - Detail Percakapan Dasar

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan detail percakapan dasar",
    "data": [
        {
            "id": "integer",
            "word": "string",
            "reading": "string",
            "meaning": "string",
            "type": "string",
            "example_sentence": "string",
            "status": "boolean"
        }
    ]
}
```

### 📝 Materi Level N5

Semua endpoint N5 memiliki format response yang sama:

**Success Response (200):**

```json
{
    "error": false,
    "message": "Data [jenis materi] berhasil diambil",
    "data": [
        {
            "id": "integer",
            "character": "string" // Nama field bervariasi sesuai jenis materi
        }
    ]
}
```

**Contoh untuk berbagai jenis materi:**

-   **Kanji N5**: `character` (karakter kanji)
-   **Adjective N5**: `character` (kata sifat)
-   **Verb N5**: `character` (kata kerja)
-   **Noun Categories**: `character` (kata benda)

#### Detail Routes N5

Semua materi N5 juga memiliki endpoint details dengan format:

**GET `/[materi]-n5-details`** - Detail materi dengan status tracking

**Success Response (200):**

```json
{
    "error": false,
    "message": "Detail data [jenis materi] berhasil diambil",
    "data": [
        {
            "id": "integer",
            "romaji": "string",
            "character": "string",
            "meaning": "string",
            "status": "boolean"
        }
    ]
}
```

**Contoh tambahan field untuk berbagai jenis materi:**

-   **Kanji N5**: `onyomi`, `kunyomi`
-   **Adjective N5**: (tidak ada field tambahan)
-   **Verb N5**: (tidak ada field tambahan)
-   **Noun Categories**: (tidak ada field tambahan)

### 📊 Tracking Progress

Semua endpoint tracking menggunakan format yang sama:

#### POST `/tracker/[materi]` - Tracking Progress

**Request Body:**

```json
{
    "[materi]_id": "integer", // ID item yang di-track
    "status": "boolean" // Status tracking saat ini
}
```

**Contoh Request Body untuk berbagai materi:**

```json
// Tracking Particle
{
  "particle_id": 1,
  "status": true
}

// Tracking Hiragana
{
  "hiragana_id": 5,
  "status": false
}

// Tracking Kanji N5
{
  "kanji_id": 10,
  "status": true
}

// Tracking Noun Activity N5
{
  "noun_activity_id": 3,
  "status": true
}

// Tracking Conjunction N5
{
  "conjunction_id": 2,
  "status": true
}
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil menyelesaikan tracking [jenis materi]"
}
```

**Error Response (500):**

```json
{
    "error": true,
    "message": "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
    "data": null
}
```

## 📋 Tabel Endpoint API

### 🔥 Autentikasi

| Method | Endpoint           | Deskripsi                | Auth Required |
| ------ | ------------------ | ------------------------ | ------------- |
| POST   | `/register`        | Registrasi pengguna baru | ❌            |
| POST   | `/login`           | Login pengguna           | ❌            |
| POST   | `/change-password` | Ganti password           | ✅            |

### 👤 Profil Pengguna

| Method | Endpoint              | Deskripsi                 | Auth Required |
| ------ | --------------------- | ------------------------- | ------------- |
| POST   | `/upload/avatar`      | Upload foto profil        | ✅            |
| GET    | `/avatar`             | Ambil avatar untuk navbar | ✅            |
| GET    | `/profile/:profileId` | Ambil data profil lengkap | ✅            |

### 🌟 Materi Dasar

| Method | Endpoint                      | Deskripsi                     | Auth Required |
| ------ | ----------------------------- | ----------------------------- | ------------- |
| GET    | `/particle`                   | Materi partikel bahasa Jepang | ✅            |
| GET    | `/particle/details`           | Detail materi partikel        | ✅            |
| GET    | `/hiragana`                   | Materi huruf Hiragana         | ✅            |
| GET    | `/katakana`                   | Materi huruf Katakana         | ✅            |
| GET    | `/basic-conversation`         | Percakapan dasar              | ✅            |
| GET    | `/basic-conversation/details` | Detail percakapan dasar       | ✅            |

### 📝 Materi Level N5

| Method | Endpoint                          | Deskripsi                           | Auth Required |
| ------ | --------------------------------- | ----------------------------------- | ------------- |
| GET    | `/kanji-n5`                       | Kanji level N5                      | ✅            |
| GET    | `/kanji-n5-details`               | Detail Kanji level N5               | ✅            |
| GET    | `/adjective-n5`                   | Kata sifat level N5                 | ✅            |
| GET    | `/adjective-n5-details`           | Detail kata sifat level N5          | ✅            |
| GET    | `/adverb-n5`                      | Kata keterangan level N5            | ✅            |
| GET    | `/adverb-n5-details`              | Detail kata keterangan level N5     | ✅            |
| GET    | `/verb-n5`                        | Kata kerja level N5                 | ✅            |
| GET    | `/verb-n5-details`                | Detail kata kerja level N5          | ✅            |
| GET    | `/question-word-n5`               | Kata tanya level N5                 | ✅            |
| GET    | `/question-word-n5-details`       | Detail kata tanya level N5          | ✅            |
| GET    | `/conjunction-n5`                 | Kata sambung level N5               | ✅            |
| GET    | `/conjunction-n5-details`         | Detail kata sambung level N5        | ✅            |
| GET    | `/noun-activity-n5`               | Kata benda aktivitas                | ✅            |
| GET    | `/noun-activity-n5-details`       | Detail kata benda aktivitas         | ✅            |
| GET    | `/noun-animalplant-n5`            | Kata benda hewan & tumbuhan         | ✅            |
| GET    | `/noun-animalplant-n5-details`    | Detail kata benda hewan & tumbuhan  | ✅            |
| GET    | `/noun-auxnumber-n5`              | Kata benda angka bantu              | ✅            |
| GET    | `/noun-auxnumber-n5-details`      | Detail kata benda angka bantu       | ✅            |
| GET    | `/noun-body-n5`                   | Kata benda bagian tubuh             | ✅            |
| GET    | `/noun-body-n5-details`           | Detail kata benda bagian tubuh      | ✅            |
| GET    | `/noun-city-n5`                   | Kata benda kota                     | ✅            |
| GET    | `/noun-city-n5-details`           | Detail kata benda kota              | ✅            |
| GET    | `/noun-color-n5`                  | Kata benda warna                    | ✅            |
| GET    | `/noun-color-n5-details`          | Detail kata benda warna             | ✅            |
| GET    | `/noun-fooddrink-n5`              | Kata benda makanan & minuman        | ✅            |
| GET    | `/noun-fooddrink-n5-details`      | Detail kata benda makanan & minuman | ✅            |
| GET    | `/noun-homeappliances-n5`         | Kata benda peralatan rumah          | ✅            |
| GET    | `/noun-homeappliances-n5-details` | Detail kata benda peralatan rumah   | ✅            |
| GET    | `/noun-kosoado-n5`                | Kata benda kosoado                  | ✅            |
| GET    | `/noun-kosoado-n5-details`        | Detail kata benda kosoado           | ✅            |
| GET    | `/noun-media-n5`                  | Kata benda media                    | ✅            |
| GET    | `/noun-media-n5-details`          | Detail kata benda media             | ✅            |
| GET    | `/noun-natural-n5`                | Kata benda alam                     | ✅            |
| GET    | `/noun-natural-n5-details`        | Detail kata benda alam              | ✅            |
| GET    | `/noun-number-n5`                 | Kata benda angka                    | ✅            |
| GET    | `/noun-number-n5-details`         | Detail kata benda angka             | ✅            |
| GET    | `/noun-outfit-n5`                 | Kata benda pakaian                  | ✅            |
| GET    | `/noun-outfit-n5-details`         | Detail kata benda pakaian           | ✅            |
| GET    | `/noun-people-n5`                 | Kata benda orang                    | ✅            |
| GET    | `/noun-people-n5-details`         | Detail kata benda orang             | ✅            |
| GET    | `/noun-position-n5`               | Kata benda posisi                   | ✅            |
| GET    | `/noun-position-n5-details`       | Detail kata benda posisi            | ✅            |
| GET    | `/noun-region-n5`                 | Kata benda wilayah                  | ✅            |
| GET    | `/noun-region-n5-details`         | Detail kata benda wilayah           | ✅            |
| GET    | `/noun-school-n5`                 | Kata benda sekolah                  | ✅            |
| GET    | `/noun-school-n5-details`         | Detail kata benda sekolah           | ✅            |
| GET    | `/noun-time-n5`                   | Kata benda waktu                    | ✅            |
| GET    | `/noun-time-n5-details`           | Detail kata benda waktu             | ✅            |
| GET    | `/noun-traffic-n5`                | Kata benda transportasi             | ✅            |
| GET    | `/noun-traffic-n5-details`        | Detail kata benda transportasi      | ✅            |
| GET    | `/noun-work-n5`                   | Kata benda pekerjaan                | ✅            |
| GET    | `/noun-work-n5-details`           | Detail kata benda pekerjaan         | ✅            |

### 🧩 Kuis

| Method | Endpoint                                | Deskripsi                       | Auth Required |
| ------ | --------------------------------------- | ------------------------------- | ------------- |
| GET    | `/quiz-categories`                      | Ambil kategori kuis             | ✅            |
| GET    | `/quiz/:quiz_category_id/:level_id`     | Ambil daftar kuis               | ✅            |
| GET    | `/quiz/:quizzes_id`                     | Generate kuis dengan pertanyaan | ✅            |
| PUT    | `/quiz/:quizzes_id/:question_id/answer` | Kirim jawaban kuis              | ✅            |
| POST   | `/quiz/:quizzes_id/submit`              | Submit dan dapatkan nilai kuis  | ✅            |

### 📊 Dashboard & Statistics

| Method | Endpoint    | Deskripsi                          | Auth Required |
| ------ | ----------- | ---------------------------------- | ------------- |
| GET    | `/bar-home` | Ambil data statistik untuk beranda | ✅            |

### 🧩 Kuis

#### GET `/quiz-categories` - Ambil Kategori Kuis

**Success Response (200):**

```json
{
    "error": false,
    "message": "Kategori kuis berhasil diambil",
    "data": [
        {
            "id": "integer",
            "category": "string"
        }
    ]
}
```

#### GET `/quiz/:quiz_category_id/:level_id` - Ambil Daftar Kuis

**Success Response (200):**

```json
{
    "error": false,
    "message": "Kuis berhasil diambil",
    "data": [
        {
            "quizzes_id": "integer",
            "title": "string",
            "category": "string",
            "level": "string"
        }
    ]
}
```

#### GET `/quiz/:quizzes_id` - Generate Kuis dengan Pertanyaan

**Success Response (200):**

```json
{
    "error": false,
    "message": "Kuis berhasil dibuat",
    "data": {
        "quizzes_id": "integer",
        "title": "string",
        "category": "string",
        "level": "string",
        "questions": [
            {
                "question_id": "integer",
                "question_text": "string",
                "utils": "string|null",
                "options": [
                    {
                        "option_id": "integer",
                        "option_text": "string"
                    }
                ]
            }
        ]
    }
}
```

#### PUT `/quiz/:quizzes_id/:question_id/answer` - Kirim Jawaban Kuis

**Request Body:**

```json
{
    "option_id": "integer"
}
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Jawaban berhasil dikirim",
    "data": null
}
```

#### POST `/quiz/:quizzes_id/submit` - Submit dan Dapatkan Nilai Kuis

**Success Response (200):**

```json
{
    "error": false,
    "message": "Kuis berhasil diselesaikan",
    "data": {
        "score": "number"
    }
}
```

### 📊 Dashboard & Statistics

#### GET `/bar-home` - Ambil Data Statistik untuk Beranda

**Success Response (200):**

```json
{
    "error": false,
    "message": "Data statistik berhasil diambil",
    "data": {
        // Data statistik untuk dashboard beranda
    }
}
```

### 📊 Tracking Progress Pengguna

| Method | Endpoint                       | Deskripsi                                | Auth Required |
| ------ | ------------------------------ | ---------------------------------------- | ------------- |
| POST   | `/tracker/particle`            | Tracking progress partikel               | ✅            |
| POST   | `/tracker/hiragana`            | Tracking progress hiragana               | ✅            |
| POST   | `/tracker/katakana`            | Tracking progress katakana               | ✅            |
| POST   | `/tracker/basic-conversation`  | Tracking progress percakapan dasar       | ✅            |
| POST   | `/tracker/kanji`               | Tracking progress kanji                  | ✅            |
| POST   | `/tracker/adjective`           | Tracking progress kata sifat             | ✅            |
| POST   | `/tracker/adverb`              | Tracking progress kata keterangan        | ✅            |
| POST   | `/tracker/verb`                | Tracking progress kata kerja             | ✅            |
| POST   | `/tracker/noun-activity`       | Tracking progress kata benda aktivitas   | ✅            |
| POST   | `/tracker/noun-animalplant`    | Tracking progress kata benda hewan       | ✅            |
| POST   | `/tracker/noun-auxnumber`      | Tracking progress kata benda angka bantu | ✅            |
| POST   | `/tracker/noun-body`           | Tracking progress kata benda tubuh       | ✅            |
| POST   | `/tracker/noun-city`           | Tracking progress kata benda kota        | ✅            |
| POST   | `/tracker/noun-color`          | Tracking progress kata benda warna       | ✅            |
| POST   | `/tracker/noun-fooddrink`      | Tracking progress kata benda makanan     | ✅            |
| POST   | `/tracker/noun-homeappliances` | Tracking progress kata benda peralatan   | ✅            |
| POST   | `/tracker/noun-kosoado`        | Tracking progress kata benda kosoado     | ✅            |
| POST   | `/tracker/noun-media`          | Tracking progress kata benda media       | ✅            |
| POST   | `/tracker/noun-natural`        | Tracking progress kata benda alam        | ✅            |
| POST   | `/tracker/noun-number`         | Tracking progress kata benda angka       | ✅            |
| POST   | `/tracker/noun-outfit`         | Tracking progress kata benda pakaian     | ✅            |
| POST   | `/tracker/noun-people`         | Tracking progress kata benda orang       | ✅            |
| POST   | `/tracker/noun-position`       | Tracking progress kata benda posisi      | ✅            |
| POST   | `/tracker/noun-region`         | Tracking progress kata benda wilayah     | ✅            |
| POST   | `/tracker/noun-school`         | Tracking progress kata benda sekolah     | ✅            |
| POST   | `/tracker/noun-time`           | Tracking progress kata benda waktu       | ✅            |
| POST   | `/tracker/noun-traffic`        | Tracking progress kata benda lalu lintas | ✅            |
| POST   | `/tracker/noun-work`           | Tracking progress kata benda pekerjaan   | ✅            |
| POST   | `/tracker/question-word`       | Tracking progress kata tanya             | ✅            |
| POST   | `/tracker/conjunction`         | Tracking progress kata sambung           | ✅            |

## 🔒 Format Autentikasi

Semua endpoint yang memerlukan autentikasi harus menyertakan header:

```
Authorization: Bearer <jwt-token>
```
