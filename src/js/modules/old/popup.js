export function popup() {
  let btnOpen = document.getElementById("btn-open");
  let overlay = document.getElementById("overlay");
  let wrapperModal = document.getElementById("wrapper-modal");
  let btnClose = document.getElementById("btn-close");
  let header = document.querySelector(".header");
  // let popupContent = document.querySelector(".popup__content");
  let popupContentVideo = document.querySelector(".popup__content video");
  let body = document.body;
  let modal = document.querySelectorAll(".modal");
  let modalWindow = document.querySelector("#modal-window");

  
  function openModal() {
    wrapperModal.classList.add("active");
    body.classList.add("lock");
    header.classList.add("lock");
    popupContentVideo.src = '../../videos/products-videos.mp4';
  }

  btnOpen.addEventListener("click", openModal);

  function closeModal() {
    console.log('closeModal')
    wrapperModal.classList.remove("active");
    body.classList.remove("lock");
    header.classList.remove("lock");
    popupContentVideo.src = '../../img/products/products-preload.png';
  }

  overlay.addEventListener("click", closeModal);
  btnClose.addEventListener("click", closeModal);
  modalWindow.addEventListener("click", (event) => event.stopPropagation())
}
