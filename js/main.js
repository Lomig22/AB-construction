// ===========================
// NAVIGATION
// ===========================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===========================
// SMOOTH SCROLLING
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===========================
// GALLERY FILTER
// ===========================

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===========================
// BEFORE/AFTER SLIDER
// ===========================

const beforeAfterWrappers = document.querySelectorAll('.before-after-wrapper');

beforeAfterWrappers.forEach(wrapper => {
    const slider = wrapper.querySelector('.before-after-slider');
    const afterImage = wrapper.querySelector('.after');

    if (slider && afterImage) {
        let isDragging = false;

        const updateSlider = (x) => {
            const rect = wrapper.getBoundingClientRect();
            const position = ((x - rect.left) / rect.width) * 100;
            const clampedPosition = Math.max(0, Math.min(100, position));

            slider.style.left = clampedPosition + '%';
            afterImage.style.clipPath = `inset(0 ${100 - clampedPosition}% 0 0)`;
        };

        slider.addEventListener('mousedown', () => {
            isDragging = true;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                updateSlider(e.clientX);
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Touch events for mobile
        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            e.preventDefault();
        });

        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                updateSlider(e.touches[0].clientX);
            }
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
        });
    }
});

// ===========================
// TESTIMONIALS SLIDER
// ===========================

const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.testimonial-prev');
const nextButton = document.querySelector('.testimonial-next');

if (testimonialTrack && testimonialCards.length > 0) {
    let currentIndex = 0;

    const updateSlider = () => {
        const offset = -currentIndex * 100;
        testimonialTrack.style.transform = `translateX(${offset}%)`;
    };

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            updateSlider();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
            updateSlider();
        });
    }

    // Auto-play testimonials
    let autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        updateSlider();
    }, 5000);

    // Stop auto-play when user interacts
    if (prevButton && nextButton) {
        [prevButton, nextButton].forEach(button => {
            button.addEventListener('click', () => {
                clearInterval(autoPlayInterval);
                autoPlayInterval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % testimonialCards.length;
                    updateSlider();
                }, 5000);
            });
        });
    }
}

// ===========================
// FLOATING CTA VISIBILITY
// ===========================

const floatingCta = document.getElementById('floatingCta');

if (floatingCta) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            floatingCta.style.opacity = '1';
            floatingCta.style.pointerEvents = 'auto';
        } else {
            floatingCta.style.opacity = '0';
            floatingCta.style.pointerEvents = 'none';
        }
    });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.why-card, .service-card, .gallery-item, .testimonial-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// FORM HANDLING (for contact page)
// ===========================

const contactForm = document.getElementById('contactForm');
const quoteForm = document.getElementById('quoteForm');

const handleFormSubmit = (form, successMessage) => {
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Here you would typically send the data to a server
            console.log('Form data:', data);

            // Show success message
            const messageDiv = document.createElement('div');
            messageDiv.className = 'form-success-message';
            messageDiv.style.cssText = `
                padding: 1.5rem;
                background: #4CAF50;
                color: white;
                border-radius: 8px;
                margin-top: 1rem;
                text-align: center;
                font-weight: 600;
            `;
            messageDiv.textContent = successMessage || 'Message envoyé avec succès ! Nous vous recontacterons rapidement.';

            form.appendChild(messageDiv);

            // Reset form
            form.reset();

            // Remove message after 5 seconds
            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
        });
    }
};

handleFormSubmit(contactForm, 'Votre message a été envoyé avec succès ! Nous vous recontacterons dans les plus brefs délais.');
handleFormSubmit(quoteForm, 'Votre demande de devis a été envoyée ! Nous vous contacterons sous 24h.');

// ===========================
// MULTI-STEP FORM (for quote page)
// ===========================

const multiStepForm = document.querySelector('.multi-step-form');
if (multiStepForm) {
    const steps = multiStepForm.querySelectorAll('.form-step');
    const nextButtons = multiStepForm.querySelectorAll('.btn-next');
    const prevButtons = multiStepForm.querySelectorAll('.btn-prev');
    const progressBar = multiStepForm.querySelector('.progress-bar-fill');
    const stepIndicators = multiStepForm.querySelectorAll('.step-indicator');

    let currentStep = 0;

    const updateStep = () => {
        // Hide all steps
        steps.forEach((step, index) => {
            step.classList.remove('active');
            if (index === currentStep) {
                step.classList.add('active');
            }
        });

        // Update progress bar
        if (progressBar) {
            const progress = ((currentStep + 1) / steps.length) * 100;
            progressBar.style.width = progress + '%';
        }

        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed');
            if (index < currentStep) {
                indicator.classList.add('completed');
            } else if (index === currentStep) {
                indicator.classList.add('active');
            }
        });
    };

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateStep();
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateStep();
            }
        });
    });

    updateStep();
}

// ===========================
// NUMBER COUNTER ANIMATION
// ===========================

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString().includes('+') ? target : Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const number = parseInt(text.replace(/\D/g, ''));

                animateCounter(target, number, 2000);

                if (hasPlus) {
                    setTimeout(() => {
                        target.textContent = number + '+';
                    }, 2000);
                }
                if (hasPercent) {
                    setTimeout(() => {
                        target.textContent = number + '%';
                    }, 2000);
                }

                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
}

// ===========================
// LAZY LOADING IMAGES
// ===========================

const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===========================
// ACTIVE NAVIGATION LINK
// ===========================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// INITIALIZE
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Set initial navbar state
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // Set initial floating CTA state
    if (floatingCta) {
        floatingCta.style.opacity = window.scrollY > 500 ? '1' : '0';
        floatingCta.style.pointerEvents = window.scrollY > 500 ? 'auto' : 'none';
        floatingCta.style.transition = 'opacity 0.3s ease';
    }

    console.log('AB Construction website loaded successfully!');
});
