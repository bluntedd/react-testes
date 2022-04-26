import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesEstrelando = () => {

    const [estrelando, setEstrelando] = useState([])

    useEffect(() => {
       
       apiFilmes.get('/tv/airing_today?language=pt-BR').then(resultado =>{
        
        setEstrelando(resultado.data.results) 
       })
       
    }, [])



  return (
      <div>
        <Row>
              {estrelando.map(item => (
              <Col md={2} className="md-6">
                <Card>
                <Card.Body>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ item.poster_path} />
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.original_title}
                  </Card.Text>
                  <Link className="btn btn-danger" to={"/series/" + item.id} >Ver Detalhes</Link>
                </Card.Body>
              </Card>
              </Col>
              ))}
              </Row>
      </div>
  )
}

export default SeriesEstrelando