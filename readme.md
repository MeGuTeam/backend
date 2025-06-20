# Backend API - Aplikasi Pembelajaran Bahasa Jepang (Ikiban Nihongo)

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
npm run dev
```

Server akan berjalan di `http://localhost:8000`

## 📚 Dokumentasi Endpoint API

### 🔐 Autentikasi

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
    "message": "Berhasil mengunggah avatar",
    "data": {
        "imageUrl": "string"
    }
}
```

#### GET `/avatar` - Ambil Avatar untuk Navbar

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mengambil data avatar",
    "data": {
        "profile_picture": "string|null"
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
        "user_id": "integer",
        "username": "string",
        "profile_picture": "string|null",
        "created_at": "string",
        "updated_at": "string"
    }
}
```

### 🌟 Materi Dasar

#### GET `/particle` - Materi Partikel

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mengambil data partikel",
    "data": [
        {
            "id": "integer",
            "particle_name": "string",
            "description": "string",
            "example_sentence": "string",
            "status": "boolean" // tracking status user
        }
    ]
}
```

#### GET `/hiragana` - Materi Hiragana

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mengambil data hiragana",
    "data": [
        {
            "id": "integer",
            "hiragana_character": "string",
            "romaji": "string",
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
    "message": "Berhasil mengambil data katakana",
    "data": [
        {
            "id": "integer",
            "katakana_character": "string",
            "romaji": "string",
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
    "message": "Berhasil mengambil data percakapan dasar",
    "data": [
        {
            "id": "integer",
            "japanese": "string",
            "indonesian": "string",
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
    "message": "Berhasil mengambil data [jenis materi]",
    "data": [
        {
            "id": "integer",
            "[field_name]": "string", // Nama field sesuai jenis materi
            "meaning": "string",
            "status": "boolean"
        }
    ]
}
```

**Contoh untuk berbagai jenis materi:**

-   **Kanji N5**: `kanji_character`, `meaning`, `kunyomi`, `onyomi`
-   **Adjective N5**: `adjective`, `meaning`, `adjective_type`
-   **Verb N5**: `verb`, `meaning`, `verb_type`
-   **Noun Categories**: `[category]_name`, `meaning`

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
  "kanji_n5_id": 10,
  "status": true
}

// Tracking Noun Activity N5
{
  "noun_activity_n5_id": 3,
  "status": true
}

// Tracking Conjunction N5
{
  "conjunction_n5_id": 2,
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

| Method | Endpoint              | Deskripsi                     | Auth Required |
| ------ | --------------------- | ----------------------------- | ------------- |
| GET    | `/particle`           | Materi partikel bahasa Jepang | ✅            |
| GET    | `/hiragana`           | Materi huruf Hiragana         | ✅            |
| GET    | `/katakana`           | Materi huruf Katakana         | ✅            |
| GET    | `/basic-conversation` | Percakapan dasar              | ✅            |

### 📝 Materi Level N5

| Method | Endpoint                  | Deskripsi                    | Auth Required |
| ------ | ------------------------- | ---------------------------- | ------------- |
| GET    | `/kanji-n5`               | Kanji level N5               | ✅            |
| GET    | `/adjective-n5`           | Kata sifat level N5          | ✅            |
| GET    | `/adverb-n5`              | Kata keterangan level N5     | ✅            |
| GET    | `/verb-n5`                | Kata kerja level N5          | ✅            |
| GET    | `/question-word-n5`       | Kata tanya level N5          | ✅            |
| GET    | `/conjunction-n5`         | Kata sambung level N5        | ✅            |
| GET    | `/noun-activity-n5`       | Kata benda aktivitas         | ✅            |
| GET    | `/noun-animalplant-n5`    | Kata benda hewan & tumbuhan  | ✅            |
| GET    | `/noun-auxnumber-n5`      | Kata benda angka bantu       | ✅            |
| GET    | `/noun-body-n5`           | Kata benda bagian tubuh      | ✅            |
| GET    | `/noun-city-n5`           | Kata benda kota              | ✅            |
| GET    | `/noun-color-n5`          | Kata benda warna             | ✅            |
| GET    | `/noun-fooddrink-n5`      | Kata benda makanan & minuman | ✅            |
| GET    | `/noun-homeappliances-n5` | Kata benda peralatan rumah   | ✅            |
| GET    | `/noun-kosoado-n5`        | Kata benda kosoado           | ✅            |
| GET    | `/noun-media-n5`          | Kata benda media             | ✅            |
| GET    | `/noun-natural-n5`        | Kata benda alam              | ✅            |
| GET    | `/noun-number-n5`         | Kata benda angka             | ✅            |
| GET    | `/noun-outfit-n5`         | Kata benda pakaian           | ✅            |
| GET    | `/noun-people-n5`         | Kata benda orang             | ✅            |
| GET    | `/noun-position-n5`       | Kata benda posisi            | ✅            |
| GET    | `/noun-region-n5`         | Kata benda wilayah           | ✅            |
| GET    | `/noun-school-n5`         | Kata benda sekolah           | ✅            |
| GET    | `/noun-time-n5`           | Kata benda waktu             | ✅            |
| GET    | `/noun-traffic-n5`        | Kata benda transportasi      | ✅            |
| GET    | `/noun-work-n5`           | Kata benda pekerjaan         | ✅            |

### 🧩 Kuis

| Method | Endpoint                                | Deskripsi                       | Auth Required |
| ------ | --------------------------------------- | ------------------------------- | ------------- |
| GET    | `/quiz-categories`                      | Ambil kategori kuis             | ✅            |
| GET    | `/quiz/:quiz_category_id/:level_id`     | Ambil daftar kuis               | ✅            |
| GET    | `/quiz/:quizzes_id`                     | Generate kuis dengan pertanyaan | ✅            |
| PUT    | `/quiz/:quizzes_id/:question_id/answer` | Kirim jawaban kuis              | ✅            |
| POST   | `/quiz/:quizzes_id/submit`              | Submit dan dapatkan nilai kuis  | ✅            |

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

### 📊 Tracking Progress Pengguna

| Method | Endpoint                          | Deskripsi                                   | Auth Required |
| ------ | --------------------------------- | ------------------------------------------- | ------------- |
| POST   | `/tracker/particle`               | Tracking progress partikel                  | ✅            |
| POST   | `/tracker/hiragana`               | Tracking progress hiragana                  | ✅            |
| POST   | `/tracker/katakana`               | Tracking progress katakana                  | ✅            |
| POST   | `/tracker/basic-conversation`     | Tracking progress percakapan dasar          | ✅            |
| POST   | `/tracker/kanji-n5`               | Tracking progress kanji N5                  | ✅            |
| POST   | `/tracker/adjective-n5`           | Tracking progress kata sifat N5             | ✅            |
| POST   | `/tracker/adverb-n5`              | Tracking progress kata keterangan N5        | ✅            |
| POST   | `/tracker/verb-n5`                | Tracking progress kata kerja N5             | ✅            |
| POST   | `/tracker/noun-activity-n5`       | Tracking progress kata benda aktivitas N5   | ✅            |
| POST   | `/tracker/noun-animalplant-n5`    | Tracking progress kata benda hewan N5       | ✅            |
| POST   | `/tracker/noun-auxnumber-n5`      | Tracking progress kata benda angka bantu N5 | ✅            |
| POST   | `/tracker/noun-body-n5`           | Tracking progress kata benda tubuh N5       | ✅            |
| POST   | `/tracker/noun-city-n5`           | Tracking progress kata benda kota N5        | ✅            |
| POST   | `/tracker/noun-color-n5`          | Tracking progress kata benda warna N5       | ✅            |
| POST   | `/tracker/noun-fooddrink-n5`      | Tracking progress kata benda makanan N5     | ✅            |
| POST   | `/tracker/noun-homeappliances-n5` | Tracking progress kata benda peralatan N5   | ✅            |
| POST   | `/tracker/noun-kosoado-n5`        | Tracking progress kata benda kosoado N5     | ✅            |
| POST   | `/tracker/noun-media-n5`          | Tracking progress kata benda media N5       | ✅            |
| POST   | `/tracker/noun-natural-n5`        | Tracking progress kata benda alam N5        | ✅            |
| POST   | `/tracker/noun-number-n5`         | Tracking progress kata benda angka N5       | ✅            |
| POST   | `/tracker/noun-outfit-n5`         | Tracking progress kata benda pakaian N5     | ✅            |
| POST   | `/tracker/noun-people-n5`         | Tracking progress kata benda orang N5       | ✅            |
| POST   | `/tracker/noun-position-n5`       | Tracking progress kata benda posisi N5      | ✅            |
| POST   | `/tracker/noun-region-n5`         | Tracking progress kata benda wilayah N5     | ✅            |
| POST   | `/tracker/noun-school-n5`         | Tracking progress kata benda sekolah N5     | ✅            |
| POST   | `/tracker/noun-time-n5`           | Tracking progress kata benda waktu N5       | ✅            |
| POST   | `/tracker/noun-traffic-n5`        | Tracking progress kata benda lalu lintas N5 | ✅            |
| POST   | `/tracker/noun-work-n5`           | Tracking progress kata benda pekerjaan N5   | ✅            |
| POST   | `/tracker/question-word-n5`       | Tracking progress kata tanya N5             | ✅            |
| POST   | `/tracker/conjunction-n5`         | Tracking progress kata sambung N5           | ✅            |

## 🔒 Format Autentikasi

Semua endpoint yang memerlukan autentikasi harus menyertakan header:

```
Authorization: Bearer <jwt-token>
```
