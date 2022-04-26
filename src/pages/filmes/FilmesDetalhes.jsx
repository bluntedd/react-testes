import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'




const FilmesDetalhes = () => {

  
  
  const params = useParams()

  
  const [filmes, setFilme] = useState({})

  const  [atores, setAtores] = useState([])

  useEffect(() => {
     
     apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado =>{
      
      setFilme(resultado.data) 
     })

    
  }, [])


  useEffect(()=>{

    apiFilmes.get('movie/'+ params.id + '/credits?language=pt-BR').then(resultado=>{
        setAtores(resultado.data.cast)    
    })
 
 },[])
  return (
    <div>
      {!filmes.id && <h1>Carregando... Aguarde!</h1>}

{filmes.id &&
<div>
  <Container>
  <h1>{filmes.title}</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src= {"https://image.tmdb.org/t/p/w500/"+ filmes.poster_path} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>Titulo Original:</h2>
          <p>{filmes.original_title}</p>
          <h2>Popularidade:</h2>
          <p>{filmes.popularity}</p>
          <h2>Data de lançamento:</h2>
          <p>{filmes.release_date}</p>
          <p><strong>Gêneros: </strong></p>

          <p><strong>Gêneros: </strong>
            {filmes.genres.map(item => (
            <span key={item.id}>{item.name}, </span>
            ))}
          </p>

          <h2>Orçamento:</h2>
          <p>{filmes.budget}</p>
          <h2>Sinopse:</h2>
          <p>{filmes.overview}</p>

          <Link className='btn btn-primary' to={-1}>Voltar</Link>
          
          
        </Col>
        <Col md={12} className='mt-3'>
                <h1>Atores</h1>
              </Col>
              <Row>
              {atores.map(item=>(
               <Col className='mb-3' md={2} key={item.id}>
                
                <Link to={'/atores/' + item.id}>
                <Card title = {item.name}>
                   <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.profile_path} />
                </Card>
                </Link>
               </Col>
              ))}
             </Row>
            </Row>
        </Container>
      </div>
    }
    </div>
  )
}


export default FilmesDetalhes