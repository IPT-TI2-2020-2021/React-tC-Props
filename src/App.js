// ***********************************************
// app.js
// ***********************************************

import React from 'react';
import Tabela from './Tabela';


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
            <Tabela />
          </div>
        </div>
      </div>
    );

  }
}



export default App;
