<![CDATA[<div align="center">

# 💊 GenericFind

### Stop Overpaying for Medicine

**AI-powered web app that helps Indian patients find affordable generic alternatives to branded medicines — instantly.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.0_Flash-4285F4?logo=google&logoColor=white)](https://ai.google.dev)

[Live Demo](https://genericfind.onrender.com) · [Report Bug](https://github.com/imneshat7/genericfind/issues) · [Request Feature](https://github.com/imneshat7/genericfind/issues)

</div>

---

## 📖 About

**GenericFind** is a free, privacy-first web application designed for Indian patients who want to reduce their medicine costs. Users can either **upload a prescription image** or **search any medicine by name**, and the app instantly returns:

- ✅ The **generic/salt name** of each medicine
- 💰 **2–3 affordable generic alternatives** available in India with real INR pricing
- 📊 **Savings percentage** and **match score** for each alternative
- ⚠️ **Side effects** comparison between branded and generic versions
- 🏥 **Dominant condition detection** across multiple medications
- 🌿 **Lifestyle recovery tips** tailored to the diagnosed condition

All analysis is powered by **Google Gemini AI** on the backend — no user data is stored or shared.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📸 **Prescription Upload** | Upload a photo of your prescription — the AI reads and extracts each medicine automatically |
| 🔍 **Medicine Search** | Type any branded medicine name to instantly find generic alternatives |
| 🤖 **AI-Powered Analysis** | Uses Google Gemini 2.0 Flash with a multi-model fallback chain for reliability |
| 💰 **Real Savings** | See estimated INR price ranges and percentage savings for each generic option |
| 📊 **Match Scoring** | Each alternative gets a compatibility score (50–99) so you can choose confidently |
| ⚠️ **Side Effects** | Compare side effects between branded and generic versions at a glance |
| 🩺 **Condition Detection** | Automatically identifies the primary medical condition across all your medications |
| 🌿 **Recovery Tips** | Get 4–5 practical, non-medicine lifestyle tips for your condition |
| 🎨 **Condition Icons** | Beautiful medical illustrations for 17+ condition categories |
| 📱 **Fully Responsive** | Works seamlessly on mobile, tablet, and desktop |
| 🔒 **Privacy First** | No login required, no data stored — your prescriptions stay yours |
| 🎭 **Demo Mode** | Graceful fallback with sample data when the API is unavailable |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│              React Frontend             │
│         (Vite + Tailwind CSS 4)         │
│                                         │
│  ┌─────────┐  ┌──────────┐  ┌────────┐ │
│  │ Upload  │  │  Search  │  │Results │ │
│  │  Card   │  │   Card   │  │Section │ │
│  └────┬────┘  └────┬─────┘  └────────┘ │
│       │            │                    │
│       └──────┬─────┘                    │
│              ▼                          │
│         src/utils/api.js                │
│     (API client + demo fallback)        │
└──────────────┬──────────────────────────┘
               │  REST API (/api/*)
               ▼
┌──────────────────────────────────────────┐
│         Express.js Backend Server        │
│            (server/server.js)            │
│                                          │
│  • Serves React frontend (dist/)         │
│  • Multi-model fallback chain            │
│  • Prescription image analysis           │
│  • Medicine name search                  │
│  • JSON response parsing & validation    │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│       Google Gemini AI API               │
│                                          │
│  Model Chain:                            │
│  gemini-2.0-flash → gemini-1.5-flash     │
│  → gemini-2.5-flash                      │
└──────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — Component-based UI with hooks
- **Vite 8** — Lightning-fast dev server & build tool
- **Tailwind CSS 4** — Utility-first styling with custom design tokens
- **Inter Font** — Clean, modern typography via Google Fonts

### Backend
- **Express 5** — Lightweight Node.js server
- **Google Generative AI SDK** — Official `@google/generative-ai` package
- **CORS** — Cross-origin support for frontend–backend communication
- **dotenv** — Secure environment variable management

### Deployment
- **Render** — Single web service hosting both frontend and API
- **Vite Proxy** — Seamless API proxying during local development

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- A **Google Gemini API Key** — [Get one free here](https://aistudio.google.com/apikey)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imneshat7/genericfind.git
   cd genericfind
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Configure environment variables**

   Create a `.env` file in the **project root**:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3001
   ```

5. **Start the backend server**
   ```bash
   cd server
   node server.js
   ```

6. **Start the frontend dev server** (in a new terminal)
   ```bash
   npm run dev
   ```

7. Open **http://localhost:5173** in your browser 🎉

---

## 🌐 Deployment (Render)

This project is configured for **one-click deployment** on [Render](https://render.com) as a single Web Service:

1. Push your code to GitHub
2. On Render, click **New → Web Service** and connect your repo
3. Render will auto-detect `render.yaml` and configure:
   - **Build Command:** `npm run render-build`
   - **Start Command:** `npm start`
4. Add your **`GEMINI_API_KEY`** in Render's **Environment Variables** tab
5. Deploy! 🚀

> **Note:** The Express server serves both the API endpoints and the built React frontend, so you only need **one** Render service — no separate static site needed.

---

## 📂 Project Structure

```
genericfind/
├── public/
│   ├── favicon.svg              # App favicon
│   └── icons.svg                # SVG icon sprite
├── server/
│   ├── server.js                # Express backend (API + static file server)
│   ├── .env.example             # Backend env template
│   └── package.json             # Backend dependencies
├── src/
│   ├── components/
│   │   ├── Header.jsx           # App header with logo navigation
│   │   ├── HeroSection.jsx      # Landing hero with dual input cards
│   │   ├── UploadCard.jsx       # Prescription image upload (drag & drop)
│   │   ├── SearchCard.jsx       # Medicine name search input
│   │   ├── LoadingAnimation.jsx # Animated loading state
│   │   ├── ResultsSection.jsx   # Results layout with condition header
│   │   ├── MedicineCard.jsx     # Individual medicine result card
│   │   ├── AlternativeRow.jsx   # Generic alternative with pricing
│   │   ├── SideEffects.jsx      # Side effects comparison panel
│   │   ├── ConditionIcon.jsx    # SVG icons for 17+ medical conditions
│   │   ├── RecoveryTips.jsx     # Lifestyle recovery recommendations
│   │   ├── DonationBanner.jsx   # Support/donation call-to-action
│   │   ├── FeedbackForm.jsx     # User feedback collection
│   │   └── Footer.jsx           # App footer
│   ├── utils/
│   │   ├── api.js               # API client with demo mode fallback
│   │   ├── demoData.js          # Sample data for offline/demo mode
│   │   └── pharmacyLinks.jsx    # Pharmacy ordering links
│   ├── App.jsx                  # Root component with state management
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & Tailwind config
├── .env                         # Environment variables (git-ignored)
├── .gitignore
├── index.html                   # HTML entry with SEO meta tags
├── package.json                 # Frontend dependencies & scripts
├── render.yaml                  # Render deployment configuration
├── vite.config.js               # Vite config with API proxy
└── README.md
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR (port 5173) |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm start` | Start the Express server (serves API + built frontend) |
| `npm run render-build` | Full build for Render (install deps + build frontend) |

---

## 🔑 Environment Variables

| Variable | Location | Description |
|---|---|---|
| `GEMINI_API_KEY` | Root `.env` | Your Google Gemini API key |
| `PORT` | Root `.env` | Server port (default: `3001`) |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve GenericFind:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## ⚠️ Disclaimer

> GenericFind is an **informational tool only** and is **not a substitute for professional medical advice**. Always consult your doctor or pharmacist before switching medications. The generic alternatives and pricing shown are AI-generated estimates and may not reflect real-time market availability.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by [Neshat](https://github.com/imneshat7) for affordable healthcare in India**

</div>
]]>
