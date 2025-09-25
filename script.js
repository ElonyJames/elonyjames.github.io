
    // Auto year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Fade-in effect on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    faders.forEach(fader => appearOnScroll.observe(fader));
 