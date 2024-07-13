function animateProgressBar(barId, percentageId, targetPercentage) {
  const progressBar = document.getElementById(barId);
  const percentageText = document.getElementById(percentageId);
  let width = 0;
  const interval = setInterval(() => {
    if (width >= targetPercentage) {
      clearInterval(interval);
    } else {
      width++;
      progressBar.style.width = width + '%';
      percentageText.textContent = width + '%';
      percentageText.style.left = width + '%';
    }
  }, 20);
}

function initializeProgressBars() {
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgressBar('c-bar', 'c-percentage', 60);
        animateProgressBar('docker-bar', 'docker-percentage', 50);
        animateProgressBar('css-bar', 'css-percentage', 50);
        animateProgressBar('flutter-bar', 'flutter-percentage', 30);
        animateProgressBar('python-bar', 'python-percentage', 30);
        animateProgressBar('js-bar', 'js-percentage', 20);
        observer.disconnect();
      }
    });
  }, options);

  const target = document.querySelector('.tech-stack');
  observer.observe(target);
}
