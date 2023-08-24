window.addEventListener('DOMContentLoaded', () => {
  function bindModal(trigger, modal, close, btnTab, modalChange) {
    modal = document.querySelector(modal);
    btn = document.querySelector(trigger);
    btnClose = document.querySelector(close);
    btnTab = document.querySelector(btnTab);
    modalChange = document.querySelector(modalChange);

    btnTab.addEventListener('click', () => {
      modal.classList.remove('modal-open');
      modalChange.classList.add('modal-open');
    });

    btn.addEventListener('click', () => {
      modal.classList.add('modal-open');
    });

    btnClose.addEventListener('click', () => {
      modal.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('modal-open');
      }
    });
  }

  bindModal('.js-open-help', '.modal-h', '.close-h', '.js-change-comp', '.modal-c');
  bindModal('.js-open-comp', '.modal-c', '.close-c', '.js-change-help', '.modal-h');
});
