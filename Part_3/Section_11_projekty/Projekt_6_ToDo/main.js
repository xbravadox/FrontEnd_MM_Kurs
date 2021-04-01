let $todoInput;   // miejsce wpisywania nowego zadania
let $alertInfo;   // informacja o braku zadań
let $addBtn;      // button dodający nowe zadania
let $ulList;      // lista zadań
let $newTask;     // nowe zadanie
let $popup;       // popup
let $popupInfo;   // alert w popupie
let $editedTodo;  // edytowane zadanie
let $popupInput;  // miejsc wpisywania zadania w popupie
let $addPopupBtn; // zatwierdzanie zmian w popupie
let $closeTodoBtn;// button zamykający popup

const main = () => {
   prepareDomElements();
   prepareDomEvents();
};

// pobieranie elementów
const prepareDomElements = () => {
   $todoInput = document.querySelector('.todoInput');
   $alertInfo = document.querySelector('.alertInfo');
   $addBtn = document.querySelector('.addBtn');
   $ulList = document.querySelector('.todoList ul');
   $popup = document.querySelector('.popup');
   $popupInfo = document.querySelector('.popupInfo');
   $popupInput = document.querySelector('.popupInput');
   $addPopupBtn = document.querySelector('.accept');
   $closeTodoBtn = document.querySelector('.cancel');
};

// tworzenie nowego zadania
const addNewTask = () => {
   if ($todoInput.value !== "") {
      $newTask = document.createElement('li');
      $newTask.innerText = $todoInput.value;
      $ulList.appendChild($newTask);
      $todoInput.value = '';
      $alertInfo.innerText = '';
      createToolsArea();
   } else {
      $alertInfo.innerText = 'Wpisz treść zadania!';
   };
};

// tworzenie diva z narzędziami
const createToolsArea = () => {
   const toolsPanel = document.createElement('div');
   toolsPanel.classList.add('tools');
   $newTask.appendChild(toolsPanel);
   ;
   const completeBtn = document.createElement('button')
   completeBtn.innerHTML = '<i class="fas fa-check"></i>';
   completeBtn.classList.add('complete');

   const editBtn = document.createElement('button');
   editBtn.innerText = 'EDIT';
   editBtn.classList.add('edit');

   const deleteBtn = document.createElement('button');
   deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
   deleteBtn.classList.add('delete');

   toolsPanel.appendChild(completeBtn);
   toolsPanel.appendChild(editBtn);
   toolsPanel.appendChild(deleteBtn);
};

// nasłuchiwanie zdarzeń
const prepareDomEvents = () => {
   $addBtn.addEventListener('click', addNewTask);
   $ulList.addEventListener('click', checkClick)
   $closeTodoBtn.addEventListener('click', closePopup)
};

// obsługa kliknięcia w div tools
const checkClick = (e) => {
   if (e.target.closest('button').classList.contains('complete')) {
      e.target.closest('li').classList.toggle('completed');
      e.target.closest('button').classList.toggle('completed')
   } else if (e.target.closest('button').className === 'edit') {
      editTask();
   } else if (e.target.closest('button').className === 'delete') {
      console.log(e.target);
   }
};

// edycja zadania w popupie
const editTask = () => {
   $popup.style.display = 'flex'
};

// zamykanie popupu
const closePopup = () =>{
   $popup.style.display = 'none'
}


document.addEventListener('DOMContentLoaded', main);