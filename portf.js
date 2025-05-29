// VANTA animated background - GTA 6 inspired colors (optimized for faster loading)
VANTA.BIRDS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0a0a0a,
  color1: 0xff00ff, // Neon pink
  color2: 0x00ffff, // Cyan
  birdSize: 1.2,
  wingSpan: 20.0,
  speedLimit: 2.0,
  separation: 30.0,
  alignment: 20.0,
  cohesion: 12.0,
  quantity: 3 // Reduced for better performance
});

// Enable GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Main site animation timeline
const tl = gsap.timeline({
  delay: 0.5 // Quick delay to ensure DOM is ready
});

// Animate logo with glitch effect
tl.from(".gta-logo", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  onComplete: () => {
    const logo = document.querySelector(".gta-logo img");
    gsap.to(logo, {
      filter: "brightness(1.2) contrast(1.1)",
      duration: 0.1,
      repeat: 3,
      yoyo: true
    });
  }
}, "-=0.5");

// Location tag animation removed



// Hero text animation with glitch effect
tl.from(".hero-text h1", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  onComplete: () => {
    // Add glitch effect after animation
    const h1 = document.querySelector(".hero-text h1");
    h1.classList.add("glitch");

    // Remove and add class again to restart animation
    setInterval(() => {
      h1.classList.remove("glitch");
      setTimeout(() => {
        h1.classList.add("glitch");
      }, 100);
    }, 5000);
  }
}, "-=0.3");

// Subtitle animation with line drawing
tl.from(".hero-text p", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, "-=0.8");

// Animate the lines around the subtitle
tl.from(".hero-text p::before, .hero-text p::after", {
  width: 0,
  duration: 0.8,
  ease: "power2.inOut"
}, "-=0.5");

// Profile picture animation with scale and glow effect
tl.from(".profile-pic", {
  scale: 0.3,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)",
  onComplete: () => {
    // Add continuous glow pulse effect
    gsap.to(".profile-pic", {
      boxShadow: "0 0 50px rgba(255, 0, 255, 0.8)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
}, "-=0.8");

// CTA button animation with glow
tl.from(".hero-cta", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
}, "-=0.5");

// Add pulse animation to CTA button
tl.to(".hero-cta .btn", {
  boxShadow: "0 0 30px rgba(255, 0, 255, 0.7)",
  duration: 1,
  repeat: 1,
  yoyo: true
}, "-=0.3");



// GTA 6-inspired section animations
document.querySelectorAll(".section").forEach((section) => {
  const title = section.querySelector("h2");
  const content = section.querySelector("p, .project-grid, .contact-form, .character-grid");

  if (title) {
    // Title animation with neon glow effect
    gsap.from(title, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        // Add subtle pulse animation to titles
        gsap.to(title, {
          textShadow: "0 0 15px rgba(255, 0, 255, 0.7)",
          repeat: -1,
          yoyo: true,
          duration: 2
        });
      }
    });
  }

  if (content) {
    // Content reveal animation
    gsap.from(content, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 80,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out"
    });
  }
});

// Character card animations (GTA 6 character profile style)
gsap.utils.toArray(".character-card").forEach((card, i) => {
  // Create timeline for each card
  const cardTl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  // Animate card elements in sequence
  cardTl
    .from(card, {
      x: i % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(card.querySelector(".character-image"), {
      scale: 0.8,
      opacity: 0.5,
      duration: 0.7,
      ease: "power1.out"
    }, "-=0.5")
    .from(card.querySelector(".character-name"), {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.3")
    .from(card.querySelector(".character-title"), {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.3")
    .from(card.querySelector(".character-description"), {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.2")
    .from(card.querySelector(".character-quote"), {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, "-=0.2");
});

// Project card stagger animation
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-grid",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "back.out(1.7)"
});

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      boxShadow: "0 15px 40px rgba(255, 0, 255, 0.3)",
      borderColor: "rgba(255, 0, 255, 0.6)",
      duration: 0.3
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      borderColor: "rgba(255, 0, 128, 0.3)",
      duration: 0.3
    });
  });
});

// Add CSS for enhanced effects
const style = document.createElement('style');
style.textContent = `
  .glitch {
    position: relative;
    animation: glitch 1s linear infinite;
  }

  @keyframes glitch {
    2%, 8%, 14%, 20%, 26%, 32%, 38%, 44%, 50%, 56%, 62%, 68%, 74%, 80%, 86%, 92%, 98% {
      transform: translate(0);
      text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff;
    }
    4%, 10%, 16%, 22%, 28%, 34%, 40%, 46%, 52%, 58%, 64%, 70%, 76%, 82%, 88%, 94% {
      transform: translate(-2px, 0);
      text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
    }
    6%, 12%, 18%, 24%, 30%, 36%, 42%, 48%, 54%, 60%, 66%, 72%, 78%, 84%, 90%, 96% {
      transform: translate(2px, 0);
      text-shadow: -2px 0 #00ffff, 2px 0 #ff00ff;
    }
  }

  .intro-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 9999;
    opacity: 1;
  }

  .letterbox-bar {
    position: fixed;
    left: 0;
    width: 100%;
    background-color: black;
    z-index: 9998;
  }

  .top-bar {
    top: 0;
    height: 15vh;
  }

  .bottom-bar {
    bottom: 0;
    height: 15vh;
  }
`;
document.head.appendChild(style);

// Add subtle animation effects on scroll
window.addEventListener('scroll', () => {
  // Subtle glow effect for sections as they come into view
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = sectionTop < window.innerHeight * 0.75;

    if (sectionVisible) {
      gsap.to(section, {
        boxShadow: '0 0 30px rgba(255, 0, 255, 0.1) inset',
        duration: 0.5
      });
    }
  });
});

// Add mouse movement effect for hero section
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;

  gsap.to('.hero-text', {
    x: mouseX * 20,
    y: mouseY * 20,
    duration: 0.5
  });
});

// Achievement card background transition effect
function setupAchievementHover() {
  const achievementCards = document.querySelectorAll('.achievement-card');
  const achievementsSection = document.getElementById('achievements');
  let hoverTimeout;

  if (achievementCards.length > 0 && achievementsSection) {
    // Add hover effect to the first achievement card (Innothon)
    if (achievementCards[0]) {
      achievementCards[0].addEventListener('mouseenter', () => {
        achievementsSection.classList.add('show-background');
        achievementsSection.style.setProperty('--bg-opacity', '0.9');

        // Set timeout to transition to second image after 3 seconds
        hoverTimeout = setTimeout(() => {
          achievementsSection.classList.add('show-background-2');
        }, 3000);
      });

      achievementCards[0].addEventListener('mouseleave', () => {
        achievementsSection.classList.remove('show-background');
        achievementsSection.classList.remove('show-background-2');
        achievementsSection.style.setProperty('--bg-opacity', '0');

        // Clear the timeout if mouse leaves before 3 seconds
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
      });
    }

    // Add hover effect to the second achievement card (Club Activity)
    if (achievementCards[1]) {
      let clubHoverTimeout;

      achievementCards[1].addEventListener('mouseenter', () => {
        achievementsSection.classList.add('show-club-background');
        achievementsSection.style.setProperty('--bg-opacity', '0.9');

        // Set timeout to transition to second image after 3 seconds
        clubHoverTimeout = setTimeout(() => {
          achievementsSection.classList.add('show-club-background-2');
        }, 3000);
      });

      achievementCards[1].addEventListener('mouseleave', () => {
        achievementsSection.classList.remove('show-club-background');
        achievementsSection.classList.remove('show-club-background-2');
        achievementsSection.style.setProperty('--bg-opacity', '0');

        // Clear the timeout if mouse leaves before 3 seconds
        if (clubHoverTimeout) {
          clearTimeout(clubHoverTimeout);
        }
      });
    }

    // Add hover effect to the third achievement card (ScavengerHunt)
    if (achievementCards[2]) {
      achievementCards[2].addEventListener('mouseenter', () => {
        achievementsSection.classList.add('show-scavenger-background');
        achievementsSection.style.setProperty('--bg-opacity', '0.9');
      });

      achievementCards[2].addEventListener('mouseleave', () => {
        achievementsSection.classList.remove('show-scavenger-background');
        achievementsSection.style.setProperty('--bg-opacity', '0');
      });
    }
  } else {
    setTimeout(setupAchievementHover, 1000);
  }
}

// Try multiple times to ensure DOM is ready
document.addEventListener('DOMContentLoaded', setupAchievementHover);
setTimeout(setupAchievementHover, 500);
setTimeout(setupAchievementHover, 1000);

// Project card flip functionality removed - now uses CSS hover


