var formLen = 10;
var entries = [];
if (!formLen) throw Error('fake error');
if (!entries) throw Error('fake error');
var $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog element not found.');
var $form = document.querySelector('form');
if (!$form) throw new Error('no form found');
var $addButton = document.querySelector('.new-event');
if (!$addButton) throw new Error('add new entry button not found.');
$addButton.addEventListener('click', function () {
  $dialog.showModal();
});
var $cancelModal = document.querySelector('.cancel-modal');
if (!$cancelModal) throw new Error('cancel button not found within modal.');
$cancelModal.addEventListener('click', function (event) {
  event.preventDefault();
  $dialog.close();
  $form.reset();
});
var $confirmModal = document.querySelector('.confirm-modal');
$confirmModal.addEventListener('click', function (event) {
  event.preventDefault();
  var $hoursInput = document.getElementById('hours');
  if (!$hoursInput) throw new Error('hours input not found');
  var $week2Input = document.getElementById('week2');
  if (!$week2Input) throw new Error('week2 input not found.');
  var $eventInfoInput = document.getElementById('event');
  if (!$eventInfoInput) throw new Error('event info input not found');
  // console.log($hoursInput.value, $week2Input.value, $eventInfoInput.value);
  var input = {
    hour: $hoursInput.value,
    day: $week2Input.value,
    event: $eventInfoInput.value,
  };
  // renderEntry(input);
  entries.push(input);
  renderForm();
  $dialog.close();
  $form.reset();
});
function renderEntry(entry) {
  // console.log(entry);
  var $tr = document.createElement('tr');
  if (!$tr) throw new Error('tr does not exist');
  $tr.setAttribute('class', entry.day);
  var $tdTime = document.createElement('td');
  if (!$tdTime) throw new Error('tdTime does not exist');
  $tdTime.innerText = entry.hour;
  var $tdEvent = document.createElement('td');
  if (!$tdEvent) throw new Error('tdEvent does not exist');
  $tdEvent.innerText = entry.event;
  var $tdActions = document.createElement('td');
  if (!$tdActions) throw new Error('td Actions does not exist');
  $tdActions.classList.add('table-buttons');
  var $editButton = document.createElement('button');
  if (!$editButton) throw new Error('edit button not found');
  $editButton.classList.add('edit-actions');
  $editButton.innerText = 'Edit';
  var $deleteButton = document.createElement('button');
  if (!$deleteButton) throw new Error('delete button not found');
  $deleteButton.classList.add('delete-actions');
  $deleteButton.innerText = 'Delete';
  $tdActions.appendChild($editButton);
  $tdActions.appendChild($deleteButton);
  $tr.appendChild($tdTime);
  $tr.appendChild($tdEvent);
  $tr.appendChild($tdActions);
  // console.log($tr);
  return $tr;
}
function renderForm() {
  var i = 0;
  for (var j = 1; j <= 10; j++) {
    if (i < entries.length) {
      var $tr = document.getElementById('row-'.concat(j));
      if (!$tr) throw new Error('tr not found.');
      // console.log($tr);
      // console.log(renderEntry(entries[i]));
      $tr.replaceWith(renderEntry(entries[i]));
      $tr.setAttribute('id', 'row-'.concat(j));
      i++;
    }
    // for (let i = 0; i < entries.length; i++) {
    //   renderEntry(entries[i]);
    // }
  }
}
// const $photoInput = document.querySelector('input[name="photo"]');
