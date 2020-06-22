// El import es una función nativa de JS que me permite importar módulos o librerías
import React, { Component } from "react";
import Hola from "./Hola";

// class y el nombre del componente (en mayúsculas)
class App extends Component {
  render() {
    const nombre = "Ada Lovelace";

    return (
      <div>
        <Hola nombre={nombre} />
      </div>
    );
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos después del 'class'
export default App;
