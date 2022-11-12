//script to open buy-now modal window (button "buy now" in header)
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
//     closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
//     modal: document.querySelector('[data-buy-now-modal]'),
//     // body: document.querySelector('body'),
//   };

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     // refs.body.classList.toggle('body--modal');
//   }

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
    modal: document.querySelector('[data-buy-now-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('body--modal');
  }
})();
