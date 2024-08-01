//Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages) => {

  const apiKey = getApiKey();
  const apiOpenAI = 'https://api.openai.com/v1/chat/compleciones';

  return fetch(apiOpenAI, {

    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: messages,
    }),
  })
    .then(response => {
      return response.json()
    })
    .catch((error) => {
      console.error('ERROOOR DE OPEN AI' + error)
    })
}
