import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateHoroscope(userData: any) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `
    Based on the GitHub user data below, create a funny and light-hearted coding horoscope:
    - Name: ${userData.name}
    - Public Repositories: ${userData.publicRepos}
    - Followers: ${userData.followers}
    - Following: ${userData.following}
    - Account Created: ${userData.createdAt}
    - Programming Languages: ${userData.languages.join(', ')}

    Format the response strictly as:
    Sign: [A humorous coding-related zodiac sign]
    Description: [A witty horoscope prediction that incorporates coding humor]
    
    Ensure that both "Sign" and "Description" are included.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Validate the response format
    if (!text || !text.includes('Sign:') || !text.includes('Description:')) {
      throw new Error('Unexpected format: Missing "Sign" or "Description"');
    }

    // Extract sign and description, ensuring they are not empty
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    const signLine = lines.find(line => line.startsWith('Sign: ')) || 'Sign: Unknown Sign';
    const descriptionLine = lines.find(line => line.startsWith('Description: ')) || 'Description: The stars are feeling shy today.';

    const sign = signLine.replace('Sign: ', '').trim() || 'Unknown Sign';
    const description = descriptionLine.replace('Description: ', '').trim() || 'No description available. The stars must be taking a coffee break!';

    return {
      sign,
      description,
    };
  } catch (error) {
    console.error('Error generating horoscope:', error);
    return {
      sign: 'Unknown Sign',
      description: 'Could not generate a horoscope at this time. Please try again later.',
    };
  }
}
