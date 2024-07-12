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

document.addEventListener('DOMContentLoaded', () => {
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
});

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  alert('구독이 완료되었습니다: ' + email);
  // 여기서 이메일을 서버로 전송하는 로직을 추가할 수 있습니다.
});

function shareToFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, '_blank');
}

function shareToTwitter() {
  window.open('https://twitter.com/intent/tweet?url=' + document.URL, '_blank');
}
