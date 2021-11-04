import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./data/Categorias";
import ArrayDeNotas from "./data/Notas";

import "./assets/index.css";
import "./assets/App.css";

class App extends Component {

  constructor() {
    super()
    this.notas = new ArrayDeNotas()
    this.categorias = new Categorias()
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criaNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
