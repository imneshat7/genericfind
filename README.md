# GenericFind 💊

**Find affordable generic alternatives to expensive branded medicines in India.**

GenericFind is a free, AI-powered web app that helps Indian patients save money on medicines. Upload a prescription photo or type any medicine name — get instant results with generic alternatives, pricing, savings, and side effects.

> 🔗 **Live App:** [genericfind.onrender.com](https://genericfind.onrender.com)

---

## How It Works

1. **Upload a prescription** or **search a medicine name**
2. AI analyzes the medicine and identifies the active salt/generic name
3. Get **2–3 affordable generic alternatives** with real INR pricing
4. See **savings percentage**, **match scores**, and **side effects comparison**
5. Receive **lifestyle recovery tips** for your condition

No login. No data stored. Completely free.

---

## Key Features

- **Prescription Scanning** — Upload a photo, AI extracts every medicine automatically
- **Medicine Search** — Type any branded name to find cheaper generics
- **Real Pricing** — INR price ranges with savings up to 90%
- **Side Effects** — Compare branded vs generic side effects
- **Condition Detection** — Identifies the primary condition across medications
- **Recovery Tips** — Lifestyle recommendations tailored to your diagnosis
- **Offline Fallback** — Demo mode with sample data when API is unavailable
- **Mobile Friendly** — Fully responsive on all devices

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 8, Tailwind CSS 4 |
| Backend | Express.js, Node.js |
| AI | Google Gemini 2.0 Flash (with fallback chain) |
| Hosting | Render |

---

## Getting Started

### Prerequisites

- Node.js 18+
- [Google Gemini API Key](https://aistudio.google.com/apikey) (free)

### Setup

```bash
# Clone the repo
git clone https://github.com/imneshat7/genericfind.git
cd genericfind

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Configure

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
```

### Run Locally

```bash
# Terminal 1 — Start the backend
cd server
node server.js

# Terminal 2 — Start the frontend
npm run dev
```

Open **http://localhost:5173** and you're good to go.

---

## Deployment (Render)

This project deploys as a **single Render web service** — the Express server serves both the API and the built frontend.

| Setting | Value |
|---------|-------|
| Root Directory | `server` |
| Build Command | `npm run render-build` |
| Start Command | `npm start` |

Add `GEMINI_API_KEY` in Render's **Environment Variables** tab, then deploy.

---

## Project Structure

```
genericfind/
├── server/
│   └── server.js           # Express API + serves built frontend
├── src/
│   ├── components/          # React UI components
│   ├── utils/
│   │   ├── api.js           # API client with demo fallback
│   │   └── demoData.js      # Sample data for offline mode
│   ├── App.jsx              # Root component
│   └── index.css            # Tailwind styles
├── public/                  # Static assets
├── render.yaml              # Render deployment config
├── package.json
└── vite.config.js
```

---

## Disclaimer

GenericFind is an **informational tool only** — not a substitute for medical advice. Always consult your doctor before switching medications. Prices and alternatives are AI-generated estimates.

---

## License

MIT

---

**Made by [Neshat](https://github.com/imneshat7)** — for affordable healthcare in India.
