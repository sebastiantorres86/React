# React

## ¿Qué es React?

React es una librería (no un framework) que facilita el desarrollo de intarfaces de usuario. Permite crear interfaces complejas utilizando piezas chicas de código, reutilizables, que llamaremos `componentes`.

## Creación de un proyecto con "create-react-app"

Cuando vamos a comenzar un nuevo proyecto con React, generalmente tenemos que lidiar con una gran cantidad de herramientas como gestores de paquetes, transpiladores, etc. Por esto, el equipo de facebook creo [Create React App](https://github.com/facebook/create-react-app), una herramienta que realizará la configuración necesaria y nos permitirá comenzar a desarrollar con React de una forma rápida y sencilla.

- Lo primero que tenemos que hacer es instalar la herramienta con NPM

```
npm i -g create-react-app
```

- Una vez instalada, dentro de la carpeta donde queremos crear un proyecto nuevo, podemos ejecutar:

```
create-react-app first-app
```
- Este último comando creará una carpeta `first-app` (esta tarea puede demorar unos cuantos minutos), y dentro todo el contenido necesario para ejecutar nuestra primer app con React.

- Una vez que finalizó el proceso anterior, podemos ingresar a la carpeta

```
cd first.app
```

- Dentro de la carpeta, vamos a tener el siguiente contenido (que puede variar un poco dependiendo de la versión de `create-react-app`):

```
first-app/
    .gitignore
    package-lock.json
    package.json
    README.md
    node_modules/
    public/
        favicon.ico
        index.html
        manifest.json
    src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        serviceWorker.js
```
  - node_modules: es la carpeta donde se guardan las dependencias del proyecto
  - public: es la carpeta raíz del proyecto donde se encuentra el index.html
  - src: es el directorio donde vamos a colocar los archivos de nuestros componentes

- Para ejecutar la app de ejemplo que configura por defecto `create-react-app`, solo tenemos que ejecutar `npm start`. Una vez que termine, vamos a poder acceder desde un navegador a la dirección `localhost:3000`.

### Componente principal

- El punto de entrada a la aplicación es el archivo `scr/index.js`. Acá se inicializa el componente principal App.js, a través del método ReactDOM.Render. Dicho método recibe como primer parámetro el componente a renderizar y como segundo el elemento del DOM donde el componente va ser renderizado:

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// recibe como primer parametro el componente App,  como segundo en que elemento del DOM quiero que se vea
ReactDOM.render(<App />, document.getElementById('root));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- Y el componente App, nuestro componente principal y donde vamos a comenzar el desarrollo, tiene el siguiente código:

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
```

- Para seguir con la teoría, vamos a limpiar un poco el código, dejándolo lo más limpio posible:

```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>¡Hola Mundo!</h1>
      </div>
    );
  }
}

exports default App;
```

- *El código del ejemplo desarrollado hasta ahora se encuentra [aquí](https://github.com/sebastiantorres86/React/blob/master/ejemplos/01-first-app/first-app/src/App.js)*