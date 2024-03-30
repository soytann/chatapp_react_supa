import axios from 'axios';

const openAIUrl = 'https://api.openai.com/v1/completions';
const openAIKey = import.meta.env.VITE_OPENAI_API_KEY;

async function getOpenAIResponse(prompt: string): Promise<string> {
  try {
    const response = await axios.post(
      openAIUrl,
      {
        model: 'gpt-3.5-turbo', 
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAIKey}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching OpenAI response:', error);
    return 'Sorry, I couldn\'t understand that.';
  }
}

export default getOpenAIResponse;
