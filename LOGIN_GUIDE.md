# Login API Guide

## Overview
The login functionality has been successfully implemented for your Node.js/Express authentication system.

## API Endpoints

### 1. Register User
**POST** `/api/auth/register`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

Success Response (201):
```json
{
  "message": "User has been created successfully."
}
```

### 2. Login User
**POST** `/api/auth/login`

Request body:
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

Success Response (200):
```json
{
  "message": "Login successful",
  "user": {
    "id": "uuid-here",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

Error Response (401):
```json
{
  "message": "Invalid email or password"
}
```

## Testing with Postman/Thunder Client

### Step 1: Start your server
```bash
npm run dev
```

### Step 2: Register a user
- Method: POST
- URL: `http://localhost:5000/api/auth/register`
- Headers: `Content-Type: application/json`
- Body: 
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "test123"
}
```

### Step 3: Login with the user
- Method: POST
- URL: `http://localhost:5000/api/auth/login`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "email": "test@example.com",
  "password": "test123"
}
```

## Security Features Implemented

1. **Password Hashing**: Passwords are hashed using bcryptjs with salt rounds
2. **Email Normalization**: Emails are trimmed and converted to lowercase for consistency
3. **Input Validation**: Both email and password are required for login
4. **Secure Responses**: Passwords are never returned in API responses
5. **Error Handling**: Generic error messages to prevent information leakage

## Error Codes

- **400**: Bad Request (missing required fields)
- **401**: Unauthorized (invalid credentials)
- **500**: Internal Server Error

## Database Schema
The users table includes:
- `id` (VARCHAR(50)) - UUID primary key
- `name` (VARCHAR(100)) - User's full name
- `email` (VARCHAR(100)) - Unique email address
- `password` (VARCHAR(100)) - Hashed password

## Next Steps
Consider implementing:
- JWT tokens for session management
- Password reset functionality
- Email verification
- Rate limiting for login attempts
- Account lockout after failed attempts
