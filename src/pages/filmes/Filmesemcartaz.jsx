import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const Filmesemcartaz = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
       
       apiFilmes.get('/movie/now_playing?language=pt-BR').then(resultado =>{
        
        setFilmes(resultado.data.results) 
       })
      

      
      
    }, [])



  return (
      <div>
        <Row>
              {filmes.map(item => (
              <Col md={2} className="md-6">
                <Card>
                <Card.Body>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ item.poster_path} />
                  <Card.Title>{item.Title}</Card.Title>
                  <Card.Text>
                    {item.original_title}
                  </Card.Text>
                  <Link className="btn btn-danger" to={"/filmes/" + item.id} >Ver Detalhes</Link>
                </Card.Body>
              </Card>
              </Col>
              ))}
              </Row>
      </div>
  )
}

export default Filmesemcartaz