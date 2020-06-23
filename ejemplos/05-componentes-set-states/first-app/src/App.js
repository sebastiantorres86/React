// El import es una función nativa de JS que me permite importar módulos o librerías
import React, { Component } from "react";

// class y el nombre del componente (en mayúsculas)
class App extends Component {
  // Creamos la función constructor con el parámetro props
  constructor(props) {
    // Llamamos a la función super con el parámetro props
    super(props);

    // Creamos el estado del componente
    // El estado es simplemente un objeto de JS que va a guardar datos para operar o mostrar en el render
    // Con el 'this' nos referimos estrictamente al componente que estamos creando
    // Entonces a nuestro componente App le creamos un estado
    // La propiedad SIEMPRE tiene que llamarse state, y el objeto puede tener cualquier cantidad y tipo de propiedades
    this.state = {
      nombre: "Ada Lovelace",
    };

    // A los 5 segundos ejecutamos una función que edita la propiedad 'nombre' del state
    // Pasamos la función como una arrow function para que el 'this' que utilizamos adentro siga funcionando bien
    // Después de ejecutarse la función setState, se vuelve a ejecutar la función render() que tenemos abajo y modifica lo que vemos en el HTML
    setTimeout(() => {
      this.setState({
        nombre: "Grace Hopper",
      });
    }, 5000);
  }
  render() {
    // bind
    return (
      <div>
        {/* Para mostrar una propiedad del estado, siempre accedemos con 'this.state' y el nombre de la propiedad que queremos ver */}
        <h1>¡Hola. {this.state.nombre}!</h1>
      </div>
    );
  }
}

// export del componente que acabamos de crear
// Tiene que ser el mismo nombre que el que definimos después del 'class'
export default App;
