import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const formulario = document.querySelector('form');
const tareaInput = document.querySelector('#tarea');
const guardarBtn = document.querySelector('#guardar');
const borrarBtn = document.querySelector('#borrar');
const listaTareas = document.querySelector('#listaTareas');

// Guardar Tarea
guardarBtn.addEventListener('click', (event) => {
	event.preventDefault();
	const tarea = tareaInput.value;
	let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

	if (tarea === '') {
		return alert('La tarea no puede estar vacia');
	}

	tareas.push(tarea);
	localStorage.setItem('tareas', JSON.stringify(tareas));
	cargarTareas();
	formulario.reset();
	Toastify({
		text: `La tarea con nombre ${tarea} se cargo correctamente.`,
		className: 'info',
	}).showToast();
});

// Funcion para cargar tareas
const cargarTareas = () => {
	// Mostrar toastify "TAREAS CARGADAS"
	listaTareas.innerHTML = '';
	let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
	tareas.forEach((tarea) => {
		const li = document.createElement('li');
		li.textContent = tarea;
		listaTareas.appendChild(li);
	});
};

// borrar tareas 
borrarBtn.addEventListener('click', () => {
	localStorage.removeItem('tareas');
});

// detectar cuando la pestaña recargue y volver a cargar las tareas
window.addEventListener('', () => {
	cargarTareas();
});