import header from "../components/header.js";
import data from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

function chat(props) {
  const contentChat = document.createElement("div");

  const character = data.find((item) => item.id === props);
  contentChat.appendChild(header());

  document.title = `Dataverse Chat - ${character.name}`;

  const showData = document.createElement("div");
  showData.classList.add ("main-content-chat");

  showData.innerHTML = `
  <div class='card-character-content'>
    <h2 class='card-character-title'>${character.name}</h2>
      <p class='card-character-shortd card-p'>${character.shortDescription}</p>
      <p class='card-character-d card-p'>${character.description}</p>
      <div class='card-content-facts'>
        <ul class='card-character-ul'>
          <li class='card-character-facts'>Especie:<span class= 'facts-span'> ${character.facts.species}</span></li>
          <li class='card-character-facts'>Genero:<span class= 'facts-span'> ${character.facts.gender}</span></li>
          <li class='card-character-facts'>Edad:<span class= 'facts-span'> ${character.facts.age}</span></li>
          <li class='card-character-facts'>Ciudad:<span class= 'facts-span'> ${character.facts.city}</span></li>
        </ul>
        
      </div>
  </div>
  <div class='content-chat'>
    <div class = 'section-chat'>
      <div id = 'section-profile'>
        <img class = 'image-profile' src='${character.imageUrl}'>
        <div class ='description-profile'>
          <h4 class = 'name-profile'>${character.name}</h4>
          <p class = 'shortD-profile'>${character.shortDescription}</p>
        </div>
      </div>
      <div id = 'messages'></div>
      <div class = 'user-chat'>
        <textarea id = 'input-chat'></textarea>
        <div id = 'send-message'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </div>
  </div>
        `;
  contentChat.appendChild(showData);

  const sendButton = contentChat.querySelector("#send-message");
  const inputUser = contentChat.querySelector("#input-chat");
  const contentMessages = contentChat.querySelector("#messages");

  function addUserMessage() {
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerHTML = inputUser.value;
    contentMessages.appendChild(userMessage);
  }
  function addSystemReply(reply) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('system-reply');
    userMessage.innerHTML = reply;
    contentMessages.appendChild(userMessage);
  }

  sendButton.addEventListener("click", () => {
    addUserMessage();
    communicateWithOpenAI(character, inputUser.value).then( reply => {
      addSystemReply(reply)
    })
    inputUser.value='';
  });
  return contentChat;
}

export default chat;
