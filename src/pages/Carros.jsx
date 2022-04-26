import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Cartao from '../components/Cartao'
import Pagina1 from './Pagina1'

const carros = () => {
  const carros = [
    {Marca: 'Fiat', modelo: 'Palio', cor: 'Prata', ano: '2014', 
    foto:'https://3.bp.blogspot.com/-2-HOM_lKNOM/VYhYyqKZe3I/AAAAAAACJwQ/gyFXu4i6y2o/s1600/Fiat-Palio-Fire-2016%2B%25282%2529.jpg'},
    {Marca: 'Chevrolet', modelo: 'Corsa', cor: 'Vinho', ano: '2008', 
    foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Corsa-Wind-modelo-1997-da-Chevrolet._1-C%C3%B3pia.jpg?quality=70&strip=info'},
    {Marca: 'Bmw', modelo: 'X1', cor: 'Branca', ano: '2020',
     foto: 'https://cdn.motor1.com/images/mgl/7ZL4go/s3/bmw-320i-msport-2021.jpg'},
    {Marca: 'Ford', modelo: 'Ka', cor: 'Branco', ano: '2017', 
    foto: 'https://cdn.autopapo.com.br/box/uploads/2018/11/22195850/img_2858.jpg'},
    {Marca: 'Mercedes', modelo: 'A35', cor: 'Azul', ano: '2020', 
    foto:'https://4.bp.blogspot.com/-lMIsrRl9VIg/XJtRh1V9J0I/AAAAAAACu4A/sL0sJRvCJFMp0KEpQsJaFwpPnHlswvsiACLcBGAs/s1600/mercedes-A35-AMG-Sedan%2B%25286%2529.jpg'},
    {Marca: 'Volkswagen', modelo: 'Polo', cor: 'Prata', ano: '2019', 
    foto:'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2021/202112/20211228/volkswagen-polo-1.0-200-tsi-comfortline-automatico-wmimagem15531870291.jpg'},
  ]
  return (
    <div>
      <Container>
        <Row>
          {carros.map(item => (
            <Col md={4} className="md-3">
              <Card>
                <Card.Img fluid={true} variant="top" src={item.foto}/>
                <Card.Body>
            <Card.Title>{item.marca} - {item.modelo}</Card.Title>
            <Card.Text><strong>Cor : </strong> {item.cor}</Card.Text>
            <Card.Text><strong>Ano : </strong> {item.ano}</Card.Text>
            <button variant ="Danger"> INFORMAÇÕES</button>
            </Card.Body>
  
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default carros