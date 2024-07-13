function initializeNewsletterForm() {
  document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!email) {
      showToast('이메일을 입력해주세요.', true);
    } else if (!validateEmail(email)) {
      showToast('유효하지 않은 이메일입니다. 다시 입력해주세요.', true);
    } else {
      showToast('구독이 완료되었습니다: ' + email);
      // 여기서 이메일을 서버로 전송하는 로직을 추가할 수 있습니다.
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show';
  if (isError) {
    toast.style.backgroundColor = '#e74c3c';
  } else {
    toast.style.backgroundColor = '#27ae60';
  }
  setTimeout(() => {
    toast.className = 'toast hide';
  }, 3000); // 3초 후에 토스트 메시지 숨기기
}

function shareToFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, '_blank');
}

function shareToTwitter() {
  window.open('https://twitter.com/intent/tweet?url=' + document.URL, '_blank');
}

// 페이지가 로드될 때 폼 초기화 함수 호출
window.onload = initializeNewsletterForm;
