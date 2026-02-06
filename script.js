// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Smooth Scroll for anchor links (optional if CSS scroll-behavior is not enough or for offsets)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission (Mock)
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thank you! Your message has been sent to MM Pets.');
            form.reset();
            btn.innerText = 'Message Sent';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Reveal Animation on Scroll
const sections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

sections.forEach((section) => {
    section.classList.add('hidden');
    sectionObserver.observe(section);
});

// Slideshow Code
document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    let slideTimer;

    const startSlideTimer = () => {
        slideTimer = setInterval(() => {
            plusSlides(1);
        }, 2000); // Change image every 2 seconds
    };

    const resetSlideTimer = () => {
        clearInterval(slideTimer);
        startSlideTimer();
    };

    if (document.getElementsByClassName("slide").length > 0) {
        showSlides(slideIndex);
        startSlideTimer();
    }

    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
        resetSlideTimer();
    }

    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
        resetSlideTimer();
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        let wrapper = document.querySelector(".slides-wrapper");

        if (slides.length === 0 || !wrapper) return;

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        // Calculate translateX percentage
        let translateValue = -(slideIndex - 1) * 100;
        wrapper.style.transform = `translateX(${translateValue}%)`;
    }
  
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzMMOI0uUxmcx3pIBKrDJdMUAaVVLAjqCwf39HEb2CXQcQKrGAl4ZRGjREwCHVXbnG_/exec",
                data:$("#contact-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })

    
});
