(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-products-second-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-second-close]'),
    modal: document.querySelector('[data-modal-products-second]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
