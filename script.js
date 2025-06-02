// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize all interactive features
    initializeTheme();
    initializeNavigation();
    initializeMobileMenu();
    initializeCardToggles();
    initializeScrollEffects();
    initializeProjectModals();
    initializeContactLinks();
});

// Theme Toggle Functionality
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    if (!themeToggle) {
        console.warn('Theme toggle button not found');
        return;
    }
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        const currentTheme = body.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    const body = document.body;
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update navbar background immediately
    updateNavbarBackground();
    
    // Re-initialize icons after theme change with a slight delay for better reliability
    if (typeof lucide !== 'undefined') {
        setTimeout(() => {
            lucide.createIcons();
        }, 50);
    }
}

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Throttled scroll handler for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateNavbarBackground();
                updateActiveNavOnScroll();
                handleScrollTopButton();
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateNavbarBackground() {
    const navbar = document.getElementById('navbar');
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    
    if (window.scrollY > 50) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        }
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        navbar.style.boxShadow = 'none';
    }
}

// Update active navigation link
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Update active navigation on scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update desktop navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
    
    // Update mobile navigation
    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Simple Card Toggle Functionality
function initializeCardToggles() {
    // Find all card headers and set up click handlers
    document.querySelectorAll('.card-header').forEach(function(header) {
        // Add ARIA attributes for accessibility
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-expanded', 'false');
        
        const content = header.nextElementSibling;
        if (content && content.classList.contains('card-content')) {
            content.setAttribute('aria-hidden', 'true');
        }
        
        header.addEventListener('click', function() {
            toggleCard(this);
        });
        
        // Add keyboard support
        header.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleCard(this);
            }
        });
        
        // Check if this is in the skills section
        const skillsSection = header.closest('#skills');
        const isSkillsCard = skillsSection !== null;
        
        // Initialize cards - skills section starts expanded, others closed
        if (content && content.classList.contains('card-content')) {
            if (isSkillsCard && content.classList.contains('expanded')) {
                // Keep skills section expanded
                header.classList.add('expanded');
                header.setAttribute('aria-expanded', 'true');
                content.setAttribute('aria-hidden', 'false');
            } else {
                // Close other sections
                content.classList.remove('expanded');
                header.classList.remove('expanded');
                header.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
            }
        }
    });
}

// Simple toggle function
function toggleCard(header) {
    const content = header.nextElementSibling;
    
    if (!content || !content.classList.contains('card-content')) {
        return;
    }
    
    const isExpanded = header.classList.contains('expanded');
    
    if (isExpanded) {
        // Close the card
        content.classList.remove('expanded');
        header.classList.remove('expanded');
        header.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
    } else {
        // Open the card
        content.classList.add('expanded');
        header.classList.add('expanded');
        header.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
    }
    
    // Re-initialize icons after DOM changes
    if (typeof lucide !== 'undefined') {
        setTimeout(() => {
            lucide.createIcons();
        }, 100);
    }
}

// Scroll effects and animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.notion-card, .experience-card, .project-card, .publication-card, .highlight-item');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Project modals functionality
function initializeProjectModals() {
    const modal = document.getElementById('projectModal');
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeProjectModal();
        }
    });
}

// Open project modal
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    const projectDetails = getProjectDetails(projectId);
    
    modalContent.innerHTML = `
        <h2 style="margin-bottom: 1rem; color: var(--text-primary); font-weight: 600; font-family: var(--font-heading);">${projectDetails.title}</h2>
        <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                ${projectDetails.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            ${projectDetails.description}
        </div>
        <div style="color: var(--text-secondary); line-height: 1.6;">
            <h3 style="color: var(--text-primary); margin-bottom: 0.75rem; font-size: 1.1rem;">Key Features:</h3>
            <ul style="padding-left: 1.25rem;">
                ${projectDetails.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
            </ul>
        </div>
        ${projectDetails.technologies ? `
            <div style="margin-top: 1.5rem;">
                <h3 style="color: var(--text-primary); margin-bottom: 0.75rem; font-size: 1.1rem;">Technologies Used:</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${projectDetails.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        setTimeout(() => {
            lucide.createIcons();
        }, 100);
    }
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Get project details
function getProjectDetails(projectId) {
    const projects = {
        'project1': {
            title: 'Ultra Low-Cost Refreshable Braille Display',
            description: `We developed a revolutionary low-cost and reliable braille device with an integrated text-to-braille converter. Our innovation replaced the conventional expensive piezo-electric-based displays with a novel display mechanism that generates all Braille characters through a simple sliding arrangement of two eleven-slot pre-protruded sliders utilizing permutations of the slots.`,
            features: [
                'Novel sliding mechanism using eleven-slot pre-protruded sliders',
                'Text-to-Braille conversion capability',
                'Ultra-low cost production at only $66 USD per device',
                'Reliable and durable design for daily use',
                'Accessible technology for visually impaired users',
                'Mechanical innovation replacing expensive piezo-electric systems',
                'Permutation-based character generation system'
            ],
            technologies: ['Hardware Design', 'Mechanical Engineering', 'Accessibility Tech', 'Cost Optimization', 'Product Design'],
            tags: ['Hardware', 'Accessibility', 'Innovation', 'Social Impact']
        },
        'project2': {
            title: 'Pseudo One-Time Pad Cipher Machine',
            description: `Inspired by the famous German Enigma machine, we developed a sophisticated cipher machine using only non-programmable integrated circuits. The machine implements a novel approach to reusing a limited-length key to encrypt entire transmitted messages, creating a pseudo one-time pad cipher using cellular automata for key randomization.`,
            features: [
                'Enigma-inspired cipher machine design',
                'Non-programmable IC implementation only',
                'Novel key reuse mechanism with cellular automata',
                'Rule 30 cellular automata for key randomization',
                'Pseudo one-time pad cipher generation',
                'Hardware-based security implementation',
                'Educational cryptography demonstration'
            ],
            technologies: ['Digital Electronics', 'Cryptography', 'Cellular Automata', 'Hardware Security', 'Logic Design'],
            tags: ['Cryptography', 'Digital Electronics', 'Security', 'Hardware']
        },
        'project3': {
            title: 'Bone Age Estimation Using Deep Learning',
            description: `A medical AI project utilizing the RSNA Bone Age dataset to accurately determine bone age from X-ray images. We implemented an efficient convolutional neural network using MobileNets architecture to achieve high accuracy while maintaining computational efficiency for potential deployment in medical settings.`,
            features: [
                'RSNA Bone Age dataset utilization',
                'MobileNets CNN architecture for efficiency',
                'High accuracy bone age prediction',
                'Medical image analysis and preprocessing',
                'Potential for clinical deployment',
                'Lightweight model for resource-constrained environments',
                'Automated radiological assessment'
            ],
            technologies: ['Python', 'TensorFlow/Keras', 'Computer Vision', 'Medical AI', 'MobileNets', 'Deep Learning'],
            tags: ['Deep Learning', 'Medical AI', 'Computer Vision', 'Healthcare']
        },
        'project4': {
            title: 'Digital Break Room Platform',
            description: `Designed and developed a comprehensive digital break room platform to address the social isolation challenges of remote work. The platform enables employees working from home to connect through video conferencing in a casual, break room-like environment using MQTT broker technology for real-time communication.`,
            features: [
                'Video conferencing for remote employees',
                'MQTT broker for real-time connectivity',
                'Agile development methodology implementation',
                'State machine architecture design',
                'Full software development lifecycle experience',
                'Social interaction features for remote teams',
                'Scalable architecture for enterprise deployment'
            ],
            technologies: ['MQTT', 'WebRTC', 'JavaScript', 'Node.js', 'Agile Methodology', 'State Machines'],
            tags: ['Web Development', 'MQTT', 'Remote Work', 'Video Conferencing']
        }
    };
    
    return projects[projectId] || {
        title: 'Project Not Found',
        description: 'Project details are not available.',
        features: [],
        technologies: [],
        tags: []
    };
}

// Contact links functionality
function initializeContactLinks() {
    const contactBtns = document.querySelectorAll('.contact-btn');
    
    contactBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 100);
        });
    });
}

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i data-lucide="chevron-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--accent-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px var(--shadow-medium);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', scrollToTop);
    
    // Hover effect
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.background = 'var(--accent-hover)';
        this.style.transform = 'translateY(-2px) scale(1.1)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--accent-primary)';
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize theme-aware elements
    updateThemeAwareElements();
});

// Update elements that need theme awareness
function updateThemeAwareElements() {
    // This function can be expanded to handle any elements that need special theme handling
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Re-initialize animations and layouts on resize
    initializeScrollEffects();
});

// Utility function to debounce function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add keyboard accessibility
document.addEventListener('keydown', function(event) {
    // Handle Escape key for modals
    if (event.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal && modal.style.display === 'block') {
            closeProjectModal();
        }
    }
});

// Handle scroll to top button visibility
function handleScrollTopButton() {
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    if (scrollTopBtn) {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
}

// Mobile Menu functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!mobileMenuToggle || !mobileNavMenu) {
        return;
    }
    
    // Mobile menu toggle event
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNavMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileNavMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Mobile navigation links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                mobileMenuToggle.classList.remove('active');
                mobileNavMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Update active link
                updateActiveMobileNavLink(targetId);
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileNavMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            if (mobileNavMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mobileNavMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileNavMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Update active mobile navigation link
function updateActiveMobileNavLink(targetId) {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
} 