//Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (message) => {
  const apiKey = getApiKey();
  const apiOpenAI = "https://api.openai.com/v1/chat/completions";
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const data = {
    model: "gpt-4",
    messages: message
  };
  
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
      console.log("Assistant's reply:", reply );
      console.log(data);})
    .catch(error => console.error("ERROOOR DE OPEN AI" + error))
};
