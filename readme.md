# Backend API Documentation

## Base URL

```
http://localhost:PORT
```

## Authentication

Most endpoints require JWT token in Authorization header:

```
Authorization: Bearer <token>
```

---

## Authentication Routes

### POST /auth/register

Register new user

**Payload:**

```json
{
    "username": "string",
    "password": "string"
}
```

**Response:**

```json
{
    "error": false,
    "message": "Berhasil mendaftar"
}
```

### POST /auth/login

Login user

**Payload:**

```json
{
    "username": "string",
    "password": "string"
}
```

**Response:**

```json
{
    "error": false,
    "message": "Login berhasil!",
    "data": {
        "id": "uuid",
        "username": "string",
        "profile_picture": "url|null",
        "token": "jwt_token"
    }
}
```

### POST /change-password

Change user password (requires auth)

**Payload:**

```json
{
    "oldPassword": "string",
    "newPassword": "string"
}
```

**Response:**

```json
{
    "error": false,
    "message": "Password berhasil diubah",
    "data": null
}
```

---

## Profile Routes

### GET /profile/:profileId

Get user profile (requires auth)

**Response:**

```json
{
    "error": false,
    "message": "Data profil berhasil diambil",
    "data": {
        "username": "string",
        "profile_picture": "url|null"
    }
}
```

### GET /navbar-profile

Get current user profile for navbar (requires auth)

**Response:**

```json
{
    "error": false,
    "message": "Data profil berhasil diambil",
    "data": {
        "username": "string",
        "profile_picture": "url|null"
    }
}
```

---

## Image Upload Routes

### POST /upload/avatar

Upload user avatar (requires auth, multipart/form-data)

**Payload:**

```
Form data with file field named "avatar"
```

**Response:**

```json
{
    "error": false,
    "message": "Gambar profil berhasil diunggah"
}
```

---

## Basic Subject Routes

### GET /particle

Get particles data (requires auth)

### GET /hiragana

Get hiragana data (requires auth)

### GET /katakana

Get katakana data (requires auth)

### GET /basic-conversation

Get basic conversation data (requires auth)

---

## N5 Level Routes

### GET /kanji-n5

Get N5 kanji data (requires auth)

### GET /adjective-n5

Get N5 adjective data (requires auth)

### GET /adverb-n5

Get N5 adverb data (requires auth)

### GET /verb-n5

Get N5 verb data (requires auth)

### GET /noun-activity-n5

Get N5 activity noun data (requires auth)

### GET /noun-animalplant-n5

Get N5 animal/plant noun data (requires auth)

### GET /noun-auxnumber-n5

Get N5 auxiliary number noun data (requires auth)

### GET /noun-body-n5

Get N5 body noun data (requires auth)

### GET /noun-city-n5

Get N5 city noun data (requires auth)

### GET /noun-color-n5

Get N5 color noun data (requires auth)

### GET /noun-fooddrink-n5

Get N5 food/drink noun data (requires auth)

### GET /noun-homeappliances-n5

Get N5 home appliances noun data (requires auth)

### GET /noun-kosoado-n5

Get N5 kosoado noun data (requires auth)

### GET /noun-media-n5

Get N5 media noun data (requires auth)

### GET /noun-natural-n5

Get N5 natural noun data (requires auth)

### GET /noun-number-n5

Get N5 number noun data (requires auth)

### GET /noun-outfit-n5

Get N5 outfit noun data (requires auth)

### GET /noun-people-n5

Get N5 people noun data (requires auth)

### GET /noun-position-n5

Get N5 position noun data (requires auth)

### GET /noun-region-n5

Get N5 region noun data (requires auth)

### GET /noun-school-n5

Get N5 school noun data (requires auth)

### GET /noun-time-n5

Get N5 time noun data (requires auth)

### GET /noun-traffic-n5

Get N5 traffic noun data (requires auth)

### GET /noun-work-n5

Get N5 work noun data (requires auth)

### GET /question-word-n5

Get N5 question word data (requires auth)

### GET /conjunction-n5

Get N5 conjunction data (requires auth)

---

## Quiz Routes

### GET /quiz-categories

Get quiz categories (requires auth)

**Response:**

```json
{
    "error": false,
    "message": "Kategori kuis berhasil diambil",
    "data": [
        {
            "quiz_category_id": "uuid",
            "category": "string"
        }
    ]
}
```

### GET /quiz/:quiz_category_id/:level_id

Get quizzes by category and level (requires auth)

**Response:**

```json
{
    "error": false,
    "message": "Kuis berhasil diambil",
    "data": [
        {
            "quizzes_id": "uuid",
            "title": "string",
            "category": "string",
            "level": "string"
        }
    ]
}
```

### GET /quiz/:quizzes_id

Generate quiz with questions (requires auth)

**Response:**

```json
{
    "error": false,
    "message": "Kuis berhasil dibuat",
    "data": {
        "quizzes_id": "uuid",
        "title": "string",
        "category": "string",
        "level": "string",
        "questions": [
            {
                "question_id": "uuid",
                "question_text": "string",
                "utils": "string|null",
                "options": [
                    {
                        "option_id": "uuid",
                        "option_text": "string"
                    }
                ]
            }
        ]
    }
}
```

### PUT /quiz/:quizzes_id/:question_id/answer

Submit answer for question (requires auth)

**Payload:**

```json
{
    "option_id": "uuid"
}
```

**Response:**

```json
{
    "error": false,
    "message": "Jawaban berhasil dikirim",
    "data": null
}
```

### POST /quiz/:quizzes_id/submit

Submit quiz and get score (requires auth)

**Response:**

```json
{
    "error": false,
    "message": "Kuis berhasil diselesaikan",
    "data": {
        "score": 85.5
    }
}
```

---

## Tracker Routes

All tracker routes require authentication and follow the same pattern:

**Payload:**

```json
{
  "particle_id": "uuid", // or respective _id field
  "status": boolean
}
```

**Response:**

```json
{
    "error": false,
    "message": "Berhasil menyelesaikan tracking [type]"
}
```

### Basic Subject Trackers

-   POST /tracker/particle
-   POST /tracker/hiragana
-   POST /tracker/katakana
-   POST /tracker/basic-conversation

### N5 Trackers

-   POST /tracker/kanji
-   POST /tracker/adjective
-   POST /tracker/adverb
-   POST /tracker/verb
-   POST /tracker/noun-activity
-   POST /tracker/noun-animalplant
-   POST /tracker/noun-auxnumber
-   POST /tracker/noun-body
-   POST /tracker/noun-city
-   POST /tracker/noun-color
-   POST /tracker/noun-fooddrink
-   POST /tracker/noun-homeappliances
-   POST /tracker/noun-kosoado
-   POST /tracker/noun-media
-   POST /tracker/noun-natural
-   POST /tracker/noun-number
-   POST /tracker/noun-outfit
-   POST /tracker/noun-people
-   POST /tracker/noun-position
-   POST /tracker/noun-region
-   POST /tracker/noun-school
-   POST /tracker/noun-time
-   POST /tracker/noun-traffic
-   POST /tracker/noun-work
-   POST /tracker/question-word
-   POST /tracker/conjunction

---

## Bar Routes

### GET /bar-home

Get home bar data (requires auth)

---

## Error Response Format

All endpoints return errors in this format:

```json
{
    "error": true,
    "message": "Error description",
    "data": null
}
```

Common HTTP status codes:

-   200: Success
-   201: Created
-   400: Bad Request
-   401: Unauthorized
-   404: Not Found
-   500: Internal Server Error
