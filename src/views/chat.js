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
          <li class='card-character-facts'>Especie:<span> ${character.facts.species}</span></li>
          <li class='card-character-facts'>Genero:<span> ${character.facts.gender}</span></li>
          <li class='card-character-facts'>Edad:<span> ${character.facts.age}</span></li>
          <li class='card-character-facts'>Ciudad:<span> ${character.facts.city}</span></li>
        </ul>
        <div class='card-div-image'>
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
        </div>
      </div>
      <div id = 'messages'></div>
      <div class = 'user-chat'>
        <textarea id = 'input-chat'></textarea>
        <div id = 'send-message'></div>
      </div>
    </div>
  </div>
        `;
  contentChat.appendChild(showData);

  const sendButton = contentChat.querySelector("#send-message");
  const inputUser = contentChat.querySelector("#input-chat");
  const contentMessages = contentChat.querySelector("#messages");
  const message = [
    { role: "system", content: `Eres ${character.name}, tu personalidad se basa en ${character.description}; vas a responder a los mensajes y preguntas del usuario y tus respuestas no van a tener más de 20 palabras` },
    { role: "user", content: inputUser.value }
  ];
  // const reply = data.choices[0].message.content;
 

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
    // console.log("boton de enviar");
    addUserMessage();
    communicateWithOpenAI(character, inputUser.value).then( reply => {
      addSystemReply(reply)
    })
    inputUser.value='';
    // addSystemReply();
    contentMessages.scrollTop = contentMessages.scrollHeight;
  });

  // function sendMessage(){
  //   // console.log("boton de enviar");
    
  //   addUserMessage();
  //   communicateWithOpenAI(message);
  //   inputUser.value='';
  //   // addSystemReply();
  // }
  // sendButton.addEventListener("click", sendMessage());
  // sendButton.addEventListener("keydown", 
  //   function(event)
  //   {if(event.key === 'Enter' || event.keyCode === 13){
  //     event.preventDefault; sendMessage()
  //   }});

  // sendButton.addEventListener("click", () => {
  //   // console.log("boton de enviar");
  //   addUserMessage();
  //   communicateWithOpenAI(message);
  //   inputUser.value='';
  //   addSystemReply();
  // });

  return contentChat;
}

export default chat;
