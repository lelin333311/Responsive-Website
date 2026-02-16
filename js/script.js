const hamburger = document.querySelector('.hamburger-menu-main');
const navMenu = document.querySelector('.nav-two');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});

// Gsap

// gsap.registerPlugin(SplitText, ScrollTrigger);

// let split, tl;

// const createSplit = () => {
//     split && split.revert();
//     tl && tl.revert();
//     split = new SplitText(".wrapper p", {
//         type: "chars"
//     });

//     tl = gsap
//         .timeline({
//             scrollTrigger: {
//                 trigger: "#textSection",
//                 start: "top top",
//                 end: "+=150%",
//                 pin: true,
//                 scrub: 0.75,
//                 markers: true
//             }
//         })
//         .set(
//             split.chars,
//             {
//                 color: "#ffcc66",
//                 stagger: 0.1
//             },
//             0.1
//         );
// };
// createSplit();
// const debouncer = gsap.delayedCall(0.2, createSplit).pause();

// window.addEventListener("resize", () => debouncer.restart(true));