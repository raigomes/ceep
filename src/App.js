import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

import "./assets/index.css";
import "./assets/App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notas:[]
    }
  }

  criaNota(titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayDeNotas
    }

    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criaNota={this.criaNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
