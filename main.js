var $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog element not found.');
var $addButton = document.querySelector('.new-event');
if (!$addButton) throw new Error('add new entry button not found.');
$addButton.addEventListener('click', function () {
  $dialog.showModal();
});
var $cancelModal = document.querySelector('.cancel-modal');
if (!$cancelModal) throw new Error('cancel button not found within modal.');
$cancelModal.addEventListener('click', function () {
  $dialog.close();
});
var $confirmModal = document.querySelector('.confirm-modal');
$confirmModal.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('inside the confirm Modal.');
});
// const $photoInput = document.querySelector('input[name="photo"]');
