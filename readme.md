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

| Method | Endpoint         | Deskripsi                | Auth Required |
| ------ | ---------------- | ------------------------ | ------------- |
| POST   | `/auth/register` | Registrasi pengguna baru | ❌            |
| POST   | `/auth/login`    | Login pengguna           | ❌            |

### 👤 Profil Pengguna

| Method | Endpoint                   | Deskripsi                 | Auth Required |
| ------ | -------------------------- | ------------------------- | ------------- |
| POST   | `/profile/upload-avatar`   | Upload foto profil        | ✅            |
| PUT    | `/profile/change-password` | Ganti password            | ✅            |
| GET    | `/profile/avatar`          | Ambil avatar untuk navbar | ✅            |
| GET    | `/profile/:userId`         | Ambil data profil lengkap | ✅            |

### 🌟 Tampilan Depan N1 - N5 Sejajar Dengan Endpoint Berikut

| Method | Endpoint                    | Deskripsi                     | Auth Required |
| ------ | --------------------------- | ----------------------------- | ------------- |
| GET    | `/basic/particle`           | Materi partikel bahasa Jepang | ✅            |
| GET    | `/basic/hiragana`           | Materi huruf Hiragana         | ✅            |
| GET    | `/basic/katakana`           | Materi huruf Katakana         | ✅            |
| GET    | `/basic/basic-conversation` | Percakapan dasar              | ✅            |

### 📝 Materi Level N5

| Method | Endpoint                     | Deskripsi                    | Auth Required |
| ------ | ---------------------------- | ---------------------------- | ------------- |
| GET    | `/n5/kanji-n5`               | Kanji level N5               | ✅            |
| GET    | `/n5/adjective-n5`           | Kata sifat level N5          | ✅            |
| GET    | `/n5/adverb-n5`              | Kata keterangan level N5     | ✅            |
| GET    | `/n5/verb-n5`                | Kata kerja level N5          | ✅            |
| GET    | `/n5/question-word-n5`       | Kata tanya level N5          | ✅            |
| GET    | `/n5/noun-activity-n5`       | Kata benda aktivitas         | ✅            |
| GET    | `/n5/noun-animalplant-n5`    | Kata benda hewan & tumbuhan  | ✅            |
| GET    | `/n5/noun-auxnumber-n5`      | Kata benda angka bantu       | ✅            |
| GET    | `/n5/noun-body-n5`           | Kata benda bagian tubuh      | ✅            |
| GET    | `/n5/noun-city-n5`           | Kata benda kota              | ✅            |
| GET    | `/n5/noun-color-n5`          | Kata benda warna             | ✅            |
| GET    | `/n5/noun-fooddrink-n5`      | Kata benda makanan & minuman | ✅            |
| GET    | `/n5/noun-homeappliances-n5` | Kata benda peralatan rumah   | ✅            |
| GET    | `/n5/noun-kosoado-n5`        | Kata benda kosoado           | ✅            |
| GET    | `/n5/noun-media-n5`          | Kata benda media             | ✅            |
| GET    | `/n5/noun-natural-n5`        | Kata benda alam              | ✅            |
| GET    | `/n5/noun-number-n5`         | Kata benda angka             | ✅            |
| GET    | `/n5/noun-outfit-n5`         | Kata benda pakaian           | ✅            |
| GET    | `/n5/noun-people-n5`         | Kata benda orang             | ✅            |
| GET    | `/n5/noun-position-n5`       | Kata benda posisi            | ✅            |
| GET    | `/n5/noun-region-n5`         | Kata benda wilayah           | ✅            |
| GET    | `/n5/noun-school-n5`         | Kata benda sekolah           | ✅            |
| GET    | `/n5/noun-time-n5`           | Kata benda waktu             | ✅            |
| GET    | `/n5/noun-traffic-n5`        | Kata benda transportasi      | ✅            |
| GET    | `/n5/noun-work-n5`           | Kata benda pekerjaan         | ✅            |

## 🔒 Format Autentikasi

Semua endpoint yang memerlukan autentikasi harus menyertakan header:

```
Authorization: Bearer <jwt-token>
```

## 🚀 Environment Variables

| Variable       | Deskripsi            | Required |
| -------------- | -------------------- | -------- |
| `PORT`         | Port server berjalan | ✅       |
| `SUPABASE_URL` | URL Supabase project | ✅       |
| `SUPABASE_KEY` | Supabase anon key    | ✅       |
| `JWT_SECRET`   | Secret key untuk JWT | ✅       |

## � Status Codes

| Code | Deskripsi                      |
| ---- | ------------------------------ |
| 200  | Request berhasil               |
| 201  | Resource berhasil dibuat       |
| 400  | Bad request / validation error |
| 401  | Unauthorized / token invalid   |
| 403  | Forbidden / tidak ada akses    |
| 404  | Resource tidak ditemukan       |
| 500  | Internal server error          |

---

**Catatan untuk Tim**: README ini fokus pada dokumentasi endpoint. Untuk implementasi detail, hubungi tim backend.
