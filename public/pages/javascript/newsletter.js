function initializeNewsletterForm() {
  document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('구독이 완료되었습니다: ' + email);
    // 여기서 이메일을 서버로 전송하는 로직을 추가할 수 있습니다.
  });
}
function shareToFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, '_blank');
}

function shareToTwitter() {
  window.open('https://twitter.com/intent/tweet?url=' + document.URL, '_blank');
}
