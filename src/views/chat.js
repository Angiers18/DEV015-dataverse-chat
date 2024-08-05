import header from "../components/header.js";
import data from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

function chat(props) {
  const contentChat = document.createElement("div");

  const character = data.find((item) => item.id === props);
  contentChat.appendChild(header());

  document.title = `Dataverse Chat - ${character.name}`;

  const showData = document.createElement("div");
  showData.classList.add = "card-character";

  showData.innerHTML = `
  <div class='card-character-content'>
    <h2 class='card-character-title'>${character.name}</h2>
      <p class='card-character-shortd card-p'>${character.shortDescription}</p>
      <p class='card-character-d card-p'>${character.description}</p>
      <div class='card-content-facts'>
        <ul class='card-character-ul'>
          <li class='card-character-facts'>Especie:<span> ${character.facts.species}</span></li>
          <li class='card-character-facts'>Genero:<span> ${character.facts.gender}</span></li>
          <li class='card-character-facts'>Edad:<span> ${character.facts.age}</span></li>
          <li class='card-character-facts'>Ciudad:<span> ${character.facts.city}</span></li>
        </ul>
        <div class='card-image'>
          <img class='card-img' src='${character.imageUrl}'>
        </div>
        
      </div>
  </div>
  <div class='content-chat'>
    <div class = 'section-chat'>
      <div id = 'section-profile'>
        <img class = 'image-profile' src='${character.imageUrl}'>
        <div class ='description-profile'>
          <h4 class = 'name-profile'>${character.name}</h4>
          <p class = 'shortD-profile'>${character.shortDescription}</p>
          <p class= 'show-profile'> Ver Mas </p>
          </div>
          <div class= 'long-description'>
          <p class = 'description'>${character.description}</p>
          <p class= 'show-profile'> Ver Menos </p>
          </div>
      </div>
      <div class = 'user-chat'>
        <textarea id = 'input-chat'></textarea>
        <div id = 'send-message'></div>
      </div>
    </div>
  </div>
        `;
  contentChat.appendChild(showData);

  const sendButton = contentChat.querySelector("#send-message");
  const message = [
    { role: "system", content: `Tu vas a tomar el rol de ${character.name}, tu personalidad y respuestas se van a basar en ${character.description} y tus respuestas no van a tener mas de 50 palabras` },
    { role: "user", content: "Cuentame de ti" },
  ];

  sendButton.addEventListener("click", () => {
    console.log("boton de enviar");
    communicateWithOpenAI(message);
  });

  return contentChat;
}

export default chat;
