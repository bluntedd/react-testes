import React from 'react'

const Array = () => {
  const carros = ['Porshe', 'Mercedes', 'Maclare', 'porshe', 'Tesla']
  const Pessoa = ['leandro', 'victor', 'lazaro', 'louis', 'lorenzo']
  
  return (
    <div>
      <h1>Carros</h1>
      
      {
        carros.map( item => (<p>{item}</p>))
      }

      <h1>Pessoa</h1>
      {
        Pessoa.map(people => (<li>{people}</li>))
      }
      
    </div>
  )
}

export default Array