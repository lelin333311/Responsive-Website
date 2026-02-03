const hamburger = document.querySelector('.hamburger-menu-main');
const navMenu = document.querySelector('.nav-two');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});