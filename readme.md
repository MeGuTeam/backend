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
            "meaning": "person, people"
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
            "type": "i-adjective"
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

_All N5 vocabulary endpoints return data in this format:_

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
            "example_sentence": "学校に行きます。"
        }
    ]
}
```

---

### 🎯 Frontend Usage Guide

**For Material Selection Menu:**

-   Use `/particle`, `/hiragana`, `/katakana`, `/basic-conversation`, `/question-word-n5`
-   These appear at the same level as N5-N1 buttons

**For N5 Subcategories:**

-   Use `/kanji-n5`, `/adjective-n5`, `/adverb-n5`, `/verb-n5`
-   Use noun category endpoints for organized vocabulary learning

**For User Interface:**

-   Use `/avatar` for navbar profile image
-   Use `/profile/:id` and `/upload/avatar` for profile settings

**For Authentication:**

-   Use `/register` and `/login` for user onboarding

## ️ Developer Tools

### 📊 API Testing

#### Postman Collection

```json
{
    "info": {
        "name": "Ikiban Nihongo API",
        "description": "Complete API collection for testing"
    },
    "variable": [
        {
            "key": "baseUrl",
            "value": "http://localhost:8000",
            "type": "string"
        },
        {
            "key": "token",
            "value": "{{token}}",
            "type": "string"
        }
    ],
    "auth": {
        "type": "bearer",
        "bearer": [
            {
                "key": "token",
                "value": "{{token}}",
                "type": "string"
            }
        ]
    }
}
```

#### cURL Examples

```bash
# Login
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass123"}'

# Get Hiragana (with auth)
curl -X GET http://localhost:8000/hiragana \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Upload Avatar
curl -X POST http://localhost:8000/upload/avatar \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "avatar=@/path/to/image.jpg"
```

### 🐛 Debugging Tips

#### Common Issues & Solutions

**1. CORS Errors**

```javascript
// Make sure your frontend runs on http://localhost:3000
// Or update CORS settings in app.js
```

**2. Token Expiration**

```javascript
// Check token expiration before API calls
function isTokenExpired(token) {
    try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        return decoded.exp < Date.now() / 1000;
    } catch {
        return true;
    }
}
```

**3. File Upload Issues**

```javascript
// Ensure FormData is used correctly
const formData = new FormData();
formData.append("avatar", file); // Key must be 'avatar'
```

### 📈 Performance Tips

#### Data Caching

```javascript
// Cache static content like hiragana/katakana
const cache = new Map();

async function getCachedContent(type, apiCall) {
    if (cache.has(type)) {
        return cache.get(type);
    }

    const data = await apiCall();
    cache.set(type, data);
    return data;
}
```

#### Batch Requests

```javascript
// Load multiple content types at once
async function loadAllBasicContent() {
    const [hiragana, katakana, particles] = await Promise.all([
        api.getHiragana(),
        api.getKatakana(),
        api.getParticles(),
    ]);

    return { hiragana, katakana, particles };
}
```

### 🔍 Response Format Reference

#### Success Response Structure

```typescript
interface SuccessResponse<T> {
    error: false;
    message: string;
    data: T; // Single object endpoints
    datas?: T[]; // Array endpoints (hiragana, katakana, particles)
}
```

#### Error Response Structure

```typescript
interface ErrorResponse {
    error: true;
    message: string;
    data: null;
}
```

#### Character Data Structure

```typescript
interface Character {
    id: number;
    character: string;
    romaji: string;
    type: "monograph" | "digraph";
}
```

#### N5 Vocabulary Structure

```typescript
interface N5Vocabulary {
    id: number;
    reading: string;
    word: string;
    meaning: string;
    example_sentence: string;
    type?: string; // For adjectives: 'i-adjective' | 'na-adjective'
}
```

## ❌ Error Handling

### HTTP Status Codes

| Code | Description           | Common Scenarios                         |
| ---- | --------------------- | ---------------------------------------- |
| 200  | OK                    | Successful requests                      |
| 201  | Created               | Successful registration                  |
| 400  | Bad Request           | Invalid input, missing fields            |
| 401  | Unauthorized          | Invalid/expired token, wrong credentials |
| 404  | Not Found             | User not found, invalid endpoint         |
| 500  | Internal Server Error | Database errors, server issues           |

### Error Response Examples

#### Authentication Errors

```json
// Missing Authorization header
{
  "message": "Authorization header missing or invalid"
}

// Invalid/Expired token
{
  "message": "Invalid or expired token",
  "error": "JsonWebTokenError: invalid signature"
}

// Wrong credentials
{
  "error": true,
  "message": "Password salah",
  "data": null
}
```

#### Validation Errors

```json
// Empty fields
{
  "error": true,
  "message": "Username dan password tidak boleh kosong",
  "data": null
}

// Invalid input format
{
  "error": true,
  "message": "Inputan tidak valid",
  "data": null
}
```

#### File Upload Errors

```json
// No file provided
{
  "error": true,
  "message": "No file uploaded"
}

// User not found for avatar update
{
  "error": true,
  "message": "User tidak ditemukan",
  "data": null
}
```

### Frontend Error Handling Strategy

```javascript
class APIError extends Error {
    constructor(message, status, data = null) {
        super(message);
        this.name = "APIError";
        this.status = status;
        this.data = data;
    }
}

async function handleAPICall(apiFunction) {
    try {
        return await apiFunction();
    } catch (error) {
        // Handle different error types
        if (error.status === 401) {
            // Token expired or invalid
            localStorage.removeItem("token");
            window.location.href = "/login";
        } else if (error.status === 400) {
            // Validation error - show to user
            showUserError(error.message);
        } else if (error.status >= 500) {
            // Server error - generic message
            showUserError("Server sedang bermasalah. Coba lagi nanti.");
        }

        throw error;
    }
}
```

---

## 📝 API Endpoint Summary

### Quick Reference Table

| Endpoint              | Method | Auth | Description              |
| --------------------- | ------ | ---- | ------------------------ |
| `/register`           | POST   | ❌   | Register new user        |
| `/login`              | POST   | ❌   | User login               |
| `/change-password`    | POST   | ✅   | Change password          |
| `/profile/:id`        | GET    | ✅   | Get user profile         |
| `/upload/avatar`      | POST   | ✅   | Upload profile picture   |
| `/avatar`             | GET    | ✅   | Get user avatar          |
| `/hiragana`           | GET    | ✅   | Get hiragana characters  |
| `/katakana`           | GET    | ✅   | Get katakana characters  |
| `/particle`           | GET    | ✅   | Get particles            |
| `/basic-conversation` | GET    | ✅   | Get basic conversations  |
| `/question-word-n5`   | GET    | ✅   | Get question words       |
| `/kanji-n5`           | GET    | ✅   | Get N5 kanji             |
| `/adjective-n5`       | GET    | ✅   | Get N5 adjectives        |
| `/adverb-n5`          | GET    | ✅   | Get N5 adverbs           |
| `/verb-n5`            | GET    | ✅   | Get N5 verbs             |
| `/noun-*-n5`          | GET    | ✅   | Get N5 nouns by category |

### Noun Categories Available

-   `activity` - Activities and actions
-   `animalplant` - Animals and plants
-   `auxnumber` - Auxiliary numbers
-   `body` - Body parts
-   `city` - Cities and locations
-   `color` - Colors
-   `fooddrink` - Food and drinks
-   `homeappliances` - Home appliances
-   `kosoado` - Demonstrative words
-   `media` - Media and communication
-   `natural` - Nature and environment
-   `number` - Numbers
-   `outfit` - Clothing and accessories
-   `people` - People and relationships
-   `position` - Positions and directions
-   `region` - Regions and geography
-   `school` - School and education
-   `time` - Time expressions
-   `traffic` - Transportation
-   `work` - Work and occupations
