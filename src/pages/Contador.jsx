import React from 'react'
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Contador = () => {

    //let numero = 0;
    let [Novo, setnumero] = useState (0)

    function mais(){
        setnumero(++Novo)
        console.log(++Novo)
    }
    let [numero1, setnumero1] = useState (10000)

    function menos(){
        setnumero1(--numero1)
        console.log(--numero1)
    }
  return (
      <Container>
          <div>
              <h1>Contador</h1>
                  <p><h3>Adição: <Button variant="success" onClick={mais}>{Novo}</Button></h3></p>
              </div>
              
              
    
      </Container>
  )
}

export default Contador