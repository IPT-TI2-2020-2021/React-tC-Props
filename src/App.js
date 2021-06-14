// ***********************************************
// app.js
// ***********************************************


import React from 'react';

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
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Apelido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José</td>
                <td>Lopes</td>
              </tr>
              <tr>
                <td>Maria</td>
                <td>Silva</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );

  }
}










export default App;
