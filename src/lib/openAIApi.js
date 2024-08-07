//Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKey.js";

let SentMessage = [];

export const communicateWithOpenAI = (character, message) => {
  const apiKey = getApiKey();
  const apiOpenAI = "https://api.openai.com/v1/chat/completions";

  if (!apiKey) {
    return Promise.reject(new Error("No se encontró una API key"));
  }

  // Agrega el mensaje del usuario al historial
  SentMessage.push({ role: "user", content: message });

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`
  };

  const data = {
    model: "gpt-4",
    messages: [
      {
        role: "system", content: `Eres ${character.name}, tu personalidad se basa en ${character.description}; vas a responder a los mensajes y preguntas del usuario y tus respuestas no van a tener más de 20 palabras`
      }, ...SentMessage // Incluye todo el historial de mensajes
    ]
  };

  return fetch(apiOpenAI, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          throw new Error(`Error: ${response.status} - ${error.error.message}`);
        });
      }
      return response.json();
    })
    .then(data => {
      const reply = data.choices[0].message.content;
      console.log("Assistant's reply:", reply);

      // Agrega la respuesta del asistente al historial
      SentMessage.push({ role: "assistant", content: reply });

      console.log('Conversación:', SentMessage);
      return reply;
    })
    .catch(error => console.error("Error de OpenAI:", error));
}