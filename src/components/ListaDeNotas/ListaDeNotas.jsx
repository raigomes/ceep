import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => (
          <li key={index} className="lista-notas_item">
            <CardNota
              apagarNota={this.props.apagarNota} 
              titulo={nota.titulo}
              texto={nota.texto}
              categoria={nota.categoria}
              indice={index}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ListaDeNotas;
