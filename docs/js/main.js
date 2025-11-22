// ===================================
// SkillSwap Landing Page - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===================================
  // Smooth Scrolling for Anchor Links
  // ===================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or links to signup/profile (not on page)
      if (href === '#' || href === '#signup' || href === '#profile') {
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===================================
  // Intersection Observer for Scroll Animations
  // ===================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Optional: Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe step cards with stagger effect
  const stepCards = document.querySelectorAll('.step-card');
  stepCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
  });

  // Observe feature cards with stagger effect
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 50}ms`;
    observer.observe(card);
  });

  // Observe segment cards
  const segmentCards = document.querySelectorAll('.segment-card');
  segmentCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
  });

  // Observe USP cards
  const uspCards = document.querySelectorAll('.usp-card');
  uspCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 80}ms`;
    observer.observe(card);
  });

  // Observe testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
  });

  // Observe benefit items
  const benefitItems = document.querySelectorAll('.benefit-item');
  benefitItems.forEach((item, index) => {
    item.classList.add('fade-in');
    item.style.transitionDelay = `${index * 100}ms`;
    observer.observe(item);
  });

  // ===================================
  // Add Pulse Animation to Professor Icons
  // ===================================
  const benefitIcons = document.querySelectorAll('.benefit-icon');
  benefitIcons.forEach(icon => {
    icon.style.animation = 'pulse 2s ease-in-out infinite';
  });

  // Add pulse keyframes dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  `;
  document.head.appendChild(style);

  // ===================================
  // Parallax Effect for Hero Section (Optional)
  // ===================================
  const heroSection = document.querySelector('.hero-section');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroSection && scrolled < window.innerHeight) {
      heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  });

  // ===================================
  // Add Loading Animation to Page
  // ===================================
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease-in';
  
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });

  // ===================================
  // Console Message
  // ===================================
  console.log('%c🎓 Welcome to SkillSwap! ', 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
  console.log('%cA World Where Knowledge Flows Freely', 'color: #6366f1; font-size: 14px; font-style: italic;');
});
