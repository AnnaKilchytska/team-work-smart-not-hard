//script to open buy-now modal window (button "buy now" in header)
(() => {
  const refs = {
    openModalBtn: document.querySelector('[js-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[js-buy-now-modal-close]'),
    modal: document.querySelector('[js-buy-now-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('body--modal');
  }
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-buy-now-open]'),
//     closeModalBtn: document.querySelector('[data-modal-buy-now-close]'),
//     modal: document.querySelector('[data-modal-buy-now]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
