// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA button handler
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Спасибо за интерес');
            this.textContent = 'Узнать больше';
        });
    }

    // Contact form handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Simple validation
            if (name.value && email.value && message.value) {
                alert('Спасибо, ' + name.value + '! Сообщение будет отправлено');
                this.reset();
            } else {
                alert('Случилась ошибка.');
            }
        });
    }

    // Navbar style on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(44, 62, 80, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = '#2c3e50';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Animation on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        serviceCards.forEach(function(card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    // Visit counter
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem('visitCount')) {
            let count = parseInt(localStorage.getItem('visitCount')) + 1;
            localStorage.setItem('visitCount', count.toString());
        } else {
            localStorage.setItem('visitCount', '1');
        }
        console.log('Visit count: ' + localStorage.getItem('visitCount'));
    }
});