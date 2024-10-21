// Parallax scrolling effect for the Intro section
window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.pageYOffset;

  // Apply the parallax effect with a 0.5 factor
  if (parallax) {
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  }
});

// Smooth scrolling with header offset for all sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Handle the 'Services' link separately to disable smooth scrolling
    if (targetId === '#services') {
      const headerOffset = document.querySelector('header').offsetHeight + 40; // Add a slightly larger offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Use 'auto' to scroll directly without smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto' // Disable smooth scrolling for Services
      });
    } else {
      // For all other sections, keep the smooth scroll behavior
      const headerOffset = document.querySelector('header').offsetHeight + 20; // Adjust the offset as necessary
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Enable smooth scrolling for other sections
      });
    }
  });
});