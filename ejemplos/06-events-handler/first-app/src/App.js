// El import es una función nativa de JS que me permite importar módulos o librerías
import React, { Component } from "react";

// class y el nombre del componente (en mayúsculas)
class App extends Component {
  // Creamos la función constructor con el parámetro props
  constructor(props) {
    // Llamamos a la función super pasándole las props
    super(props);

    // Es importante agregar esta línea cuando pasamos funciones por atributos
    // Esto es para que si dentro de la función utilizamos la palabra reservada 'this', funcione bine y sin problema
    // Si nos olvidamos esta línea, 'this' dentro de la función sería 'undefined'
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('¡Hola Mundo!')
  }

  render() {
    // bind
    return(
      <div>
        {/* Para mostrar una propiedad del estado, sismpre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        <button onClick={this.handleClick}>¡Saludar!</button>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// Tiene que ser el mismo nombre que el que definimos después del 'class'
export default App;
