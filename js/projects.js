fetch('./json/projects.json')
  .then(response => {
    if (!response.ok) throw new Error('Error al cargar el archivo JSON');
    return response.json();
  })
  .then(proyectos => {
    const currentId = parseInt(new URLSearchParams(window.location.search).get('id'));
    const index = proyectos.findIndex(p => p.id === currentId);
    const proyecto = proyectos[index];
    const prevProyecto = proyectos[(index - 1 + proyectos.length) % proyectos.length];
    const nextProyecto = proyectos[(index + 1) % proyectos.length];

    const html = renderProyecto(proyecto, prevProyecto, nextProyecto);
    document.getElementById('mainContainer').innerHTML = html;
document.querySelectorAll('.Swiper').forEach(swiperEl => {
  const swiperInstance = new Swiper(swiperEl, {
    loop: true,
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true
    },
    spaceBetween: 20
  });

  swiperEl.addEventListener('mousemove', (e) => {
    const rect = swiperEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const middle = rect.width / 2;

    if (x < middle) {
      swiperEl.style.cursor = 'url(./img/cursor-left.svg), auto';
      swiperEl.dataset.direction = 'prev';
    } else {
      swiperEl.style.cursor = 'url(./img/cursor-right.svg), auto';
      swiperEl.dataset.direction = 'next';
    }
  });

  swiperEl.addEventListener('mouseleave', () => {
    swiperEl.style.cursor = 'default';
    delete swiperEl.dataset.direction;
  });

  swiperEl.addEventListener('click', () => {
    const direction = swiperEl.dataset.direction;
    if (direction === 'next') swiperInstance.slideNext();
    if (direction === 'prev') swiperInstance.slidePrev();
  });
});

  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('mainContainer').innerHTML = `<p>Error al cargar el contenido.</p>`;
  });

  // Función principal 
  function renderProyecto(proyecto, prevProyecto, nextProyecto) {
    return `
      <article class="Project">
        <header class="ProjectHeader">
          <div class="ProjectHeader-cabecera">
            <div class="ProjectHeader-imgContainer">
              <picture>
                <img class="ProjectHeader-img" src="${proyecto.icono}" alt="${proyecto.alt}" loading="lazy">
              </picture>
            </div>
            <h1 class="ProjectHeader-title">${proyecto.titulo}</h1>
          </div>
          <p class="ProjectHeader-description">${proyecto.descripcion}</p>
        </header>
  
        ${renderSecciones(proyecto)}
        ${renderCreditos(proyecto)}
        ${renderAside(prevProyecto, nextProyecto)}
      </article>
    `;
  }
  
//Función para las secciones clave

function renderSecciones(proyecto) {
  return proyecto.SectionClaves?.map((seccion, index) => {
    const encabezadoHTML = `
      <div class="Section-textContainer">
        <div class="Section-textGroup">
          <h4 class="Text-headingLead">${seccion.subheading || `CLAVE ${index + 1}`}</h4>
          <h3 class="Text-headingMedium">${seccion.heading}</h3>
        </div>
        <div class="Section-parrafos">
          <p class="Text-parrafo">${seccion.text}</p>
        </div>
      </div>`;

const imagenHTML = seccion.swiper && seccion.imagenes
  ? `<div class="Swiper swiper">
       <div class="swiper-wrapper">
         ${seccion.imagenes.map(img => `
           <div class="swiper-slide Swiper-slide">
             <picture>
               <img src="${img.src}" alt="${img.alt}" loading="lazy" class="Swiper-img">
             </picture>
           </div>`).join('')}
       </div>
       <div class="swiper-pagination Swiper-pagination"></div>
     </div>`
  : `<div class="Section-imgContainer">
       <picture>
         <img class="SectionClave-img" src="${seccion.img}" alt="${seccion.alt}" loading="lazy">
       </picture>
     </div>`;



    return `
      <section class="SectionClave">
        ${encabezadoHTML}
        ${imagenHTML}
      </section>`;
  }).join('') || '';
}



//Función para créditos
function renderCreditos(proyecto) {
  if (!proyecto.creditos) return '';

  if (Array.isArray(proyecto.creditos)) {
    return `
      <section class="Creditos">
        <h4 class="Creditos-titulo">${proyecto.creditosTitle}</h4>
        <ul>
          ${proyecto.creditos.map(c => `
            <li><a href="${c.link}" class="Creditos-link" target="_blank" rel="noopener noreferrer">${c.txt}</a></li>
          `).join('')}
        </ul>
      </section>
    `;
  } else {
    return `
      <section class="Creditos">
        <h4 class="Creditos-titulo">${proyecto.creditosTitle}</h4>
        <a href="${proyecto.creditos[0].link}" class="Creditos-link" target="_blank" rel="noopener noreferrer">${proyecto.creditos[0].creditostxt}</a>
      </section>
    `;
  }
}

//Función Aside
function renderAside(prevProyecto, nextProyecto) {
  return `
    <aside class="Aside" id="asideContainer">
      <a href="projects.html?id=${prevProyecto.id}" title="Visita ${prevProyecto.titulo}" class="Aside-container"
         style="background-image: url(${prevProyecto.imgaside});">
        <p class="Aside-text">Anterior Proyecto</p>
      </a>

      <a href="projects.html?id=${nextProyecto.id}" title="Visita ${nextProyecto.titulo}" class="Aside-container"
         style="background-image: url(${nextProyecto.imgaside});">
        <p class="Aside-text">Siguiente Proyecto</p>
      </a>
    </aside>
  `;
}