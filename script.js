// Script principal del portafolio

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initNavbar();
    initSmoothScroll();
    initBackToTop();
    initContactForm();
    initMobileMenu();
    initSkillAnimations();
    initScrollAnimations();
    
    // Inicializar animaciones de carga
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Navegación responsive y efectos
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Cambiar estilo al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Actualizar enlace activo según scroll
        updateActiveNavLink();
    });
    
    // Manejar clic en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Cerrar menú móvil si está abierto
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Actualizar enlace activo
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// Scroll suave para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Botón para volver arriba
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Animación suave al hacer clic
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Formulario de contacto
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validación básica
        if (!name || !email || !message) {
            showFormMessage('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Simular envío del formulario
        showFormMessage('Enviando mensaje...', 'success');
        
        // Simulación de API call (en un proyecto real aquí iría fetch o axios)
        setTimeout(() => {
            // Resetear formulario
            contactForm.reset();
            
            // Mostrar mensaje de éxito
            showFormMessage('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        }, 1500);
    });
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Menú móvil hamburguesa
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevenir scroll cuando el menú está abierto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Animaciones de barras de habilidades
function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Función para animar barras cuando son visibles
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.dataset.animated) {
                const width = bar.style.width;
                bar.style.width = '0';
                
                // Animar progresivamente
                setTimeout(() => {
                    bar.style.width = width;
                    bar.dataset.animated = 'true';
                }, 100);
            }
        });
    };
    
    // Animar en carga y scroll
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .detail-item, .contact-item');
    
    const checkScroll = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar opacidad
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Verificar en carga y scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
}

// Actualizar enlace de navegación activo según scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Efectos de hover en tarjetas de proyectos
function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Contador de visitas (simulado)
function initVisitorCounter() {
    const visitorCounter = document.createElement('div');
    visitorCounter.className = 'visitor-counter';
    visitorCounter.innerHTML = `
        <i class="fas fa-eye"></i>
        <span>Visitas: <span id="visitCount">0</span></span>
    `;
    visitorCounter.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        background: var(--primary-color);
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: var(--shadow);
        z-index: 999;
    `;
    
    document.body.appendChild(visitorCounter);
    
    // Simular incremento de visitas
    setTimeout(() => {
        let count = 0;
        const countElement = document.getElementById('visitCount');
        const targetCount = Math.floor(Math.random() * 100) + 50;
        
        const interval = setInterval(() => {
            count++;
            countElement.textContent = count;
            
            if (count >= targetCount) {
                clearInterval(interval);
            }
        }, 20);
    }, 1000);
}

// Inicializar efectos adicionales
setTimeout(() => {
    initProjectHoverEffects();
    initVisitorCounter();
}, 500);

// Detectar tema preferido del sistema
function detectPreferredTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
        document.body.classList.add('dark-mode');
    }
    
    // Escuchar cambios en la preferencia de tema
    prefersDark.addEventListener('change', (e) => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
}

// Inicializar detección de tema
detectPreferredTheme();

// Manejar errores de carga de recursos
window.addEventListener('error', function(e) {
    console.error('Error loading resource:', e.target.src || e.target.href);
});

// Optimización para dispositivos móviles
function optimizeForMobile() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Optimizaciones específicas para móviles
        document.body.classList.add('mobile-device');
        
        // Reducir animaciones en dispositivos móviles si el usuario lo prefiere
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches) {
            document.body.classList.add('reduced-motion');
        }
    }
}

// Ejecutar optimizaciones
optimizeForMobile();