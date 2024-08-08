import { navigateTo } from "../router.js";

export const renderItems = (data) => {
  const ul = document.createElement("ul");

  function crearElemento(data) {
    const li = document.createElement("li");
    li.setAttribute("itemtype", "Spiderverse");
    li.setAttribute("itemscope", "");
    li.setAttribute("data-id", data.id);
    li.addEventListener("click", () => {
      const cardsId = data.id;
      navigateTo("/chat", cardsId);
      return cardsId;
    });
    li.classList.add("item-lista");
    ul.appendChild(li);

    //IMAGEN--------------------------------------------------------------------
    const personajeImagen = document.createElement("div");
    personajeImagen.style.backgroundImage = `url(${data.imageUrl})`;
    personajeImagen.classList.add("image");
    personajeImagen.setAttribute("alt", data.name);
    li.appendChild(personajeImagen);

    //TEXTO-----------------------------------------------------------------------------
    const dl = document.createElement("dl");
    li.appendChild(dl);

    //NAME------------------------------------------------------------------------------------
    const dtNombre = document.createElement("dt");
    dl.appendChild(dtNombre);
    dtNombre.setAttribute("itemprop", "name");
    dtNombre.classList.add("name");
    dtNombre.innerHTML = data.name;

    //DESCRIPCION - CORTA -------------------------------------------------------------------------
    const dtDescripcion = document.createElement("dt");
    dl.appendChild(dtDescripcion);
    dtDescripcion.setAttribute("itemprop", "shortDescription");
    dtDescripcion.classList.add("descripcion");
    dtDescripcion.innerHTML = data.shortDescription;

    //DIV para FACTS-----------------------------------------------------------------------------
    const facts = document.createElement("div");
    facts.classList.add("facts");
    dl.appendChild(facts);

    //FACTS - GENERO---------------------------------------------------------------------------------
    const dtGender = document.createElement("dt");
    facts.appendChild(dtGender);
    dtGender.setAttribute("itemprop", "gender");
    dtGender.innerHTML =
      '<span class="label">Genero: </span><span class="value">' +
      data.facts.gender +
      "</span>";

    //FACTS - ESPECIE-------------------------------------------------------------------------------------
    const dtSpecies = document.createElement("dt");
    dtSpecies.setAttribute("itemprop", "species");
    facts.appendChild(dtSpecies);
    dtSpecies.innerHTML =
      '<span class="label">Especie: </span><span class="value">' +
      data.facts.species +
      "</span>";

    //FACTS - EDAD----------------------------------------------------------------------------------------------
    const dtAge = document.createElement("dt");
    facts.appendChild(dtAge);
    dtAge.setAttribute("itemprop", "age");
    dtAge.innerHTML =
      '<span class="label">Edad: </span><span class="value">' +
      data.facts.age +
      "</span>";

    //FACTS - CIUDAD----------------------------------------------------------------------------------------------
    const dtCity = document.createElement("dt");
    facts.appendChild(dtCity);
    dtCity.setAttribute("itemprop", "city");
    dtCity.innerHTML =
      '<span class="label"> Ciudad: </span><span class="value">' +
      data.facts.city +
      "</span>";

    // DIV BOTON PARA IR A CHAT--------------------------------------------------
    const bubbleMessage = document.createElement("div");
    dl.appendChild(bubbleMessage);
    bubbleMessage.classList.add("bubbleMessage");
    bubbleMessage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    `
  }
  //CREA ELEMENTO POR CADA OBJETO DE LA DATA-----------------------------------------------------------------
  data.forEach(crearElemento);

  return ul;
};
