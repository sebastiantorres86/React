import React, { Component } from "react";
// Acá estamos "importando" el componente "Hola"
import Hola from "./Hola";

class App extends Component {
  render() {
    return (
      <div>
        {/* Para usar el componente, podemos usarlo como cualquier etiqueta de HTML, recordando que el nombre comienza con mayúsculas */}
        <Hola />
      </div>
    );
  }
}

export default App;
