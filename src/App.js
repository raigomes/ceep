import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/index.css";
import "./assets/App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notas:[],
      categorias:[],
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

  adicionarCategoria(novaCategoria) {
    const novoArrayDeCategorias = [...this.state.categorias, novaCategoria]
    const novoEstado = {
      categorias: novoArrayDeCategorias
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index,1)
    this.setState({ notas: arrayNotas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criaNota={this.criaNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
