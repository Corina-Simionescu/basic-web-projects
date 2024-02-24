const btnOpenModal = document.querySelector('.btn-open-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn-close-modal');

const openModal = function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function ()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);