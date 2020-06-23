// El import es una función nativa de JS qie me permite importar módulos o librerías
import React, { Component } from "react";

// class y el nombre del componente (en mayúsculas)
class App extends Component {
  // Creamos la función constructor con el parámetro props
  constructor(props) {
    // Llamamos a la función super pasándole las props
    super(props);

    // Creo el estado con una propiedad isToggleOn para saber si tengo que mostrar on u off en el texto del botón
    this.state = {
      isToggleOn: true,
    };

    // Es importante agregar esta línea cuando pasamos funciones por atributos
    // Esto es para que si dentro de la función utilizamos la palabra reservada 'this', funcione bien y sin problemas
    // Si nos olvidamos esta línea, 'this' dentro de la función sería 'undefined'
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Cambio el estado, asignándole el contrario de lo que tenía antes
    // Si isToggleOn es true, pasa a false
    // Si isToggleOn es false, pasa a true
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  }

  render() {
    return (
      <div>
        {/* Para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        {/* En este caso, depende si la propiedad isToggleOn es true o false, muestro el texto ON u OFF */}
        <botton onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </botton>
      </div>
    );
  }
}

// export del componente que acabamos de crear
// Tiene que ser el mismo nombre que el que definimos después del 'class'
export default App;
