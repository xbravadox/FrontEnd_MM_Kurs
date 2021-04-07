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
let $idNumber = 0;// id zadania
let $allTasks;

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
	$allTasks = $ulList.getElementsByTagName('li')
};

// tworzenie nowego zadania
const addNewTask = () => {
	if ($todoInput.value !== "") {
		$idNumber++;
		$newTask = document.createElement('li');
		$newTask.innerText = $todoInput.value;
		$newTask.setAttribute('id', `todo-${$idNumber}`);
		$ulList.appendChild($newTask);
		$todoInput.value = '';
		$alertInfo.innerText = '';
		createToolsArea();
	} else {
		$alertInfo.innerText = 'Wpisz treść zadania!';
	};
};

const enterCheck = (e)=>{
if(e.keyCode === 13){
	addNewTask();
};
};

// tworzenie diva z narzędziami
const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools');
	$newTask.appendChild(toolsPanel);

	const completeBtn = document.createElement('button');
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
	$ulList.addEventListener('click', checkClick);
	$closeTodoBtn.addEventListener('click', closePopup);
	$addPopupBtn.addEventListener('click', changeTodo);
	$todoInput.addEventListener('keyup', enterCheck);
};

// obsługa kliknięcia w div tools
const checkClick = (e) => {
	if (e.target.closest('button').classList.contains('complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.closest('button').classList.toggle('completed');
	} else if (e.target.closest('button').className === 'edit') {
		editTask(e);
	} else if (e.target.closest('button').className === 'delete') {
		deleteTask(e);
	};
};

// edycja zadania w popupie
const editTask = (e) => {
	const oldTodo = e.target.closest('li').id;
	$editedTodo = document.getElementById(oldTodo);
	$popupInput.value = $editedTodo.firstChild.textContent;
	$popup.style.display = 'flex';
};

// zmiana treści zadania
const changeTodo = () => {
	if ($popupInput.value !== '') {
		$editedTodo.firstChild.textContent = $popupInput.value;
		$popup.style.display = 'none';
		$popupInfo.innerText = '';
	} else {
		$popupInfo.innerText = 'Wpisz treść zadania!';
	};
};

// zamykanie popupa
const closePopup = () => {
	$popupInfo.innerText = '';
	$popup.style.display = 'none';
};

// usuwanie zadania
const deleteTask = (e) => {
	const deleteTodo = e.target.closest('li');
	deleteTodo.remove();

	if ($allTasks.length === 0) {
		$alertInfo.innerText = 'Brak zadań na liście.';
	}else{
		$alertInfo.innerText = '';
	};
};

document.addEventListener('DOMContentLoaded', main);