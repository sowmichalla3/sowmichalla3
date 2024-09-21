// Simple animation for skills section
const skillsListItems = document.querySelectorAll('.skills-list li');

window.addEventListener('scroll', () => {
    skillsListItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight * 0.8) {
            item.classList.add('show');
        }
    });
});

// Add more JavaScript for other animations or interactions