const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('문의가 전송되었습니다! 이메일로 빠르게 답변드리겠습니다.');
    form.reset();
  });
}
