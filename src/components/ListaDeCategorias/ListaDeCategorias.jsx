import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

import "./estilo.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if(e.key == "Enter") {
      const novaCategoria = e.target.value
      this.props.adicionarCategoria(novaCategoria)
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
