document.addEventListener('DOMContentLoaded', function() {
    // Example of interactivity: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
});
