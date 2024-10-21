// Parallax scrolling effect
window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.pageYOffset;

  // Apply the parallax effect with a 0.5 factor
  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Smooth scrolling with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    // Calculate the offset for the fixed header
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Smooth scroll to the position with the offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});