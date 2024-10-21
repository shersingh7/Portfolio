// Scroll with minimal offset so the heading is just under the navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = document.querySelector('header').offsetHeight;
      const minimalOffset = 0; // Minimal or no offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - minimalOffset;

      // Direct scroll with minimal offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto' // No smooth scrolling
      });
    }
  });
});