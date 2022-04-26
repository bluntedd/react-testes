import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const SeriesPopulares = () => {

    const [series, setSeries] = useState([])


    useEffect(() => {
       
        apiFilmes.get('/tv/popular?language=pt-BR').then(resultado =>{
        
            setSeries(resultado.data.results) 
           })

      
    }, [])



  return (
      <div>
        <Row>
              {series.map(item => (
              <Col md={4} className="md-3">
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

export default SeriesPopulares