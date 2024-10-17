import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    if (!text || !text.includes('Sign:') || !text.includes('Description:')) {
      throw new Error('Unexpected format: Missing "Sign" or "Description"');
    }

    const [signLine, descriptionLine] = text.split('\n');
    const sign = signLine.replace('Sign: ', '').trim();
    const description = descriptionLine.replace('Description: ', '').trim();

    return {
      sign: sign || 'Unknown Sign',
      description: description || 'No description available. The stars must be taking a coffee break!',
    };
  } catch (error) {
    console.error('Error generating horoscope:', error);
    return {
      sign: 'Unknown Sign',
      description: 'Could not generate a horoscope at this time. Please try again later.',
    };
  }
}
