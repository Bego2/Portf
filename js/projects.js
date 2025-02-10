/* PROYECTOS pt1.  En este documento he trabajado la parte de código que genera cada uno de los proyectos de mi portfolio. 

1. Declaramos la variable "proyectos", que guarda un array con 4 objetos, esos objetos son los proyectos. Cada proyecto comparte propiedades, pero para cada una de ellas guardamos diferentes valores. 

2. Creamos la funcion que mostrará en pantalla el proyecto que corresponda.

3. Seleccionamos el id= "proyecto" que se encuentra en el html de projects.html dentro de la etiqueta main, pues será aquí dentro donde gracias al innerHTML se irá mostrando el contenido.

4. Se localiza la parte de la url que va despues de la ? y guarda los parametros en la constante urlParams. Nos servirá para el punto 5. 

5. De urlParams se obtiene el id de la url, gracias al metodo get. Esto es útil porque después buscará el id de un proyecto para mostrarlo 

6. Aquí es donde se busca dentro del array el primer proyecto cuyo id coincida con el id obtenido de la url, para despues mostrarlo

Pd. hay una conexión html-javascript. Desde el index html clickando en un proyecto nos deriva a su pagina correspondiente gracias a href= "projects.html?id=[x]" */

//1
let proyectos = [
  {
    id: 1,
    icono: "./img/steez-iconotitulo.svg",
    titulo: "Steez",
    alt: "icono de steez, carita sonriente en negro sobre fondo neon",
    descripcion: "Identidad gráfica y diseño de interfaz para una aplicación de intercambio y alquiler de sneakers 'Exchange & Shine' se convierte en el lema de personas jóvenes que aman la moda, las sneakers y la sostenibilidad.",

    heading1:"Llamando la atención a través de la identidad",
    text1: "La identidad visual se compone de una paleta de colores en tonos gris y negro, con un acento de color neón. Aunque las tipografías utilizadas son sin serifa, su combinación genera contraste y un estilo desenfadado",
    img1: "./img/steez-pantallasmobile.webp",
    alt1: "tres pantallas formato mobile, mostrando la identidad de steez",

    heading2:"Iconos que no dejan indifente",
    text2:"Disfruté especialmente el proceso de creación del set de iconos. Diseñados en Illustrator como vectores, presentan una estética asimétrica y afilada que aporta personalidad a la interfaz.",
    img2: "./img/steez-iconos.webp",
    alt2: "iconos de steez y una pantalla móvil donde se muestran estos iconos aplicados",

    heading3: "La importancia de priorizar",
    text3: "Antes de diseñar, analizamos cómo lograr un equilibrio entre una app visualmente atractiva para el público joven y una experiencia de usuario óptima. Gracias a la pirámide UX y al árbol de funcionalidades, conseguimos nuestro objetivo.",
    img3: "./img/steez-arbolfuncionalidades.webp",
    alt3: "árbol de funcionalidades de steez",

    imgaside: "./img/thumbnail-steez.webp",

    creditos: "Trabajo realizado junto con",
    creditoslink: "https://www.katmadesign.com/",
    creditoslink2: "https://www.instagram.com/nomilkhouse/" ,
    creditostitle: "Página web de Ekaterina",
    creditostitle2: "Instagram de Silvia",
    creditostxt: "Ekaterina Matveeva",
    creditostxt2: "Silvia Castillo"

  },

  {
    id: 3,
    icono: "./img/brillo-iconotitulo.svg",
    titulo: "Brillo",
    alt: "icono de brillo, una B blanca sobre fondo verde oliva",
    descripcion: "Dirigí la dirección de arte y el diseño web de Retiro Brillo, un evento que fusiona arte y naturaleza. Con un tono de voz dulce y auténtico, su territorio es la creatividad, y sus valores giran en torno a la naturaleza, la luminosidad y la introspección.",

    heading1: "Una dirección de arte amable",
    text1: "La identidad visual se construye a partir de dos colores principales: verde y crema, reforzando la conexión con la naturaleza. La paleta se expande en la web con tonos adicionales que evocan creatividad y calidez.",
    img1: "./img/brillo-identidad.webp",
    alt1: "identidad visual del proyecto brillo, logo, fotografía, landing web",

    heading2: "Ilustración y fotografía",
    text2: "Las ilustraciones, pintadas a mano con acrílico, aportan un toque artesanal y artístico. Se integran tanto en la web como en redes sociales, enriqueciendo la identidad visual. Para la dirección de fotografía decidí: imágenes diurnas, coloridas y capturadas con luz natural, transmitiendo frescura y vitalidad.",
    img2: "./img/brillo-instagram.webp",
    alt2: "historias de instagram, se han aplicado los colores de marca y la identidad visual",

    heading3: "¡Diseño web!",
    text3: "El lanzamiento se realizó con Webflow. Aunque en ese momento no tenía los conocimientos de desarrollo web que tengo ahora, me alegra haberme atrevido. Gracias a este proyecto, decidí formarme en diseño web.",
    img3: "./img/brillo-pruebas.webp",
    alt3: "pruebas de logo, color y prototipado web",
    imgaside: "./img/thumbnail-brillo.webp",

    creditos: "Visita mi página en Webflow",
    creditoslink: "https://retirobrillo.webflow.io/",
    creditostitle: "Visita la web de Brillo",
    creditostxt: "Web de Brillo",
  

  },

  {
    id: 2,
    icono: "./img/festival-iconotitulo.svg",
    titulo: "Item",
    alt: "sobre fondo azul, una espiral blanca",
    descripcion: "Item es un festival de motion design dirigido a estudiantes y profesionales del sector. Diseñé la interfaz tanto para la web como para la app. La web gestiona la venta de entradas e informa sobre el evento, mientras que la app guía a los asistentes durante el festival.",

    heading1: "Soluciones nicho para un nicho de diseñadores",
    text1: "La comunicación gráfica está pensada específicamente para el público de Item: los motion designers. Para el diseño del festival, tomé como referencia los softwares de motion graphics, integrando símbolos, jerarquías y elementos de interacción inspirados en estas herramientas.",
    img1: "./img/festival-desktop.webp",
    alt1: "diseños web para la home y la página de información sobre el festival",

    heading2: "Dispositivos diferentes, objetivos distintos",
    text2: "La web del festival permite acceder al programa, consultar el mapa del recinto y obtener información clave. En cambio, la app está diseñada para que los asistentes gestionen su acceso al evento, revisen sus inscripciones o se apunten a nuevas actividades.",
    img2: "./img/festival-dispositivos.webp",
    alt2: "diseños web adaptado a ipad y varios diseños de la app",

    heading3: "Diseño centrado en el usuario",
    text3: "Un estudio previo del público asistente fue esencial para definir la mejor propuesta en web y app. Al analizar sus necesidades, adapté la experiencia en cada dispositivo. Tuve que equilibrar funcionalidad con una interacción más arriesgada y experimental.",
    img3: "./img/festival-dcu.webp",
    alt3: "datos de estudio del usuario principal que asistiría al evento",
    imgaside: "./img/thumbnail-festival.webp",
  },

  {
    id: 4,
    icono: "./img/lugar-iconotitulo.svg",
    alt: "una flor violeta sobre fondo grisáceo",
    titulo: "Fuera de lugar",
    descripcion: "¿Cómo sería acompañar a un artista en el lanzamiento de un disco? Desde los primeros singles hasta el álbum final, pasando por Spotify Canvas, redes sociales, diseño de vinilo y merchandising. Así interpreté Fuera de lugar, el disco de Kora, bajo mi propia óptica.",

    heading1: "Emociones a flor de piel",
    text1: "Al escuchar el disco y analizar sus letras en profundidad, identifiqué emociones clave: el pasado, lo inadecuado, el dolor y la sensibilidad. Basándome en la teoría del color de Eva Heller, extraje una paleta cromática que reflejara estas sensaciones.",
    img1: "./img/lugar-identidad.webp",
    alt1: "tipografía sans serif, colores pastel y texturas granuladas usadas en el proyecto",

    heading2: "Internet y música",
    text2: "La forma en que hoy en día se lanzan discos me llevó a diseñar las portadas de los singles como adelantos del álbum, asegurando una coherencia gráfica en todo el proyecto.",
    img2: "./img/lugar-spotify.webp",
    alt2: "las portadas de los singles del disco fuera de lugar",

    heading3: "Lo tangible sigue siendo importante",
    text3: "El diseño no se quedó solo en lo digital. Creé diferentes piezas de merchandising, desde el vinilo y pósters hasta una camiseta y una bolsa de tela para transportarlo todo :)",
    img3: "./img/lugar-merch.webp",
    alt3: "el merchandasing, vinilo, posters, bolsa de tela y camiseta por delante y detrás",
    imgaside: "./img/thumbnail-lugar.webp",
  },
];

function mostrarProyecto() {//2
  const contenedorProyecto = document.getElementById("proyecto"); //3
  const urlParams = new URLSearchParams(window.location.search); //4
  const proyectoId = urlParams.get("id"); //5

  if (!proyectoId) {
    // Esto sirve por si acaso no encuentra un id, que aparezca en pantalla un mensajito
    contenedorProyecto.innerHTML = `<p class="ProjectHeader-title"> Proyecto no proporcionado :( <br> Lo sentimos </p>`;
  }

  const proyecto = proyectos.find((p) => p.id == proyectoId); //6


/* PROYECTOS pt2. Esta condicional evalúa si se encontró el proyecto, si lo encontró mostrará en pantalla su inner html (gracias a su id y sus template strings puede encontrar que valores imprimir en pantalla). Si no lo encontró, mostrará un mensaje tb con inner html donde lo comunicará

1. Guardamos actualId que ha sido obtenido gracias a .indexOf 
2. Proyecto previo: gracias a restar 1 al índice actualId || si ve que no hay proyecto anterior, toma el ultimo de la lista proyectos 
3. Proyecto siguiente: lo va a obtener sumando 1 al indice actual || si no hay coge el primer proyecto de la lista proyectos
4. Después pasamos a la creación del html que está estructurada en partes: la primera con el icono del proyecto, el título y el parrafo de descripción. Después tres secciones cada una explica una clave importante del proyecto y una imagen asociada a la explicación. Tb una mini seccion de créditos. Por último, un aside por si quieres visitar el siguiente o el anterior proyecto
5. Dentro de Créditos encontramos dos operadores ternarios el primero pregunta si existe creditos y creditos link, si existe los muestra en pantalla  ${proyecto.creditos && proyecto.creditoslink ?   -> despues el segundo pregunta si existe creditoslink2 . Todo esto es porque en algunos proyectos si que muestro creditos y en otros no. */

  if (proyecto) {
    const actualId = proyectos.indexOf(proyecto); //1
    const prevProyecto = proyectos[actualId - 1] || proyectos[proyectos.length - 1]; //2
    const nextProyecto = proyectos[actualId + 1] || proyectos[0]; //3

    //4
    contenedorProyecto.innerHTML = `<article class="Project">

    <section class="ProjectHeader">
      <div class="ProjectHeader-cabecera">
        <div class="ProjectHeader-imgContainer">
          <picture>
          <img
            class="ProjectHeader-img"
            src= ${proyecto.icono}
            alt= ${proyecto.alt}
            loading = "lazy"
          >
          </picture>
        </div>
        <h1 class="ProjectHeader-title">${proyecto.titulo}</h1>
      </div>
      <p class="ProjectHeader-description">${proyecto.descripcion}
      </p>
    </section>


    <section class="SectionClave">
      <div class="Section-textContainer">
        <div class="Section-textGroup">
          <h4 class="Text-headingLead">CLAVE 1/3</h4>
          <h3 class="Text-headingMedium">${proyecto.heading1}</h3>
        </div>

        <div class="Section-parrafos">
          <p class="Text-parrafo">${proyecto.text1}</p>
        </div>
      </div>

      <div class="Section-imgContainer">
       <picture>
        <img class="SectionClave-img" src="${proyecto.img1}" alt="${proyecto.alt1}" loading="lazy" >
        </picture>
      </div>
    </section>

    <section class="SectionClave SectionClave--color">
      <div class="Section-textContainer">
        <div class="Section-textGroup">
          <h4 class="Text-headingLead">CLAVE 2/3</h4>
          <h3 class="Text-headingMedium">${proyecto.heading2}</h3>
        </div>

        <div class="Section-parrafos">
          <p class="Text-parrafo">${proyecto.text2}</p>
        </div>
      </div>

      <div class="Section-imgContainer">
       <picture>
        <img class="SectionClave-img" src="${proyecto.img2}" alt="${proyecto.alt2}" loading="lazy" >
       </picture>
      </div>
    </section>

    <section class="SectionClave">
      <div class="Section-textContainer">
        <div class="Section-textGroup">
          <h4 class="Text-headingLead">CLAVE 3/3</h4>
          <h3 class="Text-headingMedium">${proyecto.heading3}</h3>
        </div>

        <div class="Section-parrafos">
          <p class="Text-parrafo">${proyecto.text3}</p>
        </div>
      </div>

      <div class="Section-imgContainer">
       <picture>
        <img class="SectionClave-img" src="${proyecto.img3}" alt="${proyecto.alt3}" loading="lazy" >
       </picture>
      </div>
    </section>

      ${proyecto.creditos && proyecto.creditoslink ? `
        <section class="Creditos">
          <h3 class="Creditos-titulo">${proyecto.creditos}</h3>
          <div class="Creditos-links">
            <a class="Creditos-link" href="${proyecto.creditoslink}" title="${proyecto.creditostitle}" target="_blank" rel="noopener noreferrer">
              ${proyecto.creditostxt}
            </a>
            
            ${proyecto.creditoslink2 ? `
              <a class="Creditos-link" href="${proyecto.creditoslink2}" target="_blank" rel="noopener noreferrer" title="${proyecto.creditostitle2}">
                ${proyecto.creditostxt2}
              </a>
            ` : ''}
          </div>
        </section>
      ` : ''}
    </article>

  <aside class="Aside" id="asideContainer">
      <a href="projects.html?id=${prevProyecto.id}" 
      title="Visita ${prevProyecto.titulo}" class="Aside-container" 
      style="background-image: url(${prevProyecto.imgaside});">
      <p class="Aside-text">Anterior Proyecto</p>
      </a>

      <a href="projects.html?id=${nextProyecto.id}" title="Visita ${nextProyecto.titulo}" 
      class="Aside-container" 
      style="background-image: url(${nextProyecto.imgaside});"> 
      <p class="Aside-text">Siguiente Proyecto</p>
      </a>

    </aside>
    `;


  } else {
    contenedorProyecto.innerHTML = `<p class="ProjectHeader-title"> Proyecto no encontrado :( <br> Lo sentimos </p>`;
  }
}

// Para encapsular la funcion y poder reutilizarla, le hacemos un handler:

const mostrarProyectoHandler = () => mostrarProyecto();
 
// Para inicializar la función y cuando el DOM ya se ha cargado, entonces lo muestra  
document.addEventListener("DOMContentLoaded", mostrarProyectoHandler);
 