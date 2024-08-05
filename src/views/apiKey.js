import header from "../components/header.js";
import { getApiKey, setApiKey } from "../lib/apiKey.js";

function apiKey() {
  document.title = `Dataverse Chat - Api Key`;
  const contentApi = document.createElement("div");
  contentApi.appendChild(header());

  const description = `

  <h2 class="title-api">Api Key Admin</h2>
  <h3 class="description-api">Desde aquí puedes administrar la API Key a utilizar </h3>
  <input id="apiKey-input" placeholder="Escribe la api key aquí"></input>
  <div class="buttons-apiKey">
    <button id="delete-apiKey">Delete</button>
    <button id="save-apiKey"type="submit" >Save API KEY</button>
  </div>
  `;
  const contentDescription = document.createElement("div");
  contentDescription.innerHTML = description;
  contentDescription.classList.add("contentDescription");
  contentApi.appendChild(contentDescription);

  const saveButton = contentApi.querySelector("#save-apiKey");
  const deleteButton = contentApi.querySelector("#delete-apiKey");
  const inputApi = contentApi.querySelector("#apiKey-input");

  let key;

  key = getApiKey();
  
  function eventSave() {
    key = inputApi.value;
    //DEVUELVE UNDEFINDED
    setApiKey(key);

    console.log("API Key saved:", getApiKey());
    //SI DEVUELVE LA APIKEY DEL INPUT
    // getApiKey("API KEY", key)
  }
  function eventDelete() {
    inputApi.value = "";
    localStorage.removeItem("API KEY");
    console.log("API Key deleted:", getApiKey());
  }

  saveButton.addEventListener("click", eventSave);
  deleteButton.addEventListener("click", eventDelete);

  return contentApi;
}

export default apiKey;
