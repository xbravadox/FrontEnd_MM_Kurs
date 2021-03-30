let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;

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
};

// tworzenie nowego zadania
const addNewTask = () => {
   if ($todoInput.value !== "") {
      $newTask = document.createElement('li');
      $newTask.innerText = $todoInput.value;
      $ulList.appendChild($newTask);
      $todoInput.value = '';
      $alertInfo.innerText = '';
   } else {
      $alertInfo.innerText = 'Wpisz treść zadania!';
   };
};

// nasłuchiwanie zdarzeń
const prepareDomEvents = () => {
   $addBtn.addEventListener('click', addNewTask);
};


document.addEventListener('DOMContentLoaded', main);