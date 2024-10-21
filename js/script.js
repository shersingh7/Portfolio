// Parallax scrolling effect for the Intro section
window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.pageYOffset;

  // Apply the parallax effect only when scrolling normally
  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Smooth scrolling with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Calculate the offset for the fixed header
    const headerOffset = document.querySelector('header').offsetHeight + 20; // Slightly increased offset
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Disable parallax during smooth scroll
    window.removeEventListener('scroll', handleParallax);

    // Smooth scroll to the position with offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Re-enable parallax after scrolling completes
    setTimeout(() => {
      window.addEventListener('scroll', handleParallax);
    }, 1000); // Adjust time as necessary
  });
});

// Parallax scrolling effect logic wrapped in a function
function handleParallax() {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
}