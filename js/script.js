let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 250) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    if (window.scrollY > 250) {
        scrollTop.style.display = 'initial';
    } else {
        scrollTop.style.display = 'none';
    }
};

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

});

const countDate = new Date('december 30, 2022 00:00:00').getTime();

const eventTime = setInterval(function () {
    let now = new Date().getTime();

    const gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    const d = Math.floor(gap / (day));
    const h = Math.floor((gap % (day)) / (hour));
    const m = Math.floor((gap % (hour)) / (minute));
    const s = Math.floor((gap % (minute)) / (second));

    const hari = document.getElementById('day');
    const jam = document.getElementById('hour');
    const menit = document.getElementById('minute');
    const detik = document.getElementById('second');
    hari.textContent = d;
    jam.textContent = h;
    menit.textContent = m;
    detik.textContent = s;

    if (gap == 0) {
        clearInterval(eventTime);
        alert('Waktu Event Telah Habis');
    }
}, 1000);