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
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
JWT_SECRET=your_jwt_secret_key
```

4. Jalankan aplikasi

```bash
npm run dev
```

Server akan berjalan di `http://localhost:8000`

## 📚 Dokumentasi Endpoint API

### 🔐 Autentikasi

| Method | Endpoint    | Deskripsi                | Auth Required |
| ------ | ----------- | ------------------------ | ------------- |
| POST   | `/register` | Registrasi pengguna baru | ❌            |
| POST   | `/login`    | Login pengguna           | ❌            |

### 👤 Profil Pengguna

| Method | Endpoint              | Deskripsi                 | Auth Required |
| ------ | --------------------- | ------------------------- | ------------- |
| POST   | `/upload/avatar`      | Upload foto profil        | ✅            |
| PUT    | `/change-password`    | Ganti password            | ✅            |
| GET    | `/avatar`             | Ambil avatar untuk navbar | ✅            |
| GET    | `/profile/:profileId` | Ambil data profil lengkap | ✅            |

### 🌟 Tampilan Depan N1 - N5 Sejajar Dengan Endpoint Berikut

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

#### 📝 Format Request Tracking

Semua endpoint tracking menggunakan format request body berikut:

```json
{
    "particle_id": 1, // ID item yang di-track (sesuai dengan jenis tracking)
    "status": true // Status tracking saat ini (true/false)
}
```

**Contoh untuk berbagai jenis tracking:**

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
```

#### ✅ Response Format Tracking

**Success Response:**

```json
{
    "error": false,
    "message": "Berhasil menyelesaikan tracking [jenis materi]"
}
```

**Error Response:**

```json
{
    "error": true,
    "message": "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
    "data": null
}
```

## 🔒 Format Autentikasi

Semua endpoint yang memerlukan autentikasi harus menyertakan header:

```
Authorization: Bearer <jwt-token>
```
