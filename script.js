    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    function setActive(el) {
      navLinks.forEach(a => a.classList.remove('active'));
      el.classList.add('active');
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(s => observer.observe(s));

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObs.observe(el));

    // Stagger project cards
    document.querySelectorAll('.project-card').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.08}s`;
    });
