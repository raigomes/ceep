import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => (
          <section>
            <h1>{categoria}</h1>
            <li>
              <CardNota />
            </li>
          </section>
        ))}
      </ul>
    );
  }
}

export default ListaDeNotas;
