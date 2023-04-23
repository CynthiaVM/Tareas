const formulario = document.querySelector('form');
const tareaInput = document.querySelector('#tarea');
const guardarBtn = document.querySelector('#guardar');

guardarBtn.addEventListener('click', () => {
	const tarea = tareaInput.value;
	let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
	tareas.push(tarea);
	localStorage.setItem('tareas', JSON.stringify(tareas));
	alert('Tarea guardada en LocalStorage');
});

window.addEventListener('load', () => {
	let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
	const listaTareas = document.querySelector('#listaTareas');
	tareas.forEach((tarea) => {
		const li = document.createElement('li');
		li.textContent = tarea;
		listaTareas.appendChild(li);
	});
});