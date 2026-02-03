const hamburger = document.querySelector('.hamburger-menu-main');
const navMenu = document.querySelector('.nav-two');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active'); // Add this to animate the icon
});

document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', function() {
        // এই লাইনটি ক্লিক করলে সাদা করবে আবার ক্লিক করলে আগের রঙে ফিরিয়ে নেবে
        this.classList.toggle('active');
    });
});