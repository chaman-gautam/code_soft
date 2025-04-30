
let lastScrollY = window.scrollY; // Initial scroll position
const header = document.querySelector('.header_section1');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('bg_blue');
    } else {
        // Scrolling up
        header.classList.remove('bg_blue');
    }

    // Update lastScrollY
    lastScrollY = currentScrollY;
});


