// *********************************
// Tabela2.js
// *********************************

import React from 'react';

/**
 * componente que será utilizada na construção da Tabela
 */
function CabecalhoTabela() {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
            </tr>
        </thead>
    );
}

/**
 * componente que representa o Corpo da Tabela
 * arrow function
 */
const CorpoTabela = () => {
    return (
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
    );
}


/**
 * componente Tabela
 */
class Tabela2 extends React.Component {

    render() {
        return (
            <table className="table">
                <CabecalhoTabela />
                <CorpoTabela />
            </table>
        );
    }
}

export default Tabela2;

