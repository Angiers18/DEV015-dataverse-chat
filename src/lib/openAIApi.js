//Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKey.js";

const SentMessage = [];

export const communicateWithOpenAI = (character, message) => {
  const apiKey = getApiKey();
  const apiOpenAI = "https://api.openai.com/v1/chat/completions";

  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const data = {
    model: "gpt-4",
    messages: [
      { role: "system", content: `Eres ${character.name}, tu personalidad se basa en ${character.description}; vas a responder a los mensajes y preguntas del usuario y tus respuestas no van a tener más de 20 palabras`, SentMessage },
      { role: "user", content: message }
    ]
  };
  SentMessage.push({ role: "user", content: message })

  if (!apiKey) {
    return Promise.reject(new Error("No se encontro una apikey"));
  }

  return fetch(apiOpenAI, {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(`Error: ${response.status} - ${error.error.message}`);
        });
      }
      return response.json();
    })
    .then(data => {
      const reply = data.choices[0].message.content;
      // console.log("User's prompt:", data.messages[1].content);
      console.log("Assistant's reply:", reply);
      SentMessage.push({role: 'system', reply})
      console.log( 'conversacion:', SentMessage)
      return reply
    })
    .catch(error => console.error("ERROOOR DE OPEN AI" + error))
};
