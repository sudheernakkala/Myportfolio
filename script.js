// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Navigation
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Data
// const projects = [
//     {
//         title: "Weather prediction",
//         description: "A brief description of project 1. You can add more details about the technologies used and the problem it solves.",
//         image: "https://via.placeholder.com/300x200",
//         tags: ["HTML", "CSS", "JavaScript"],
//         liveLink: "#",
//         githubLink: "#"
//     },
//     {
//         title: "e-commerce website",
//         description: "A brief description of project 2. You can add more details about the technologies used and the problem it solves.",
//         image: "https://via.placeholder.com/300x200",
//         tags: ["React", "Node.js", "MongoDB"],
//         liveLink: "#",
//         githubLink: "#"
//     },
//     {
//         title: "automation",
//         description: "A brief description of project 3. You can add more details about the technologies used and the problem it solves.",
//         image: "https://via.placeholder.com/300x200",
//         tags: ["Python", "Django", "PostgreSQL"],
//         liveLink: "#",
//         githubLink: "#"
//     }
// ];

// // Populate Projects
// const projectsGrid = document.querySelector('.projects-grid');

// projects.forEach(project => {
//     const projectCard = document.createElement('div');
//     projectCard.classList.add('project-card');
    
//     projectCard.innerHTML = `
//         <img src="${project.image}" alt="${project.title}">
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//         <div class="tags">
//             ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
//         </div>
//         <div class="project-links">
//             <a href="${project.liveLink}" class="btn primary-btn" target="_blank">Live Demo</a>
//             <a href="${project.githubLink}" class="btn secondary-btn" target="_blank">GitHub</a>
//         </div>
//     `;
    
//     projectsGrid.appendChild(projectCard);
// });

// Form Handling
const contactForm = document.getElementById('contact-form');

// Add click handlers for contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const type = this.querySelector('i').classList.contains('fa-envelope') ? 'email' : 'phone';
        const value = this.querySelector('p').textContent;
        
        if (type === 'email') {
            window.location.href = `mailto:${value}`;
        } else if (type === 'phone') {
            window.location.href = `tel:${value.replace(/\s+/g, '')}`;
        }
    });
});

// Add hover effect for contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Add scroll-based animations
const sections = document.querySelectorAll('section');

const fadeInOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => {
    section.classList.add('section-hidden');
    fadeInOnScroll.observe(section);
});

// Add additional styles for animations
const style = document.createElement('style');
style.textContent = `
    .section-hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: all 1s;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-active {
        transform: translateX(0%) !important;
    }
    
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .toggle .line2 {
        opacity: 0;
    }
    
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .project-card {
        background: white;
        border-radius: 10px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }
    
    .project-card:hover {
        transform: translateY(-5px);
    }
    
    .project-card img {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
    
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    
    .tag {
        background: var(--section-bg);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
        color: var(--primary-color);
    }
    
    .project-links {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            right: 0;
            height: 100vh;
            top: 0;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 60%;
            transform: translateX(100%);
            transition: transform 0.5s ease-in;
            padding: 2rem;
        }
    }
`;

document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[action*="formsubmit.co"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields');
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
        });
    }
}); 