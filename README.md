# GitHub Horoscope: AI-Based Code Zodiac ✨🔮

Welcome to **GitHub Horoscope**, an AI-powered app that assigns developers a "coding zodiac sign" based on their GitHub profile activity and generates playful horoscopes about their coding journey! Whether you're a **Bugittarius** who thrives under pressure or a **Refactoricorn** obsessed with clean code, this app will bring some fun to your daily coding routine.

## 🎯 Features
- **Enter GitHub ID:** Users input their GitHub ID, and the app analyzes their profile, including:
  - Programming languages used
  - Number of commits and most active coding hours
  - Repository creation frequency and commit history
  - Open issues and pull requests
  
- **Code Zodiac Sign Assignment:** Based on the analysis, the app assigns one of several funny "code zodiac signs" like **Bugittarius**, **Refactoricorn**, **Mergequarius**, or **Commitricorn**.

- **Funny Horoscope Generation:** The app uses the Gemini API to generate humorous horoscopes based on the user's coding habits.

- **Share and Compare:** Users can share their horoscopes or compare their "zodiac signs" with friends. The app even suggests "compatibility" with other developers based on their signs.

## 🚀 Tech Stack
- **Frontend:** [Next.js (App Router)](https://nextjs.org/docs/app), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **API Integration:** [Gemini API](https://geminiapi.com/)
- **GitHub API:** Fetch GitHub user data using [GitHub's REST API](https://docs.github.com/en/rest).

## 🛠️ Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/github-horoscope.git
   cd github-horoscope
