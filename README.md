# To-Do List en React

Este es un proyecto de una aplicación To-Do List creada con **React**. La aplicación permite agregar, marcar como completadas y eliminar tareas, además de borrar todas las tareas de la lista. El estado de las tareas se almacena en el **LocalStorage**, lo que permite persistir las tareas incluso al recargar la página.

## Funcionalidades

- **Agregar tarea**: El usuario puede añadir una nueva tarea a la lista.
- **Marcar como completada**: El usuario puede marcar una tarea como completada, lo que cambia su estilo visual.
- **Eliminar tarea**: El usuario puede eliminar una tarea individual de la lista.
- **Eliminar todas las tareas**: El usuario puede eliminar todas las tareas con el botón "Eliminar todo".
- **Persistencia de datos**: Las tareas se guardan en el LocalStorage, por lo que no se pierden al recargar la página.

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- HTML y CSS para el diseño básico de la interfaz de usuario.

## Estructura del Proyecto

```
/src
├── /components
│   ├── /common
|   |   ├── /btnClear
|   |   |   ├── BtnClear.jsx
|   |   |   └── BtnClear.css
|   |   └── /taskCard
|   |       ├── TaskCard.jsx
|   |       └── TaskCard.css
│   ├── /layout
|   |   ├── /footer
|   |   |   └── Footer.jsx
|   |   ├── /navbar
|   |   |   ├── Navbar.jsx
|   |   |   └── Navbar.css
|   |   ├── Layout.jsx
|   |   └── Layout.css
│   └── /pages
|       ├── ToDoList.jsx
|       └── ToDoList.css
├── App.jsx
├── index.css
└── main.jsx
```

-`App.jsx`: Componente principal que organiza y renderiza la aplicación. Se encarga de gestionar la navegación entre diferentes páginas o secciones si es necesario.

-`ToDoList.jsx`: Componente que maneja la lógica principal de la lista de tareas. Se encarga de añadir, eliminar y marcar tareas como completadas, gestionando el estado global de la lista.

-`TaskCard.jsx`: Componente que representa una tarea individual. Muestra los detalles de la tarea y proporciona opciones para marcarla como completada o eliminarla.

-`BtnClear.jsx`: Componente que permite eliminar todas las tareas de la lista con un solo clic. Generalmente se muestra solo cuando hay mas de 2 tareas por eliminar.

-`Layout.jsx`: Componente encargado de organizar el diseño principal de la aplicación. Integra el footery y el navbar al main de la pagina

-`Navbar.jsx`: Componente permitiendo la navegación entre las diferentes páginas o secciones. En este caso solo posee un titulo

-`Footer.jsx`: Componente que renderiza el pie de página.

-`LocalStorage`: Sistema de persistencia utilizado para guardar las tareas localmente en el navegador. Permite que las tareas se mantengan incluso después de cerrar la aplicación o recargar la página.

-`index.css`: Archivo principal de estilos que define las reglas generales para toda la aplicación.

-`main.jsx`: Archivo que inicializa y monta la aplicación en el DOM.

Esta organización está diseñada para facilitar la escalabilidad del proyecto, permitiendo añadir o modificar componentes de forma ordenada

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
cd ToDoList

```

3. Instala las dependencias necesarias:

```bash
npm install

```

4. Inicia la aplicación en modo de desarrollo:

```bash
npm run dev

```
