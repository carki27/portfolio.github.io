const hamburguer = document.querySelector('.hamburguer'),
  navMenu = document.querySelector('.nav-menu'),
  navLinks = document.querySelectorAll('.nav-link'),
  textDisplay = document.getElementById('text'),
  textType = document.querySelector('.text-type'),
  frases = ['Desarrollador Web.', 'Freelancer.'],
  bienesRaicesVideo = document.getElementById('bienesRaicesVideo');

let i = 0,
  j = 0,
  fraseActual = [],
  borrando = false,
  isEnd = false,
  ubicacionPrincipal = window.pageYOffset;

document.addEventListener('DOMContentLoaded', function () {
  inicarApp();
});
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    bienesRaicesVideo.pause();
  }
});

function inicarApp() {
  aparecerElementos();
  hamburguerMenu();
  esconderHeader();
  loop();
  tecnologiasCarousel();
  pause();
}

function aparecerElementos() {
  ScrollReveal().reveal('.navegacion', { delay: 100 });
  ScrollReveal().reveal('.wrapper', { distance: '150%', origin: 'left', opacity: null, delay: 200 });

  if (innerWidth >= 768) {
    ScrollReveal().reveal('.social-media', { distance: '150%', origin: 'bottom', opacity: null, delay: 400 });
  } else {
    ScrollReveal().reveal('.social-media', { distance: '150%', origin: 'right', opacity: null, delay: 400 });
  }

  ScrollReveal().reveal('.about__foto img', { distance: '150%', origin: 'left', opacity: null, delay: 200 });
  ScrollReveal().reveal('.about__descripcion p');
  ScrollReveal().reveal('.glider_container', { easing: 'ease-in' });
  ScrollReveal().reveal('.portfolio__contenido');
}

function hamburguerMenu() {
  // Toggle menu lateral
  hamburguer.addEventListener('click', function () {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Iterar por click de links para cerrar menu
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      hamburguer.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

function loop() {
  isEnd = false;
  textDisplay.textContent = fraseActual.join('');

  if (i < frases.length) {
    if (!borrando && j <= frases[i].length) {
      fraseActual.push(frases[i][j]);
      j++;
      textDisplay.textContent = fraseActual.join('');
    }

    if (borrando && j <= frases[i].length) {
      fraseActual.pop(frases[i][j]);
      j--;
      textDisplay.textContent = fraseActual.join('');
      textType.classList.remove('active');
    }

    if (j == frases[i].length) {
      isEnd = true;
      borrando = true;
      textType.classList.add('active');
    }

    if (borrando && j === 0) {
      fraseActual = [];
      borrando = false;

      i++;

      if (i == frases.length) {
        i = 0;
      }
    }
  }
  const speedUp = Math.random() * (80 - 50) + 50,
    normalSpeed = Math.random() * (150 - 50) + 50,
    time = isEnd ? 2000 : borrando ? speedUp : normalSpeed;

  setTimeout(loop, time);
}

function esconderHeader() {
  window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (ubicacionPrincipal >= Desplazamiento_Actual) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-100px';
      navMenu.classList.remove('active');
      hamburguer.classList.remove('active');
    }
    ubicacionPrincipal = Desplazamiento_Actual;
  };
}

function tecnologiasCarousel() {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          draggable: true,
          dots: '.dots',
          dragVelocity: 1,
        },
      },
    ],
  });
}

function pause() {
  bienesRaicesVideo.pause();
}
