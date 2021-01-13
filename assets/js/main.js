const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function (event) {
    nav.classList.toggle('active');

});

window.addEventListener('scroll', function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle('sticky', scrollY > 0);
});