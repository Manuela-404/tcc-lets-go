const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})


const elements = document.querySelectorAll('.hidden');

// --------------------------------------------------------------- 

elements.forEach((element) => myObserver.observe(element));


document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.hero .animate-fade');
    const subt = document.getElementById('hero-sub');
    const texto = subt.dataset.text || '';

    setTimeout(() => titulo.classList.add('visible'), 180);

    subt.textContent = '';
    const speed = 35;
    let i = 0;

    setTimeout(function type() {
        if (i < texto.length) {
            subt.textContent += texto.charAt(i++);
            setTimeout(type, speed);
        } else {
            subt.classList.remove('typing');
        }
    }, 500);
});

// --------------------------------------------------------------- 

const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('nav ul');
btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// Fecha o menu ao clicar em um link (útil em mobile)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// --------------------------------------------------------------- 

const catalogo = document.querySelector('.scroll-x');

// ---------------------------------------------------------------

// cursor de arrastar para o container scroll-x (melhora UX)

(function enableScrollGrab() {
    const sc = document.querySelector('.scroll-x');
    if (!sc) return;

    let isMouseDown = false;
    let startX;
    let scrollLeftOnStart;

    sc.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - sc.offsetLeft;
        scrollLeftOnStart = sc.scrollLeft;
        sc.style.cursor = 'grabbing';
        sc.classList.add('is-dragging');
        e.preventDefault();
    });

    document.addEventListener('mouseup', () => {
        if (!isMouseDown) return;
        isMouseDown = false;
        sc.style.cursor = 'grab';
        sc.classList.remove('is-dragging');
    });

    sc.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        const x = e.pageX - sc.offsetLeft;
        const walk = (x - startX) * 1.5;
        sc.scrollLeft = scrollLeftOnStart - walk;
    });

    sc.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - sc.offsetLeft;
        scrollLeftOnStart = sc.scrollLeft;
    }, { passive: true });

    sc.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - sc.offsetLeft;
        const walk = (x - startX) * 1.5;
        sc.scrollLeft = scrollLeftOnStart - walk;
    }, { passive: true });
})();

// ---------------------------------------------------------------
