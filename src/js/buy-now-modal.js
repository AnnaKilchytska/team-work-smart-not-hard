//script to open buy-now modal window (button "buy now" in header)
(() => {
  const refs = {
    openModalBtn: document.querySelector('[js-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[js-buy-now-modal-close]'),
    modal: document.querySelector('[js-buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
