import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateHoroscope(userData: any) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `
    Based on the following GitHub user data, generate a funny coding horoscope:
    - Name: ${userData.name}
    - Public Repos: ${userData.publicRepos}
    - Followers: ${userData.followers}
    - Following: ${userData.following}
    - Account Created: ${userData.createdAt}
    - Languages: ${userData.languages.join(', ')}

    Generate a response in the following format:
    Sign: [Funny coding zodiac sign]
    Description: [Humorous horoscope prediction]
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const [sign, description] = text.split('\n');

  return {
    sign: sign.replace('Sign: ', ''),
    description: description.replace('Description: ', ''),
  };
}