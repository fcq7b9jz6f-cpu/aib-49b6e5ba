// Add any interactive JavaScript here if needed.
// For a minimal portfolio, it might not require much dynamic content
// beyond smooth scrolling or lazy loading, which can be added later.

document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scrolling for navigation links
    document.querySelectorAll(
a.nav-link[href^="#"]
    
).forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
