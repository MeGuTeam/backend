# 🌸 Ikiban Nihongo - Backend API

> **Backend API untuk Aplikasi Pembelajaran Bahasa Jepang yang Komprehensif**

Ikiban Nihongo adalah platform pembelajaran bahasa Jepang yang menyediakan materi pembelajaran mulai dari huruf dasar (Hiragana & Katakana), kosakata level N5 N4 N3, tata bahasa, hingga kuis interaktif dengan sistem tracking progress pengguna.

## �📋 Prasyarat

Pastikan Anda sudah menginstall:

-   **Node.js** (versi 14 atau lebih baru)
-   **npm** atau **yarn**
-   **Akun Supabase** dengan database yang sudah dikonfigurasi

## ⚙️ Instalasi & Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Buat file `.env` di root folder dan isi dengan konfigurasi berikut:

```env
# Server Configuration
PORT=8000

# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_API_KEY=your_supabase_service_role_key

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
```

### 4. Jalankan Aplikasi

**Development Mode:**

```bash
npm run dev
```

**Production Mode:**

```bash
npm start
```

Server akan berjalan di `http://localhost:8000`

## 🗄️ Struktur Database

Aplikasi ini menggunakan Supabase dengan struktur tabel utama:

-   `users` - Data pengguna dan autentikasi
-   `particles` - Data partikel bahasa Jepang
-   `hiragana` / `katakana` - Huruf dasar Jepang
-   `basic_conversation` - Percakapan dasar
-   `kanjis` - Kanji level N5
-   `adjectives` - Kata sifat
-   `verbs` - Kata kerja
-   `nouns` - Kata benda (berbagai kategori)
-   `other_words` - Kata keterangan, kata tanya, konjungsi
-   `tracking` - Progress pembelajaran pengguna
-   `quizzes` / `questions` / `options` - Sistem kuis
-   `user_answers` / `quizzes_results` - Hasil kuis pengguna

## 📚 Dokumentasi Endpoint API

### Base URL

```
http://localhost:8000
```

### � Format Autentikasi

Semua endpoint yang memerlukan autentikasi harus menyertakan header:

```http
Authorization: Bearer <jwt-token>
```

---

### �🔐 Autentikasi

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

**Headers:** `Authorization: Bearer <token>`

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

---

### 👤 Profil Pengguna

#### POST `/upload/avatar` - Upload Foto Profil

**Headers:** `Authorization: Bearer <token>`  
**Content-Type:** `multipart/form-data`

**Request:**

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

**Headers:** `Authorization: Bearer <token>`

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

**Headers:** `Authorization: Bearer <token>`

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

---

### 🌟 Materi Pembelajaran Dasar

#### GET `/particle` - Materi Partikel

**Headers:** `Authorization: Bearer <token>`

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

#### GET `/particle-details` - Detail Materi Partikel

**Headers:** `Authorization: Bearer <token>`

**Success Response (200):**

```json
{
    "error": false,
    "message": "Detail data partikel berhasil diambil",
    "data": [
        {
            "id": "integer",
            "particle_name": "string",
            "description": "string",
            "example_sentence": "string",
            "status": "boolean"
        }
    ]
}
```

#### GET `/hiragana` - Materi Hiragana

**Headers:** `Authorization: Bearer <token>`

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan data hiragana",
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

**Headers:** `Authorization: Bearer <token>`

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil mendapatkan data katakana",
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

**Headers:** `Authorization: Bearer <token>`

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

#### GET `/basic-conversation-details` - Detail Percakapan Dasar

**Headers:** `Authorization: Bearer <token>`

**Success Response (200):**

```json
{
    "error": false,
    "message": "Detail data percakapan dasar berhasil diambil",
    "data": [
        {
            "id": "integer",
            "romaji": "string",
            "reading": "string",
            "word": "string",
            "meaning": "string",
            "example_sentence": "string",
            "status": "boolean"
        }
    ]
}
```

---

### 📝 Materi Level N5

Semua endpoint N5 memiliki format response yang konsisten:

#### GET `/kanji-n5` - List Kanji N5

**Headers:** `Authorization: Bearer <token>`

**Success Response (200):**

```json
{
    "error": false,
    "message": "Data kanji berhasil diambil",
    "data": [
        {
            "id": "integer",
            "word": "string"
        }
    ]
}
```

#### GET `/kanji-n5-details` - Detail Kanji N5

**Headers:** `Authorization: Bearer <token>`

**Success Response (200):**

```json
{
    "error": false,
    "message": "Detail data kanji berhasil diambil",
    "data": [
        {
            "id": "integer",
            "romaji": "string",
            "reading": "string",
            "word": "string",
            "meaning": "string",
            "kunyomi": "string",
            "onyomi": "string",
            "example_sentence": "string",
            "status": "boolean"
        }
    ]
}
```

#### Daftar Endpoint N5 Lainnya:

| Endpoint                        | Deskripsi                 |
| ------------------------------- | ------------------------- |
| `GET /adjective-n5`             | List kata sifat N5        |
| `GET /adjective-n5-details`     | Detail kata sifat N5      |
| `GET /adverb-n5`                | List kata keterangan N5   |
| `GET /adverb-n5-details`        | Detail kata keterangan N5 |
| `GET /verb-n5`                  | List kata kerja N5        |
| `GET /verb-n5-details`          | Detail kata kerja N5      |
| `GET /question-word-n5`         | List kata tanya N5        |
| `GET /question-word-n5-details` | Detail kata tanya N5      |
| `GET /conjunction-n5`           | List kata sambung N5      |
| `GET /conjunction-n5-details`   | Detail kata sambung N5    |

#### Kata Benda N5 berdasarkan Kategori:

| Endpoint                              | Deskripsi                           |
| ------------------------------------- | ----------------------------------- |
| `GET /noun-activity-n5`               | List kata benda aktivitas           |
| `GET /noun-activity-n5-details`       | Detail kata benda aktivitas         |
| `GET /noun-animalplant-n5`            | List kata benda hewan & tumbuhan    |
| `GET /noun-animalplant-n5-details`    | Detail kata benda hewan & tumbuhan  |
| `GET /noun-auxnumber-n5`              | List kata benda angka bantu         |
| `GET /noun-auxnumber-n5-details`      | Detail kata benda angka bantu       |
| `GET /noun-body-n5`                   | List kata benda bagian tubuh        |
| `GET /noun-body-n5-details`           | Detail kata benda bagian tubuh      |
| `GET /noun-city-n5`                   | List kata benda kota                |
| `GET /noun-city-n5-details`           | Detail kata benda kota              |
| `GET /noun-color-n5`                  | List kata benda warna               |
| `GET /noun-color-n5-details`          | Detail kata benda warna             |
| `GET /noun-fooddrink-n5`              | List kata benda makanan & minuman   |
| `GET /noun-fooddrink-n5-details`      | Detail kata benda makanan & minuman |
| `GET /noun-homeappliances-n5`         | List kata benda peralatan rumah     |
| `GET /noun-homeappliances-n5-details` | Detail kata benda peralatan rumah   |
| `GET /noun-kosoado-n5`                | List kata benda kosoado             |
| `GET /noun-kosoado-n5-details`        | Detail kata benda kosoado           |
| `GET /noun-media-n5`                  | List kata benda media               |
| `GET /noun-media-n5-details`          | Detail kata benda media             |
| `GET /noun-natural-n5`                | List kata benda alam                |
| `GET /noun-natural-n5-details`        | Detail kata benda alam              |
| `GET /noun-number-n5`                 | List kata benda angka               |
| `GET /noun-number-n5-details`         | Detail kata benda angka             |
| `GET /noun-outfit-n5`                 | List kata benda pakaian             |
| `GET /noun-outfit-n5-details`         | Detail kata benda pakaian           |
| `GET /noun-people-n5`                 | List kata benda orang               |
| `GET /noun-people-n5-details`         | Detail kata benda orang             |
| `GET /noun-position-n5`               | List kata benda posisi              |
| `GET /noun-position-n5-details`       | Detail kata benda posisi            |
| `GET /noun-region-n5`                 | List kata benda wilayah             |
| `GET /noun-region-n5-details`         | Detail kata benda wilayah           |
| `GET /noun-school-n5`                 | List kata benda sekolah             |
| `GET /noun-school-n5-details`         | Detail kata benda sekolah           |
| `GET /noun-time-n5`                   | List kata benda waktu               |
| `GET /noun-time-n5-details`           | Detail kata benda waktu             |
| `GET /noun-traffic-n5`                | List kata benda transportasi        |
| `GET /noun-traffic-n5-details`        | Detail kata benda transportasi      |
| `GET /noun-work-n5`                   | List kata benda pekerjaan           |
| `GET /noun-work-n5-details`           | Detail kata benda pekerjaan         |

---

### 🧩 Sistem Kuis

#### GET `/quiz-categories` - Ambil Kategori Kuis

**Headers:** `Authorization: Bearer <token>`

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

**Headers:** `Authorization: Bearer <token>`

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

**Headers:** `Authorization: Bearer <token>`

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

**Headers:** `Authorization: Bearer <token>`

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

**Headers:** `Authorization: Bearer <token>`

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

---

### 📊 Tracking Progress Pengguna

Semua endpoint tracking menggunakan format request yang sama:

**Headers:** `Authorization: Bearer <token>`

**Request Body Format:**

```json
{
    "[id_field]": "integer", // ID item yang di-track
    "status": "boolean" // Status tracking saat ini
}
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Berhasil menyelesaikan tracking [jenis materi]"
}
```

#### Daftar Endpoint Tracking:

| Method | Endpoint                       | Request Body Field      | Deskripsi                             |
| ------ | ------------------------------ | ----------------------- | ------------------------------------- |
| POST   | `/tracker/particle`            | `particle_id`           | Tracking progress partikel            |
| POST   | `/tracker/hiragana`            | `hiragana_id`           | Tracking progress hiragana            |
| POST   | `/tracker/katakana`            | `katakana_id`           | Tracking progress katakana            |
| POST   | `/tracker/basic-conversation`  | `basic_conversation_id` | Tracking progress percakapan dasar    |
| POST   | `/tracker/kanji`               | `kanji_id`              | Tracking progress kanji N5            |
| POST   | `/tracker/adjective`           | `adjective_id`          | Tracking progress kata sifat N5       |
| POST   | `/tracker/adverb`              | `other_word_id`         | Tracking progress kata keterangan N5  |
| POST   | `/tracker/verb`                | `verb_id`               | Tracking progress kata kerja N5       |
| POST   | `/tracker/question-word`       | `other_word_id`         | Tracking progress kata tanya N5       |
| POST   | `/tracker/conjunction`         | `conjunction_id`        | Tracking progress kata sambung N5     |
| POST   | `/tracker/noun-activity`       | `noun_id`               | Tracking kata benda aktivitas         |
| POST   | `/tracker/noun-animalplant`    | `noun_id`               | Tracking kata benda hewan & tumbuhan  |
| POST   | `/tracker/noun-auxnumber`      | `noun_id`               | Tracking kata benda angka bantu       |
| POST   | `/tracker/noun-body`           | `noun_id`               | Tracking kata benda tubuh             |
| POST   | `/tracker/noun-city`           | `noun_id`               | Tracking kata benda kota              |
| POST   | `/tracker/noun-color`          | `noun_id`               | Tracking kata benda warna             |
| POST   | `/tracker/noun-fooddrink`      | `noun_id`               | Tracking kata benda makanan & minuman |
| POST   | `/tracker/noun-homeappliances` | `noun_id`               | Tracking kata benda peralatan rumah   |
| POST   | `/tracker/noun-kosoado`        | `noun_id`               | Tracking kata benda kosoado           |
| POST   | `/tracker/noun-media`          | `noun_id`               | Tracking kata benda media             |
| POST   | `/tracker/noun-natural`        | `noun_id`               | Tracking kata benda alam              |
| POST   | `/tracker/noun-number`         | `noun_id`               | Tracking kata benda angka             |
| POST   | `/tracker/noun-outfit`         | `noun_id`               | Tracking kata benda pakaian           |
| POST   | `/tracker/noun-people`         | `noun_id`               | Tracking kata benda orang             |
| POST   | `/tracker/noun-position`       | `noun_id`               | Tracking kata benda posisi            |
| POST   | `/tracker/noun-region`         | `noun_id`               | Tracking kata benda wilayah           |
| POST   | `/tracker/noun-school`         | `noun_id`               | Tracking kata benda sekolah           |
| POST   | `/tracker/noun-time`           | `noun_id`               | Tracking kata benda waktu             |
| POST   | `/tracker/noun-traffic`        | `noun_id`               | Tracking kata benda transportasi      |
| POST   | `/tracker/noun-work`           | `noun_id`               | Tracking kata benda pekerjaan         |

#### Contoh Request Body untuk Tracking:

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
  "noun_id": 3,
  "status": true
}

// Tracking Conjunction N5
{
  "conjunction_id": 2,
  "status": true
}
```
