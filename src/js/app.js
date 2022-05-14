const hamburguer = document.querySelector('.hamburguer'),
      navMenu = document.querySelector('.nav-menu'),
      navLinks = document.querySelectorAll('.nav-link'),
      textDisplay = document.getElementById('text'),
      textType = document.querySelector('.text-type'),
      frases = ['Desarrollador Web.', 'Freelancer.'];

let i = 0,
    j = 0,
    fraseActual = [],
    borrando = false,
    isEnd = false;


document.addEventListener('DOMContentLoaded', function() {
    inicarApp();
});

function inicarApp() {
    hamburguerMenu()
    loop()
}

function hamburguerMenu() {
    // Toggle menu lateral
    hamburguer.addEventListener('click', function() {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Iterar por click de links para cerrar menu
    navLinks.forEach( function(navLink) {
        navLink.addEventListener('click', function() {
            hamburguer.classList.remove('active');
            navMenu.classList.remove('active');
        })
    })
}

function loop() {
    isEnd = false;
    textDisplay.textContent = fraseActual.join('')

    if (i < frases.length) {


        if (!borrando && j <= frases[i].length) {
            fraseActual.push(frases[i][j]);
            j++;
            textDisplay.textContent = fraseActual.join('');
        }

        if(borrando && j <= frases[i].length) {
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