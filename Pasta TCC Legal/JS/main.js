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