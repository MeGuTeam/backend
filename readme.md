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

## 🔒 Format Autentikasi

Semua endpoint yang memerlukan autentikasi harus menyertakan header:

```
Authorization: Bearer <jwt-token>
```
