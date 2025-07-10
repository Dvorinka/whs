// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navCheckbox = document.getElementById('nav-toggle');
            if (navCheckbox && navCheckbox.checked) {
                navCheckbox.checked = false;
            }
        }
    });
});

// Add shadow to navbar on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature, .product-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
window.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    const productCards = document.querySelectorAll('.product-card');
    
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    });
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    });
    
    // Trigger initial animation
    setTimeout(animateOnScroll, 300);
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading class for fade-in effect
        img.classList.add('img-loading');
        
        // When image is loaded, remove loading class
        if (img.complete) {
            img.classList.remove('img-loading');
            img.classList.add('img-loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.remove('img-loading');
                this.classList.add('img-loaded');
            });
        }
    });
});
