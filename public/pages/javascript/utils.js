let startX;
let startY;

function adjustLight() {
  const moon = document.getElementById('mMoon');
  const light = document.getElementById('light');
  const headerMoon = document.querySelector('#left-nav > div:nth-child(1) > img');

  if (!moon || !light || !headerMoon) {
    console.error('필수 DOM 요소를 찾을 수 없습니다.');
    return;
  }

  const headerMoonRect = headerMoon.getBoundingClientRect();
  const lightRect = light.getBoundingClientRect();
  const moonRect = moon.getBoundingClientRect();

  if (!light.style.top) {
    startX = headerMoonRect.left;
    startY = headerMoonRect.top - lightRect.height / 2 + headerMoonRect.height * 3;

    light.style.top = `${startY}px`;
    light.style.left = `${startX}px`;
  }

  light.style.transform = '';

  const deltaX = moonRect.left + moonRect.width * 0.3 - startX;
  const deltaY = moonRect.top - startY;

  const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 1.3;
  light.style.transform = `rotate(${angle}deg)`;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const scale = distance / 1023;
  light.style.transform += ` scale(${scale})`;

  console.log(`Angle: ${angle} degrees, Scale: ${scale}`);
}

function initializeScroll() {
  if (window.location.hash) {
    setTimeout(() => {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // 페이지 로드 후 잠시 대기
  }
}

window.addEventListener('load', initializeScroll);
window.addEventListener('hashchange', () => {
  const element = document.querySelector(window.location.hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
});
