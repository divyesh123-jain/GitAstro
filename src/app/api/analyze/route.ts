import { NextResponse } from 'next/server';
import { getGitHubUserData } from '../../../lib/githubAPI';
import { generateHoroscope } from '../../../lib/horoscopeGenerator';

export async function POST(request: Request) {
  try {
    const { githubId } = await request.json();
    console.log('Received GitHub ID:', githubId);

    const userData = await getGitHubUserData(githubId);
    console.log('GitHub User Data:', userData);

    const horoscope = await generateHoroscope(userData);
    console.log('Generated Horoscope:', horoscope);

    return NextResponse.json(horoscope);
  } catch (error) {
    console.error('Error in /api/analyze:', error);
    return NextResponse.json({ error: 'Error generating horoscope'}, { status: 500 });
  }
}