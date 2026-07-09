#  AI Resume Analyzer

An AI-powered Resume Analyzer built with **Next.js**, **MongoDB**, **Firebase Authentication**, and **Groq AI**. Upload your resume, receive an ATS score, get AI-generated feedback, and track your resume analysis history.

## ✨ Features

-  Google Authentication (Firebase)
-  JWT Authentication with Secure Cookies
-  Resume Upload & Analysis
-  AI-Powered Resume Feedback (Groq API)
-  ATS Score Calculation
-  Personalized Resume Improvement Suggestions
-  Resume Analysis History
-  User Dashboard
-  Responsive UI
-  Fast & Modern Next.js App Router

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- React
- Tailwind CSS
- Shadcn UI
- Lucide React

### Backend

- Next.js API Routes
- MongoDB
- Mongoose
- JWT Authentication
- Firebase Authentication

### AI

- Groq API

---

## 📚 Libraries Used

- **Next.js** – React Framework
- **React** – UI Library
- **Tailwind CSS** – CSS Framework
- **Shadcn UI** – UI Components
- **Base UI** – Accessible UI Components
- **Lucide React** – Icon Library
- **React Icons** – Icon Library
- **Motion** – Animation Library
- **Axios** – HTTP Client
- **Firebase** – Authentication
- **MongoDB** – NoSQL Database
- **Mongoose** – MongoDB ODM
- **JWT (jsonwebtoken)** – Authentication
- **bcrypt** – Password Hashing
- **Groq SDK** – AI Integration
- **pdf-parse** – PDF Text Extraction
- **React Dropzone** – File Upload
- **React to PDF** – PDF Generation
- **React to Print** – Printing
- **Sonner** – Toast Notifications
- **Zod** – Schema Validation
- **clsx** – Conditional Class Names
- **tailwind-merge** – Tailwind Class Merging
- **Class Variance Authority (CVA)** – Component Variants
- **tw-animate-css** – Tailwind Animations

### 🛠️ Development Libraries

- **ESLint** – Code Linting
- **eslint-config-next** – Next.js ESLint Configuration
- **Tailwind CSS v4** – Styling Framework
- **@tailwindcss/postcss** – Tailwind PostCSS Plugin
- **babel-plugin-react-compiler** – React Compiler
- **@types/pdf-parse** – TypeScript Definitions

## 📁 Project Structure

```
app/
components/
dashboardComponents/
contexts/
hooks/
lib/
public/
schemas/
util/
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET_KEY=your_jwt_secret

GROQ_API_KEY=your_groq_api_key
```

---

## 🔥 Firebase Setup

Create a Firebase project and enable **Google Authentication**.

Add your Firebase configuration to your client-side config file.

Example:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/ai-resume-analyzer.git
```

Move into the project

```bash
cd ai-resume-analyzer
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

##  Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the application for production.

```bash
npm start
```

Runs the production build.

```bash
npm run lint
```

Runs ESLint.

---

## 🔒 Authentication

- Google Sign-In using Firebase Authentication
- JWT-based Authentication
- HTTP Only Cookies
- Protected Routes

---

## 🤖 AI Resume Analysis

The application analyzes uploaded resumes using the **Groq API** and provides:

- ATS Score
- Resume Summary
- Skill Analysis
- Strengths
- Weaknesses
- Improvement Suggestions

---

## 📈 Future Improvements

- Resume vs Job Description Matching
- AI Cover Letter Generator
- Resume Templates
- Export AI Feedback as PDF
- Multiple Resume Management
- Interview Question Generator

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Akram Ansari**

If you like this project, consider giving it a ⭐ on GitHub.