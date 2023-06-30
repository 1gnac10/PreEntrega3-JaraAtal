let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*LINKS */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu'); // Reemplazar 'bx-menu' por la clase del icono original
    menuIcon.classList.toggle('bx-x-circle'); // Reemplazar 'bx-x-circle' por la clase del nuevo icono
    navbar.classList.toggle('active');
};
/*SCROLL*/
window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};


/*EFECTO REAPARECER*/
// Obtener el elemento de contenido
const contenido = document.querySelector('.inicio-contenido');

// Establecer la posición inicial y final del contenido
const posicionInicial = -200;
const posicionFinal = 0;

// Establecer la posición inicial y opacidad
contenido.style.transform = `translateX(${posicionInicial}px)`;
contenido.style.opacity = '0';

// Función para animar el desplazamiento lateral y reaparición
const animarDesplazamiento = () => {
  contenido.style.transition = 'transform 0.5s, opacity 0.5s';
  contenido.style.transform = `translateX(${posicionFinal}px)`;
  contenido.style.opacity = '1';
};

// Activar la animación cuando se carga la página
window.addEventListener('load', animarDesplazamiento);


const inicioImagen = document.querySelector('.inicio-imagen');
const img = inicioImagen.querySelector('img');

// Establecer la posición inicial y opacidad de la imagen
img.style.transform = 'translateY(-100%)';
img.style.opacity = 0;

// Animación de caída suave
function animarCaida() {
  let opacidad = 0;
  let posicion = -100;

  const intervalo = setInterval(() => {
    if (posicion >= 0) {
      clearInterval(intervalo);
    } else {
      posicion += 2;
      opacidad += 0.02;

      img.style.transform = `translateY(${posicion}%)`;
      img.style.opacity = opacidad;
    }
  }, 10);
}

// Iniciar la animación cuando se cargue la página
window.onload = animarCaida;

