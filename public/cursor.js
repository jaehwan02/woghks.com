const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  updateCursor();
  cursor.style.display = 'block'; // 마우스가 움직일 때 원을 표시
});

window.addEventListener('scroll', () => {
  updateCursor();
});

window.addEventListener('mouseleave', () => {
  cursor.style.display = 'none'; // 마우스가 화면 밖으로 나갈 때 원 숨기기
});

window.addEventListener('mouseenter', () => {
  cursor.style.display = 'block'; // 마우스가 화면 안으로 들어올 때 원 표시
});

function updateCursor() {
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  cursor.style.left = mouseX + scrollX - 15 + 'px'; // 마우스 좌표와 스크롤 위치 반영
  cursor.style.top = mouseY + scrollY - 15 + 'px'; // 마우스 좌표와 스크롤 위치 반영
}

document.addEventListener('mouseout', (e) => {
  if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
    cursor.style.display = 'none'; // 마우스가 화면 밖으로 나갈 때 원 숨기기
  }
});

document.addEventListener('mouseover', (e) => {
  if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
    cursor.style.display = 'block'; // 마우스가 화면 안으로 들어올 때 원 표시
  }
});
