import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <main className="content">
        {
          conteudos.map((conteudo) => 
          <div className="content-box">
            <p>O conteúdo é: {conteudo.conteudo}</p>
            <p>Status: {conteudo.status}</p>
            <p>Bloco: {conteudo.bloco}</p>
          </div>)
        }
      </main>
    );
  }
}

export default Content;