// ***********************************************
// app.js
// ***********************************************

import React from 'react';
import Tabela from './Tabela';
import Tabela2 from './Tabela2';


/**
 * Componente 'principal' do meu projeto
 */
class App extends React.Component {

  render() {
    // este método É OBRIGATÓRIO
    return (
      <div className="container">
        <h1>Lista de Alunos</h1>
        <div className="row">
          <div className="col-4">
            <h4><br/>Tabela simples</h4>
            <Tabela />
          </div>
          <div className="col-4">
            <h4>Tabela com dois<br />sub-componentes</h4>
            <Tabela2 />
          </div>
        </div>
      </div>
    );

  }
}



export default App;
