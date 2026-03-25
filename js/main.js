document.addEventListener('DOMContentLoaded', () => {
  const toast = document.querySelector('.toast');
  const toastTriggers = document.querySelectorAll('[data-toast-trigger]');
  let toastTimer;

  if (!toast || toastTriggers.length === 0) {
    return;
  }

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2200);
  };

  toastTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      showToast('현재는 데모 화면이라 실제 상담 채널로 연결되진 않아요. 운영 단계에서는 상담 폼이나 문의 채널로 바로 이어서 사용할 수 있어요.');
    });
  });
});
