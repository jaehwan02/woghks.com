window.addEventListener('load', () => {
  initializeCursor();
  initializeProgressBars();
  initializeNewsletterForm();
  initializeAnimations();
  initializeSearch();
  initializeScroll();
});

window.addEventListener('hashchange', () => {
  const element = document.querySelector(window.location.hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
});
