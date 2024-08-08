# Dataverse Chat - Spiderverse

## Índice

* [1. Definición del Producto](#1-Deficicion-del-producto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Diseño de la Interfaz de Usuario](#4-diseño-de-la-interfaz-de-usuario)
* [5. Test de Usabilidad](#5-test-de-usabilidad)
***

## 1. Definición del Producto

Dataverse Chat - Spiderman Across The Spiderverse es una Single page Application (SPA), responsive, realizada con JavaScript (ES6+), HTML y CSS, sin frameworks o librerías de CSS y JS.  

La página se diseñó pensando en los usuarios (nuevos fans) del multiverso Spider-Man ya que las películas están en constante actualización, para que puedan aprender de sus personajes favoritos de una manera interactiva y divertida haciendo preguntas sobre ellos. La vista principal muestra 24 tarjetas se los personajes más relevantes del Spiderverse. Donde los usuarios pueden ver información relevante de personajes del multiverso de Spiderman.  

## 2. Funcionalidades

  Se configuro el router para la funcionalidad del SPA con las siguientes vistas: 

  - Home: donde se muestran las tarjetas de información de los personajes aquí puedes filtrarlas y ordenarlas, y ver datos curiosos, al hacer click en las tarjetas de lleva a la síguete vista. 

  - Chat individual: donde puedes tener conversaciones interactivas con el personaje que escogiste. 

  - Api Key: necesitas colocar una para que el chat del personaje funcione, en esta vista se puede guardar la api key en la nube (localstorage) para su uso continuo.
  (Nota: api key es un identificador que sirve para la autenticación de un usuario para el uso de un servicio.)  

  - Error: si se coloca una URL que no existe la página de envía a una vista de error. 

La página cuenta con los test necesarios para asegurar el funcionamiento correcto de la misma. 

## 3. Historias de Usuario

#### Historia 1: 
Como usuarias necesitamos que el prototipo se adecue al nuevo proyecto en diseño y funcionalidad, y estén planificadas las nuevas vistas. 

#### Historia 2: 
Como usuarias necesitamos que la página sea una SPA y que podamos cambiar de vista al cambiar la URL, se realizaran tests para comprobar su funcionalidad.

#### Historia 3: 
Como usuarias necesitamos que los datos del proyecto anterior estén migrados en el nuevo proyecto, se puedan visualizar las tarjetas y ejecutar tests unitarios para comprobar que las funcionalidades de filtrar y ordenar continúen operativas.

#### Historia 4: 
Como usuarias necesitamos una vista donde se pueda ingresar y guardar la api key. 

#### Historia 5: 
Como usuarias necesitamos tener una vista para interactuar con cada personaje, que tenga un chat de tiempo real.

#### Historia 6: 
Como usuarias necesitamos obtener respuestas de los personajes para poder interactuar con ellos de forma dinámica mediante la IA de openAI.

## 4. Diseño de la Interfaz de usuario

Realizamos el prototipo de alta fidelidad en base a las historias de usuarias y lo mejoramos de acuerdo al feedback recibido.
![prototipo para movil](https://res.cloudinary.com/db3qclbrk/image/upload/v1723133072/Dataverse_Phone_uxowrh.png)
![prototipo para pc](https://res.cloudinary.com/db3qclbrk/image/upload/v1723133086/Dataverse_Phone_avnhyx.png)

## 5. Test de Usabilidad

  - En las tarjetas no se tenía claro que se podía dar click en ellas para ir a la vista de chat.
  - **Solución:** Agregar un botón con un icono de chat para que los usuarios noten que las tarjetas tienen una funcionalidad. 

  - En el chat los mensajes del usuario estaban a la izquierda y las respuestas a la derecha.
  - **Solución:**  se invirtió el orden para que fuera más intuitivo para el usuario 

  - En la sección del personaje del chat (phone size) había una opción de ver más y mostraba una descripción más detallada del personaje.
  - **Solución:**  La descripción mostrada era muy extensa y le quitaba protagonismo a lo más importante que es el chat. 

***Equipo de Trabajo***
[Anyerlin Rodriguez](https://github.com/Angiers18)
[Fernanda Castillo](https://github.com/fe-ercg)
