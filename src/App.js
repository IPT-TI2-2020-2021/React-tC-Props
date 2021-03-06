// ***********************************************
// app.js
// ***********************************************

import React from 'react';
import Tabela from './Tabela';
import Tabela2 from './Tabela2';
import Tabela3 from './Tabela3';


/**
 * Componente 'principal' do meu projeto
 */
class App extends React.Component {

  render() {

    // definição de um 'repositório de dados'
    // tem uma característica interessante: NÃO PODE ser alterado
    // https://www.json.org/json-en.html
    const alunos = [
      {
        "nome": "José",
        "apelido": "Lopes"
      },
      {
        "nome": "Maria",
        "apelido": "Silva"
      },
    ];

    // este método É OBRIGATÓRIO
    return (
      <div className="container">
        <h1>Lista de Alunos</h1>
        <div className="row">
          <div className="col-4">
            <h4><br />Tabela simples</h4>
            <Tabela />
          </div>
          <div className="col-4">
            <h4>Tabela com dois<br />sub-componentes</h4>
            <Tabela2 />
          </div>
          <div className="col-4">
            <h4>Tabela com acesso<br />a dados <i>props</i></h4>
            {/* Tabela3 tem um 'parâmetro de entrada', chamado 'dadosAlunos'.
                Neste caso, está a receber o array JSON com os dados dos alunos */}
            <Tabela3 dadosAlunos={alunos}/>
          </div>
        </div>
      </div>
    );

  }
}



export default App;
