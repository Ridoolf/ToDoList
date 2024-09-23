# To-Do List en React

Este es un proyecto de una aplicación To-Do List creada con **React**. La aplicación permite agregar, marcar como completadas y eliminar tareas, además de borrar todas las tareas de la lista. El estado de las tareas se almacena en el **LocalStorage**, lo que permite persistir las tareas incluso al recargar la página.

## Funcionalidades

- **Agregar tarea**: El usuario puede añadir una nueva tarea a la lista.
- **Marcar como completada**: El usuario puede marcar una tarea como completada, lo que cambia su estilo visual.
- **Eliminar tarea**: El usuario puede eliminar una tarea individual de la lista.
- **Eliminar todas las tareas**: El usuario puede eliminar todas las tareas con el botón "Eliminar todo".
- **Persistencia de datos**: Las tareas se guardan en el LocalStorage, por lo que no se pierden al recargar la página.

## Tecnologías utilizadas

- [React](https://reactjs.org/) - Librería de JavaScript para construir interfaces de usuario.
- [Material UI Icons](https://mui.com/material-ui/material-icons/) - Conjunto de iconos SVG que facilitan la creación de interfaces con iconografía.
- HTML5 y CSS3 para el diseño básico de la interfaz de usuario.

## Estructura del Proyecto

El proyecto sigue una estructura simple de carpetas para facilitar el desarrollo y la escalabilidad.

/src │ ├── /common │ ├── /btnClear │ │ ├── BtnClear.js │ │ └── BtnClear.css │ ├── /taskCard │ │ ├── TaskCard.js │ │ └── TaskCard.css │ ├── App.js ├── index.js ├── ToDoList.js └── ToDoList.css

- `App.js`: Componente principal que renderiza la aplicación.
- `ToDoList.js`: Componente que maneja la lógica principal de la lista de tareas.
- `TaskCard.js`: Componente que renderiza una tarea individual con opciones para marcar como completada y eliminar.
- `BtnClear.js`: Componente para eliminar todas las tareas.
- `LocalStorage`: Persistencia de datos de las tareas.

## Instalación y uso

### Requisitos previos

Asegúrate de tener instalado **Node.js** y **npm** (Node Package Manager) en tu sistema.

### Pasos para la instalación

1. Clona este repositorio:

```bash
git clone https://github.com/Ridoolf/ToDoList

```

2. Navega al directorio del proyecto:

```bash
cd to-do-list-react

```

3. Instala las dependencias necesarias:

```bash
npm install

```

4. Inicia la aplicación en modo de desarrollo:

```bash
npm run dev

```
