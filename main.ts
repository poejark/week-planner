const formLen: number = 10;
interface Entry {
  hour: string;
  day: string;
  event: string;
}
const entries: Entry[] = [];

if (!formLen) throw Error('fake error');
if (!entries) throw Error('fake error');

const $dialog = document.querySelector('dialog');
if (!$dialog) throw new Error('dialog element not found.');

const $form = document.querySelector('form');
if (!$form) throw new Error('no form found');

const $addButton = document.querySelector('.new-event');
if (!$addButton) throw new Error('add new entry button not found.');
$addButton.addEventListener('click', () => {
  $dialog.showModal();
});

const $cancelModal = document.querySelector('.cancel-modal');
if (!$cancelModal) throw new Error('cancel button not found within modal.');

$cancelModal.addEventListener('click', (event: Event) => {
  event.preventDefault();
  $dialog.close();
  $form.reset();
});

const $confirmModal = document.querySelector('.confirm-modal');

$confirmModal.addEventListener('click', (event: Event) => {
  event.preventDefault();
  const $hoursInput = document.getElementById('hours') as HTMLSelectElement;
  if (!$hoursInput) throw new Error('hours input not found');
  const $week2Input = document.getElementById('week2') as HTMLSelectElement;
  if (!$week2Input) throw new Error('week2 input not found.');
  const $eventInfoInput = document.getElementById(
    'event',
  ) as HTMLTextAreaElement;
  if (!$eventInfoInput) throw new Error('event info input not found');
  // console.log($hoursInput.value, $week2Input.value, $eventInfoInput.value);
  const input: Entry = {
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

function renderEntry(entry: Entry): HTMLElement {
  // console.log(entry);
  const $tr = document.createElement('tr');
  if (!$tr) throw new Error('tr does not exist');
  $tr.setAttribute('class', entry.day);
  const $tdTime = document.createElement('td');
  if (!$tdTime) throw new Error('tdTime does not exist');
  $tdTime.innerText = entry.hour;
  const $tdEvent = document.createElement('td');
  if (!$tdEvent) throw new Error('tdEvent does not exist');
  $tdEvent.innerText = entry.event;
  const $tdActions = document.createElement('td');
  if (!$tdActions) throw new Error('td Actions does not exist');
  $tdActions.classList.add('table-buttons');

  const $editButton = document.createElement('button');
  if (!$editButton) throw new Error('edit button not found');
  $editButton.classList.add('edit-actions');
  $editButton.innerText = 'Edit';

  const $deleteButton = document.createElement('button');
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

function renderForm(): void {
  let i = 0;
  for (let j = 1; j <= 10; j++) {
    if (i < entries.length) {
      const $tr = document.getElementById(`row-${j}`);
      if (!$tr) throw new Error('tr not found.');
      // console.log($tr);
      // console.log(renderEntry(entries[i]));
      $tr.replaceWith(renderEntry(entries[i]));
      $tr.setAttribute('id', `row-${j}`);
      i++;
    }
    // for (let i = 0; i < entries.length; i++) {
    //   renderEntry(entries[i]);
    // }
  }
}
// const $photoInput = document.querySelector('input[name="photo"]');
