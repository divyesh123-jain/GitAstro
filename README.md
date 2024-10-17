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
2. **Install dependencies:**
    ```bash
    npm install
    or
    yarn install
3.  **Environment Variables:**
Create a .env.local file in the root directory and add the following:
     ```bash
       

       GITHUB_API_TOKEN=your_github_api_token
        GEMINI_API_KEY=your_gemini_api_key



## 🌠 Zodiac Signs

Each user is assigned a unique "Code Zodiac Sign" based on their coding habits:

Bugittarius: "You thrive under pressure. But let's be real, bugs are your life force."
Refactoricorn: "You're obsessed with rewriting code. Your projects never end, just evolve."
Mergequarius: "You’re a social coder, always working in teams, but watch out for those conflicts."
Commitricorn: "You commit like it’s going out of style. Quantity over quality, am I right?"
## 📖 Usage

Enter your GitHub ID: On the homepage, input your GitHub username.
Get Your Code Zodiac Sign: The app will analyze your GitHub activity and assign you a code zodiac sign.
Read Your Horoscope: Enjoy a playful, AI-generated horoscope about your coding journey.
Share or Compare: Share your horoscope with friends or see how "compatible" your coding style is with others.
## 🧩 Integrations

GitHub API
We use GitHub's REST API to fetch user data such as commits, repositories, and language statistics. Make sure to generate a personal access token for API access.

Gemini API
The Gemini API is used to generate horoscopes and fun predictions based on coding patterns. The API key should be added to your environment variables.


## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request, report an issue, or suggest new "zodiac signs" and horoscopes.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for more information.
 


