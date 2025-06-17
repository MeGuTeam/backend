# 🗾 API Documentation - IKIBAN NIHONGO

> **Comprehensive Backend API Documentation for Frontend Developers**

Dokumen ini menyediakan detail lengkap untuk tim frontend tentang cara berinteraksi dengan API backend aplikasi **Ikiban Nihongo** - platform pembelajaran bahasa Jepang interaktif.

## 📋 Table of Contents

-   [🚀 Quick Start](#-quick-start)
-   [🏗️ Project Overview](#️-project-overview)
-   [⚙️ Setup Instructions](#️-setup-instructions)
-   [🔐 Authentication](#-authentication)
-   [📚 API Endpoints](#-api-endpoints)
-   [️ Developer Tools](#️-developer-tools)
-   [❌ Error Handling](#-error-handling)

## 🚀 Quick Start

**Base URL:** `http://localhost:8000`

**Headers Required for Protected Routes:**

```http
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

**Standard Response Format:**

```json
{
  "error": boolean,
  "message": string,
  "data": object | null
}
```

## 🏗️ Project Overview

**Ikiban Nihongo** adalah aplikasi pembelajaran bahasa Jepang yang menyediakan:

### 📖 Learning Materials

-   **Writing Systems:** Hiragana, Katakana, Kanji
-   **Grammar:** Particles, Basic Conversations, Question Words
-   **JLPT N5 Content:** Complete vocabulary categorization
-   **Numbers:** Japanese numbering system

### 🎯 Features

-   JWT-based Authentication
-   Profile Management with Avatar Upload
-   User Progress Tracking System
-   Comprehensive Learning Content API
-   RESTful API Design

### 🛠️ Tech Stack

-   **Framework:** Express.js (v5.1.0)
-   **Database:** Supabase (PostgreSQL)
-   **Authentication:** JWT with 12-hour expiration
-   **File Storage:** Supabase Storage
-   **Security:** bcrypt password hashing
-   **Middleware:** CORS, Multer for file uploads

## ⚙️ Setup Instructions

### Prerequisites

-   Node.js (v14 atau lebih tinggi)
-   npm atau yarn
-   Supabase account dan project

### 1. Clone & Install

```bash
git clone <repository-url>
cd backend
npm install
```

### 2. Environment Variables

Buat file `.env` di root directory:

```env
# Server Configuration
PORT=8000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_min_32_characters

# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_API_KEY=your_supabase_anon_key

# CORS Configuration (optional)
FRONTEND_URL=http://localhost:3000
```

### 3. Run the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

### 4. Verify Installation

```bash
curl http://localhost:8000
# Should return: "Hello World!"
```

**Server will be running on:** `http://localhost:8000`

## 🔐 Authentication

### 🔑 Token Management

-   **Token Type:** JWT (JSON Web Token)
-   **Expiration:** 12 hours
-   **Storage:** Store in `localStorage` or secure cookie
-   **Header Format:** `Authorization: Bearer <token>`

### 🔒 Security Notes

-   User ID automatically extracted from JWT token
-   No need to send user ID in request body
-   Password hashed with bcrypt
-   CORS configured for `http://localhost:3000`

### 📝 Auth Endpoints

#### Register New User

```http
POST /register
```

**Request Body:**

```json
{
    "username": "myusername", // min 6 characters
    "password": "mypassword" // min 8 characters
}
```

**Success Response (201):**

```json
{
    "error": false,
    "message": "Berhasil mendaftar"
}
```

**Error Responses:**

```json
// Username already exists (400)
{
  "error": true,
  "message": "Username sudah terdaftar",
  "data": null
}

// Validation failed (400)
{
  "error": true,
  "message": "Username minimal 3 karakter dan password minimal 6 karakter",
  "data": null
}
```

#### User Login

```http
POST /login
```

**Request Body:**

```json
{
    "username": "myusername",
    "password": "mypassword"
}
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Login berhasil!",
    "data": {
        "id": "user_uuid",
        "username": "myusername",
        "profile_picture": "https://example.com/avatar.jpg",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

**Error Responses:**

```json
// Wrong password (401)
{
  "error": true,
  "message": "Password salah",
  "data": null
}

// Username not found (401)
{
  "error": true,
  "message": "Username tidak terdaftar",
  "data": null
}
```

#### Change Password

```http
POST /change-password
```

🔒 **Authentication Required**

**Request Body:**

```json
{
    "oldPassword": "current_password",
    "newPassword": "new_password"
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

**Error Response (401):**

```json
{
    "error": true,
    "message": "Password lama salah",
    "data": null
}
```

## 📚 API Endpoints

> **Endpoints organized by Frontend Usage Context**

### 🔐 Authentication Endpoints

_Used for user registration and login functionality_

#### Register New User

```http
POST /register
```

**Request Body:**

```json
{
    "username": "myusername", // min 6 characters
    "password": "mypassword" // min 8 characters
}
```

**Success Response (201):**

```json
{
    "error": false,
    "message": "Berhasil mendaftar"
}
```

#### User Login

```http
POST /login
```

**Request Body:**

```json
{
    "username": "myusername",
    "password": "mypassword"
}
```

**Success Response (200):**

```json
{
    "error": false,
    "message": "Login berhasil!",
    "data": {
        "id": "user_uuid",
        "username": "myusername",
        "profile_picture": "https://example.com/avatar.jpg",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
}
```

---

### ⚙️ Profile Settings Endpoints

_Used in user profile settings page_

#### Upload Profile Avatar

```http
POST /upload/avatar
```

🔒 **Authentication Required**  
📎 **Content-Type:** `multipart/form-data`

**Form Data:**

-   `avatar` - Image file (JPG, PNG, etc.)

**Success Response (200):**

```json
{
    "error": false,
    "message": "Gambar profil berhasil diunggah",
    "data": {
        "imageUrl": "https://supabase.storage.url/avatarbucket/filename.jpg"
    }
}
```

#### Get User Profile Details

```http
GET /profile/:profileId
```

🔒 **Authentication Required**

**Parameters:**

-   `profileId` - User ID to fetch

**Success Response (200):**

```json
{
    "error": false,
    "message": "Data profil berhasil diambil",
    "data": {
        "user_id": "uuid",
        "username": "username",
        "profile_picture": "https://example.com/avatar.jpg"
    }
}
```

---

### �️ Navbar Profile Image Endpoint

_Used to display user avatar in navigation bar_

#### Get Current User Avatar

```http
GET /avatar
```

🔒 **Authentication Required**

**Success Response (200):**

```json
{
    "error": false,
    "message": "Gambar profil berhasil diambil",
    "data": {
        "imageUrl": "https://example.com/avatar.jpg"
    }
}
```

---

### 📖 Main Learning Material Categories

_Used in material selection menu (same level as N5-N1 selection)_

#### Japanese Particles

```http
GET /particle
```

🔒 **Authentication Required**

**Success Response (200):**

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

#### Hiragana Characters

```http
GET /hiragana
```

🔒 **Authentication Required**

**Success Response (200):**

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

#### Katakana Characters

```http
GET /katakana
```

🔒 **Authentication Required**

**Success Response (200):**

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

#### Basic Conversations

```http
GET /basic-conversation
```

🔒 **Authentication Required**

#### Question Words N5

```http
GET /question-word-n5
```

🔒 **Authentication Required**

---

### 📊 N5 Learning Materials

_Used inside N5 material section - subcategories of N5 content_

#### Core N5 Categories

##### Kanji N5

```http
GET /kanji-n5
```

🔒 **Authentication Required**

**Success Response (200):**

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
            "meaning": "person, people",
            "status": false  // User's learning progress
        }
    ]
}
```

##### Adjectives N5

```http
GET /adjective-n5
```

🔒 **Authentication Required**

**Success Response (200):**

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
            "type": "i-adjective",
            "status": false  // User's learning progress
        }
    ]
}
```

##### Adverbs N5

```http
GET /adverb-n5
```

🔒 **Authentication Required**

##### Verbs N5

```http
GET /verb-n5
```

🔒 **Authentication Required**

#### N5 Noun Categories

_Organized by topic/theme for easier learning_

##### Activity Nouns

```http
GET /noun-activity-n5
```

🔒 **Authentication Required**

##### Animal & Plant Nouns

```http
GET /noun-animalplant-n5
```

🔒 **Authentication Required**

##### Auxiliary Number Nouns

```http
GET /noun-auxnumber-n5
```

🔒 **Authentication Required**

##### Body Part Nouns

```http
GET /noun-body-n5
```

🔒 **Authentication Required**

##### City & Location Nouns

```http
GET /noun-city-n5
```

🔒 **Authentication Required**

##### Color Nouns

```http
GET /noun-color-n5
```

🔒 **Authentication Required**

##### Food & Drink Nouns

```http
GET /noun-fooddrink-n5
```

🔒 **Authentication Required**

##### Home Appliance Nouns

```http
GET /noun-homeappliances-n5
```

🔒 **Authentication Required**

##### Demonstrative Nouns (こそあど)

```http
GET /noun-kosoado-n5
```

🔒 **Authentication Required**

##### Media Nouns

```http
GET /noun-media-n5
```

🔒 **Authentication Required**

##### Nature Nouns

```http
GET /noun-natural-n5
```

🔒 **Authentication Required**

##### Number Nouns

```http
GET /noun-number-n5
```

🔒 **Authentication Required**

##### Clothing & Outfit Nouns

```http
GET /noun-outfit-n5
```

🔒 **Authentication Required**

##### People Nouns

```http
GET /noun-people-n5
```

🔒 **Authentication Required**

##### Position & Direction Nouns

```http
GET /noun-position-n5
```

🔒 **Authentication Required**

##### Region Nouns

```http
GET /noun-region-n5
```

🔒 **Authentication Required**

##### School-related Nouns

```http
GET /noun-school-n5
```

🔒 **Authentication Required**

##### Time-related Nouns

```http
GET /noun-time-n5
```

🔒 **Authentication Required**

##### Traffic & Transportation Nouns

```http
GET /noun-traffic-n5
```

🔒 **Authentication Required**

##### Work & Occupation Nouns

```http
GET /noun-work-n5
```

🔒 **Authentication Required**

### 📝 Standard N5 Vocabulary Response Format

_All N5 vocabulary endpoints return data in this format with user progress tracking:_

```json
{
    "error": false,
    "message": "Data berhasil diambil",
    "data": [
        {
            "id": 1,
            "reading": "がっこう",
            "word": "学校",
            "meaning": "school",
            "example_sentence": "学校に行きます。",
            "status": false  // User's learning progress (true if learned, false if not)
        }
    ]
}
```

### 📊 User Progress Tracking

**All learning material endpoints now include user progress tracking:**

-   Each vocabulary item includes a `status` field
-   `status: true` - User has marked this item as learned
-   `status: false` - User hasn't learned this item yet
-   Progress is automatically retrieved based on authenticated user
-   Tracking works for all N5 content: Kanji, Adjectives, Adverbs, Verbs, and all Noun categories

**Database Integration:**
-   User progress stored in `tracker` table
-   Links user ID with specific learning items
-   Enables personalized learning experience
-   Supports progress analytics and reporting

---

## 📈 User Progress Tracking System

### Overview

The **Ikiban Nihongo** API includes a comprehensive user progress tracking system that monitors individual learning progress across all N5 vocabulary categories. This system enables personalized learning experiences and progress analytics.

### How It Works

1. **Automatic Integration**: All N5 learning material endpoints automatically include user progress data
2. **User-Specific**: Progress is tracked per authenticated user using JWT tokens
3. **Real-time Updates**: Progress status is retrieved in real-time with each API call
4. **Comprehensive Coverage**: Tracks progress for:
   - Kanji N5 (25+ characters)
   - Adjectives N5 (100+ words)
   - Adverbs N5 (50+ words)
   - Verbs N5 (100+ words)
   - All 16 Noun categories (500+ words total)

### Database Schema

The tracking system uses a `tracker` table with the following structure:

```sql
CREATE TABLE tracker (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    kanji_n5_id INTEGER REFERENCES kanji_n5(kanji_id),
    adjective_n5_id INTEGER REFERENCES adjective_n5(adjective_id),
    adverb_n5_id INTEGER REFERENCES adverb_n5(adverb_id),
    verb_n5_id INTEGER REFERENCES verb_n5(verb_id),
    noun_activity_n5_id INTEGER REFERENCES noun_activity_n5(noun_activity_id),
    noun_animalplant_n5_id INTEGER REFERENCES noun_animalplant_n5(noun_animalplant_id),
    noun_auxnumber_n5_id INTEGER REFERENCES noun_auxnumber_n5(noun_auxnumber_id),
    noun_body_n5_id INTEGER REFERENCES noun_body_n5(noun_body_id),
    noun_city_n5_id INTEGER REFERENCES noun_city_n5(noun_city_id),
    noun_color_n5_id INTEGER REFERENCES noun_color_n5(noun_color_id),
    noun_fooddrink_n5_id INTEGER REFERENCES noun_fooddrink_n5(noun_fooddrink_id),
    noun_homeappliances_n5_id INTEGER REFERENCES noun_homeappliances_n5(noun_homeappliances_id),
    noun_kosoado_n5_id INTEGER REFERENCES noun_kosoado_n5(noun_kosoado_id),
    noun_media_n5_id INTEGER REFERENCES noun_media_n5(noun_media_id),
    noun_natural_n5_id INTEGER REFERENCES noun_natural_n5(noun_natural_id),
    noun_number_n5_id INTEGER REFERENCES noun_number_n5(noun_number_id),
    noun_outfit_n5_id INTEGER REFERENCES noun_outfit_n5(noun_outfit_id),
    noun_people_n5_id INTEGER REFERENCES noun_people_n5(noun_people_id),
    noun_position_n5_id INTEGER REFERENCES noun_position_n5(noun_position_id),
    noun_region_n5_id INTEGER REFERENCES noun_region_n5(noun_region_id),
    noun_school_n5_id INTEGER REFERENCES noun_school_n5(noun_school_id),
    noun_time_n5_id INTEGER REFERENCES noun_time_n5(noun_time_id),
    noun_traffic_n5_id INTEGER REFERENCES noun_traffic_n5(noun_traffic_id),
    noun_work_n5_id INTEGER REFERENCES noun_work_n5(noun_work_id),
    status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### API Response Format

All tracked learning materials now include a `status` field:

```json
{
    "error": false,
    "message": "Data berhasil diambil",
    "data": [
        {
            "id": 1,
            "reading": "example_reading",
            "word": "example_word",
            "meaning": "example meaning",
            "example_sentence": "Example sentence.",
            "status": false  // false = not learned, true = learned
        }
    ]
}
```

### Frontend Implementation Guide

#### Displaying Progress

```javascript
// Example: Display kanji with progress indicators
fetch('/kanji-n5', {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    data.data.forEach(kanji => {
        // Use kanji.status to show progress indicators
        const statusIcon = kanji.status ? '✅' : '⭕';
        console.log(`${kanji.character} ${statusIcon}`);
    });
});
```

#### Progress Analytics

```javascript
// Calculate learning progress percentage
const calculateProgress = (vocabularyArray) => {
    const learnedCount = vocabularyArray.filter(item => item.status === true).length;
    const totalCount = vocabularyArray.length;
    const percentage = (learnedCount / totalCount) * 100;
    return {
        learned: learnedCount,
        total: totalCount,
        percentage: Math.round(percentage)
    };
};
```

### Benefits for Frontend Development

1. **Real-time Progress**: No need for separate progress API calls
2. **Consistent Data**: All vocabulary endpoints follow the same format
3. **Performance**: Progress data is efficiently joined in single queries
4. **Scalability**: System ready for progress tracking across all JLPT levels
5. **User Experience**: Enables personalized learning dashboards and progress visualization

### Security Notes

- Progress data is automatically filtered by authenticated user
- No risk of accessing other users' progress data
- JWT token validation ensures secure progress tracking
- All progress queries are user-scoped by default

---

## 🔄 Migration Notes

### Recent Updates (June 2025)

- ✅ **Added User Progress Tracking**: All N5 vocabulary endpoints now include user-specific progress status
- ✅ **Enhanced Controllers**: Updated all 24 N5 controllers to support progress tracking
- ✅ **Database Integration**: Implemented comprehensive tracker table with foreign key relationships
- ✅ **Consistent API Response**: Standardized response format across all learning material endpoints
- ✅ **Performance Optimization**: Efficient JOIN queries for real-time progress data

### Breaking Changes

⚠️ **Response Format Update**: All N5 vocabulary endpoints now include an additional `status` field in the response data. Frontend applications should be updated to handle this new field.

**Before:**
```json
{
    "id": 1,
    "word": "学校",
    "meaning": "school"
}
```

**After:**
```json
{
    "id": 1,
    "word": "学校",
    "meaning": "school",
    "status": false
}
```
