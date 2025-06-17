# 🗾 API Documentation - IKIBAN NIHONGO

> **Comprehensive Backend API Documentation for Frontend Developers**

Dokumen ini menyediakan detail lengkap untuk tim frontend tentang cara berinteraksi dengan API backend aplikasi **Ikiban Nihongo** - platform pembelajaran bahasa Jepang interaktif.

## 📋 Table of Contents

-   [🚀 Quick Start](#-quick-start)
-   [🏗️ Project Overview](#️-project-overview)
-   [⚙️ Setup Instructions](#️-setup-instructions)
-   [🔐 Authentication](#-authentication)
-   [📚 API Endpoints](#-api-endpoints)
-   [💻 Code Examples](#-code-examples)
-   [🛠️ Developer Tools](#️-developer-tools)
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

### 👤 User Management

#### Get User Profile

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

#### Upload Avatar

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

#### Get User Avatar

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

### 📝 Japanese Writing Systems

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
        },
        {
            "id": 2,
            "character": "か",
            "romaji": "ka",
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

---

### 📖 Grammar & Basics

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

### 📊 JLPT N5 Content

#### Kanji N5

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

#### Adjectives N5

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

#### Adverbs N5

```http
GET /adverb-n5
```

🔒 **Authentication Required**

#### Verbs N5

```http
GET /verb-n5
```

🔒 **Authentication Required**

---

### 🏷️ Noun Categories N5

#### Activity Nouns

```http
GET /noun-activity-n5
```

#### Animal & Plant Nouns

```http
GET /noun-animalplant-n5
```

#### Number-related Nouns

```http
GET /noun-auxnumber-n5
```

#### Body Parts Nouns

```http
GET /noun-body-n5
```

#### City & Location Nouns

```http
GET /noun-city-n5
```

#### Color Nouns

```http
GET /noun-color-n5
```

#### Food & Drink Nouns

```http
GET /noun-fooddrink-n5
```

#### Home Appliance Nouns

```http
GET /noun-homeappliances-n5
```

#### Demonstrative Nouns (こそあど)

```http
GET /noun-kosoado-n5
```

#### Media Nouns

```http
GET /noun-media-n5
```

#### Nature Nouns

```http
GET /noun-natural-n5
```

#### Number Nouns

```http
GET /noun-number-n5
```

#### Clothing Nouns

```http
GET /noun-outfit-n5
```

#### People Nouns

```http
GET /noun-people-n5
```

#### Position Nouns

```http
GET /noun-position-n5
```

#### Region Nouns

```http
GET /noun-region-n5
```

#### School Nouns

```http
GET /noun-school-n5
```

#### Time Nouns

```http
GET /noun-time-n5
```

#### Traffic Nouns

```http
GET /noun-traffic-n5
```

#### Work Nouns

```http
GET /noun-work-n5
```

🔒 **All noun endpoints require authentication**

**Standard Noun Response Format:**

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

## 💻 Code Examples

### 🔧 JavaScript/Fetch API Examples

#### Authentication Flow

```javascript
// API Base Configuration
const API_BASE_URL = "http://localhost:8000";

class IkibanAPI {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.token = localStorage.getItem("token");
    }

    // Helper method for API calls
    async apiCall(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        };

        // Add auth header for protected routes
        if (
            this.token &&
            !endpoint.includes("/login") &&
            !endpoint.includes("/register")
        ) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "API Error");
            }

            return data;
        } catch (error) {
            console.error("API Error:", error);
            throw error;
        }
    }

    // Authentication Methods
    async register(username, password) {
        const data = await this.apiCall("/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
        });
        return data;
    }

    async login(username, password) {
        const data = await this.apiCall("/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
        });

        if (!data.error) {
            this.token = data.data.token;
            localStorage.setItem("token", this.token);
            localStorage.setItem("user", JSON.stringify(data.data));
        }

        return data;
    }

    async changePassword(oldPassword, newPassword) {
        return await this.apiCall("/change-password", {
            method: "POST",
            body: JSON.stringify({ oldPassword, newPassword }),
        });
    }

    // Learning Content Methods
    async getHiragana() {
        const data = await this.apiCall("/hiragana");
        return data.datas; // Note: uses 'datas' not 'data'
    }

    async getKatakana() {
        const data = await this.apiCall("/katakana");
        return data.datas;
    }

    async getParticles() {
        const data = await this.apiCall("/particle");
        return data.datas;
    }

    // JLPT N5 Methods
    async getKanjiN5() {
        const data = await this.apiCall("/kanji-n5");
        return data.data;
    }

    async getAdjectivesN5() {
        const data = await this.apiCall("/adjective-n5");
        return data.data;
    }

    async getVerbsN5() {
        const data = await this.apiCall("/verb-n5");
        return data.data;
    }

    // Noun Categories
    async getNounsByCategory(category) {
        const endpoint = `/noun-${category}-n5`;
        const data = await this.apiCall(endpoint);
        return data.data;
    }

    // Profile Methods
    async getProfile(profileId) {
        const data = await this.apiCall(`/profile/${profileId}`);
        return data.data;
    }

    async uploadAvatar(file) {
        const formData = new FormData();
        formData.append("avatar", file);

        const data = await this.apiCall("/upload/avatar", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            body: formData,
        });

        return data.data.imageUrl;
    }

    async getAvatar() {
        const data = await this.apiCall("/avatar");
        return data.data.imageUrl;
    }

    // Utility Methods
    logout() {
        this.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    isAuthenticated() {
        return !!this.token;
    }
}

// Usage Examples
const api = new IkibanAPI();

// Login example
async function handleLogin(username, password) {
    try {
        const result = await api.login(username, password);
        console.log("Login successful:", result.data);
        return { success: true, user: result.data };
    } catch (error) {
        console.error("Login failed:", error.message);
        return { success: false, error: error.message };
    }
}

// Fetch learning content
async function loadLearningContent() {
    try {
        const [hiragana, katakana, kanji] = await Promise.all([
            api.getHiragana(),
            api.getKatakana(),
            api.getKanjiN5(),
        ]);

        return { hiragana, katakana, kanji };
    } catch (error) {
        console.error("Failed to load content:", error);
        return null;
    }
}

// Upload avatar example
async function handleAvatarUpload(fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    try {
        const imageUrl = await api.uploadAvatar(file);
        console.log("Avatar uploaded:", imageUrl);
        return imageUrl;
    } catch (error) {
        console.error("Upload failed:", error);
        return null;
    }
}
```

### ⚛️ React Hook Examples

```javascript
// Custom hooks for React applications
import { useState, useEffect, useCallback } from "react";

// Authentication Hook
export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const api = new IkibanAPI();

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = useCallback(async (username, password) => {
        setLoading(true);
        setError(null);

        try {
            const result = await api.login(username, password);
            setUser(result.data);
            return { success: true };
        } catch (err) {
            setError(err.message);
            return { success: false, error: err.message };
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        api.logout();
        setUser(null);
    }, []);

    return { user, login, logout, loading, error };
}

// Learning Content Hook
export function useLearningContent(contentType) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const api = new IkibanAPI();

    useEffect(() => {
        async function fetchContent() {
            setLoading(true);
            setError(null);

            try {
                let result;
                switch (contentType) {
                    case "hiragana":
                        result = await api.getHiragana();
                        break;
                    case "katakana":
                        result = await api.getKatakana();
                        break;
                    case "kanji-n5":
                        result = await api.getKanjiN5();
                        break;
                    case "adjective-n5":
                        result = await api.getAdjectivesN5();
                        break;
                    default:
                        throw new Error("Invalid content type");
                }
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        if (contentType) {
            fetchContent();
        }
    }, [contentType]);

    return { data, loading, error, refetch: () => fetchContent() };
}

// React Component Examples
function LoginForm() {
    const { login, loading, error } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(username, password);
        if (result.success) {
            // Redirect or update UI
            console.log("Login successful!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={6}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

function HiraganaList() {
    const { data: hiragana, loading, error } = useLearningContent("hiragana");

    if (loading) return <div>Loading hiragana...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="hiragana-grid">
            {hiragana.map((char) => (
                <div key={char.id} className="character-card">
                    <div className="character">{char.character}</div>
                    <div className="romaji">{char.romaji}</div>
                </div>
            ))}
        </div>
    );
}
```

### 🌐 Axios Alternative

```javascript
// Using Axios instead of Fetch
import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000,
});

// Request interceptor to add auth token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired, redirect to login
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

// API methods
export const authAPI = {
    login: (username, password) =>
        apiClient.post("/login", { username, password }),

    register: (username, password) =>
        apiClient.post("/register", { username, password }),

    changePassword: (oldPassword, newPassword) =>
        apiClient.post("/change-password", { oldPassword, newPassword }),
};

export const contentAPI = {
    getHiragana: () => apiClient.get("/hiragana"),
    getKatakana: () => apiClient.get("/katakana"),
    getKanjiN5: () => apiClient.get("/kanji-n5"),
    getNounsByCategory: (category) => apiClient.get(`/noun-${category}-n5`),
};
```

## 🛠️ Developer Tools

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

---

## 🚀 Implementation Checklist

### For Frontend Developers

#### ✅ Initial Setup

-   [ ] Setup environment variables
-   [ ] Install HTTP client (fetch/axios)
-   [ ] Create API service class
-   [ ] Implement token storage mechanism

#### ✅ Authentication Flow

-   [ ] Login form with validation
-   [ ] Token storage and retrieval
-   [ ] Auto-logout on token expiration
-   [ ] Registration form
-   [ ] Password change functionality

#### ✅ Content Loading

-   [ ] Loading states for all API calls
-   [ ] Error handling and user feedback
-   [ ] Data caching for static content
-   [ ] Pagination if needed

#### ✅ File Upload

-   [ ] Avatar upload with preview
-   [ ] Progress indication
-   [ ] File type validation
-   [ ] Error handling

#### ✅ User Experience

-   [ ] Responsive design
-   [ ] Loading indicators
-   [ ] Error messages
-   [ ] Success notifications
-   [ ] Navigation protection for authenticated routes

---

## 📞 Support & Contact

Untuk pertanyaan teknis atau bantuan implementasi:

1. **Backend Issues**: Check server logs dan database connection
2. **API Errors**: Gunakan browser dev tools untuk debugging
3. **Authentication**: Pastikan token format dan expiration
4. **CORS Issues**: Pastikan frontend URL sesuai konfigurasi

---

**Last Updated:** January 2025  
**API Version:** 1.0.0  
**Maintained by:** Backend Team
