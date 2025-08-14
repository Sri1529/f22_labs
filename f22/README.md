# Login System (Next.js + Context API)

## Overview
This project is a simple login system built with **Next.js** that demonstrates:
- **Login** and **Logout** functionality.
- **LocalStorage** for storing and validating credentials.
- **Context API** for authentication state management.
- Preventing manual routing to protected pages without authentication.

---

## Prerequisites
Make sure you have the following installed:
- [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
- Node.js **v22**

---

## Setup Instructions

1. **Switch to Node.js v22**
   ```bash
   nvm use 22
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**  
   Create a `.env.local` file in the root directory and add:
   ```env
   NEXT_PUBLIC_EMAIL="admin@example.com"
   NEXT_PUBLIC_PASSWORD="123456"
   ```

4. **Run the Project (Development Mode)** 🚀  
   ```bash
   npm run dev
   ```
   > ⚡ **Use this command for local development**.  
   > `npm start` is used only after building the project for production with `npm run build`.

---

## Features

### Login Page
- Validates email and password against values stored in `.env.local`.
- Saves credentials to **LocalStorage** upon successful login.

### Logout Functionality
- Clears stored credentials from **LocalStorage**.
- Redirects the user to the login page.

### Route Protection
- Uses **Context API** to track login state.
- Prevents accessing protected routes via manual URL entry.

---

## Notes
The default credentials are:
- **Email:** `admin@example.com`
- **Password:** `123456`

You can update them anytime in `.env.local`.
