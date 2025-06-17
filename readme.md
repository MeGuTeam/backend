# Backend API - Aplikasi Pembelajaran Bahasa Jepang (Ikiban Nihongo)

Backend API untuk aplikasi pembelajaran bahasa Jepang yang menyediakan materi pembelajaran dari level N5 hingga N1, sistem autentikasi, dan manajemen profil pengguna.

## 🚀 Teknologi yang Digunakan

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web untuk Node.js
- **Supabase** - Database dan Storage
- **JWT** - JSON Web Token untuk autentikasi
- **bcrypt** - Hashing password
- **Multer** - Upload dan handling file

## 📋 Prasyarat

Pastikan Anda sudah menginstall:
- Node.js (versi 14 atau lebih baru)
- npm atau yarn
- Akun Supabase

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
# Mode development
npm run dev

# Mode production
npm start
```

Server akan berjalan di `http://localhost:5000`

## 📚 Dokumentasi Endpoint API

### 🔐 Autentikasi
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| POST | `/auth/register` | Registrasi pengguna baru | ❌ |
| POST | `/auth/login` | Login pengguna | ❌ |

### 👤 Profil Pengguna
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| POST | `/profile/upload-avatar` | Upload foto profil | ✅ |
| PUT | `/profile/change-password` | Ganti password | ✅ |
| GET | `/profile/avatar` | Ambil avatar untuk navbar | ✅ |
| GET | `/profile` | Ambil data profil lengkap | ✅ |

### 🌟 Materi Dasar (Berlaku untuk Semua Level N1-N5)
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/basic/particle` | Materi partikel bahasa Jepang | ✅ |
| GET | `/basic/hiragana` | Materi huruf Hiragana | ✅ |
| GET | `/basic/katakana` | Materi huruf Katakana | ✅ |
| GET | `/basic/basic-conversation` | Percakapan dasar | ✅ |

### 📝 Materi Level N5
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/n5/kanji-n5` | Kanji level N5 | ✅ |
| GET | `/n5/adjective-n5` | Kata sifat level N5 | ✅ |
| GET | `/n5/adverb-n5` | Kata keterangan level N5 | ✅ |
| GET | `/n5/verb-n5` | Kata kerja level N5 | ✅ |
| GET | `/n5/question-word-n5` | Kata tanya level N5 | ✅ |
| GET | `/n5/noun-activity-n5` | Kata benda aktivitas | ✅ |
| GET | `/n5/noun-animalplant-n5` | Kata benda hewan & tumbuhan | ✅ |
| GET | `/n5/noun-auxnumber-n5` | Kata benda angka bantu | ✅ |
| GET | `/n5/noun-body-n5` | Kata benda bagian tubuh | ✅ |
| GET | `/n5/noun-city-n5` | Kata benda kota | ✅ |
| GET | `/n5/noun-color-n5` | Kata benda warna | ✅ |
| GET | `/n5/noun-fooddrink-n5` | Kata benda makanan & minuman | ✅ |
| GET | `/n5/noun-homeappliances-n5` | Kata benda peralatan rumah | ✅ |
| GET | `/n5/noun-kosoado-n5` | Kata benda kosoado | ✅ |
| GET | `/n5/noun-media-n5` | Kata benda media | ✅ |
| GET | `/n5/noun-natural-n5` | Kata benda alam | ✅ |
| GET | `/n5/noun-number-n5` | Kata benda angka | ✅ |
| GET | `/n5/noun-outfit-n5` | Kata benda pakaian | ✅ |
| GET | `/n5/noun-people-n5` | Kata benda orang | ✅ |
| GET | `/n5/noun-position-n5` | Kata benda posisi | ✅ |
| GET | `/n5/noun-region-n5` | Kata benda wilayah | ✅ |
| GET | `/n5/noun-school-n5` | Kata benda sekolah | ✅ |
| GET | `/n5/noun-time-n5` | Kata benda waktu | ✅ |
| GET | `/n5/noun-traffic-n5` | Kata benda transportasi | ✅ |
| GET | `/n5/noun-work-n5` | Kata benda pekerjaan | ✅ |

### 📚 Materi Level N4
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/n4/kanji-n4` | Kanji level N4 | ✅ |
| GET | `/n4/adjective-n4` | Kata sifat level N4 | ✅ |
| GET | `/n4/adverb-n4` | Kata keterangan level N4 | ✅ |
| GET | `/n4/verb-n4` | Kata kerja level N4 | ✅ |
| GET | `/n4/grammar-n4` | Tata bahasa level N4 | ✅ |

### 📖 Materi Level N3
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/n3/kanji-n3` | Kanji level N3 | ✅ |
| GET | `/n3/adjective-n3` | Kata sifat level N3 | ✅ |
| GET | `/n3/adverb-n3` | Kata keterangan level N3 | ✅ |
| GET | `/n3/verb-n3` | Kata kerja level N3 | ✅ |
| GET | `/n3/grammar-n3` | Tata bahasa level N3 | ✅ |

### 📘 Materi Level N2
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/n2/kanji-n2` | Kanji level N2 | ✅ |
| GET | `/n2/adjective-n2` | Kata sifat level N2 | ✅ |
| GET | `/n2/adverb-n2` | Kata keterangan level N2 | ✅ |
| GET | `/n2/verb-n2` | Kata kerja level N2 | ✅ |
| GET | `/n2/grammar-n2` | Tata bahasa level N2 | ✅ |

### 📗 Materi Level N1
| Method | Endpoint | Deskripsi | Auth Required |
|--------|----------|-----------|---------------|
| GET | `/n1/kanji-n1` | Kanji level N1 | ✅ |
| GET | `/n1/adjective-n1` | Kata sifat level N1 | ✅ |
| GET | `/n1/adverb-n1` | Kata keterangan level N1 | ✅ |
| GET | `/n1/verb-n1` | Kata kerja level N1 | ✅ |
| GET | `/n1/grammar-n1` | Tata bahasa level N1 | ✅ |


## 🔒 Format Autentikasi

Semua endpoint yang memerlukan autentikasi harus menyertakan header:
```
Authorization: Bearer <jwt-token>
```

## � Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Success message"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## �📁 Struktur Project

```
src/
├── app.js                 # Entry point aplikasi
├── config/
│   └── supabase.js       # Konfigurasi Supabase
├── controllers/          # Logic bisnis
│   ├── authController.js
│   ├── basicSubjectController.js
│   ├── imageController.js
│   ├── n5Controller.js
│   └── profileController.js
├── middleware/
│   └── middleware.js     # Middleware autentikasi
├── routes/              # Definisi routes
│   ├── authRoutes.js
│   ├── basicSubjectRoutes.js
│   ├── imageRoutes.js
│   ├── index.js
│   ├── n5Routes.js
│   └── profileRoutes.js
└── utils/
    └── validateInput.js  # Validasi input
```

## 🚀 Environment Variables

| Variable | Deskripsi | Required |
|----------|-----------|----------|
| `PORT` | Port server berjalan | ✅ |
| `SUPABASE_URL` | URL Supabase project | ✅ |
| `SUPABASE_KEY` | Supabase anon key | ✅ |
| `JWT_SECRET` | Secret key untuk JWT | ✅ |

## 📋 Notes untuk Tim Frontend

1. **Base URL**: `http://localhost:5000` (development)
2. **Content-Type**: `application/json` untuk semua request (kecuali upload file)
3. **Authentication**: Simpan JWT token dari login response untuk request selanjutnya
4. **Error Handling**: Semua error response mengikuti format yang sama
5. **CORS**: Sudah dikonfigurasi untuk `http://localhost:3000`

## � Status Codes

| Code | Deskripsi |
|------|-----------|
| 200 | Request berhasil |
| 201 | Resource berhasil dibuat |
| 400 | Bad request / validation error |
| 401 | Unauthorized / token invalid |
| 403 | Forbidden / tidak ada akses |
| 404 | Resource tidak ditemukan |
| 500 | Internal server error |

---

**Catatan untuk Tim**: README ini fokus pada dokumentasi endpoint. Untuk implementasi detail, hubungi tim backend.