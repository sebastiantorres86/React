import React, { Component } from "react";

class Hola extends Component {
  render() {
    return (
      <div>
        {/* En lugar de poner un nombre fijo, utilizamos un nombre que nos va a llegar a traves de un atributo nombre*/}
        <h1>¡Hola {this.props.nombre}!</h1>
      </div>
    );
  }
}

export default Hola;
