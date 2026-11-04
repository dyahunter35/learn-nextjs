window.addEventListener('DOMContentLoaded', function () {

  /* ===== Animate Cards on Scroll ===== */
  const cardsContainer = document.getElementById('cards-container');
  if (cardsContainer) {
    const cards = cardsContainer.querySelectorAll(':scope > *');
    cards.forEach((card, index) => {
      card.classList.add('animate__animated', 'animate__fadeInUp');
      card.style.animationDelay = `${0.15 * index + 0.3}s`;
    });
  }

  /* ===== Animate Coming Soon Cards ===== */
  const comingSoonCards = document.querySelectorAll('.coming-soon-card');
  if (comingSoonCards.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              'animate__animated',
              'animate__fadeInUp'
            );
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    comingSoonCards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.animationDelay = `${0.1 * i + 0.2}s`;
      observer.observe(card);
    });
  }

  /* ===== Counter Animation ===== */
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'));
            const duration = 1500;
            const start = performance.now();

            function update(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target);
              if (progress < 1) requestAnimationFrame(update);
              else el.textContent = target;
            }

            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  animateCounters();

  /* ===== Navbar Shadow on Scroll ===== */
  const nav = document.querySelector('.main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('shadow-2xl', window.scrollY > 50);
      nav.classList.toggle('bg-indigo-950/95', window.scrollY > 50);
    });
  }
});
