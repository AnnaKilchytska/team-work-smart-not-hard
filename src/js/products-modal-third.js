(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-products-third-open]'),
    closeModalBtn: document.querySelector('[data-modal-products-third-close]'),
    modal: document.querySelector('[data-modal-products-third]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
