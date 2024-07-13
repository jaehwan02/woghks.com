function initializeCursor() {
  const cursor = document.querySelector('.cursor');
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateCursor(cursor, mouseX, mouseY);
    cursor.style.display = 'block';
  });

  window.addEventListener('scroll', () => {
    updateCursor(cursor, mouseX, mouseY);
  });

  window.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });

  window.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
  });

  document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
      cursor.style.display = 'none';
    }
  });

  document.addEventListener('mouseover', (e) => {
    if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
      cursor.style.display = 'block';
    }
  });
}

function updateCursor(cursor, mouseX, mouseY) {
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  cursor.style.left = mouseX + scrollX - 15 + 'px';
  cursor.style.top = mouseY + scrollY - 15 + 'px';
}
