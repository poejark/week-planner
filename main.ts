const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog element not found.');

const $addButton = document.querySelector('.new-event');
if (!$addButton) throw new Error('add new entry button not found.');
$addButton.addEventListener('click', () => {
  $dialog.showModal();
});

const $cancelModal = document.querySelector('.cancel-modal');
if (!$cancelModal) throw new Error('cancel button not found within modal.');

$cancelModal.addEventListener('click', () => {
  $dialog.close();
});

const $confirmModal = document.querySelector('.confirm-modal');

$confirmModal.addEventListener('click', (event: Event) => {
  event.preventDefault();
  console.log('inside the confirm Modal.');
});

// const $photoInput = document.querySelector('input[name="photo"]');
