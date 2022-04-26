import React from 'react'
import { Card, Container, Nav, Navbar, Row, link, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/objeto">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Objeto</Link>
            //<Link className="nav-link" to="/contador">Contador</Link>
            <NavDropdown title="Filmes" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/FilmesPopulares">Populares</Link>
              <Link className="dropdown-item" to="/Filmesemcartaz">Cartaz</Link>
              <Link className="dropdown-item" to="/Filmeslancamentos">Lançamento</Link>
            </NavDropdown>
            <NavDropdown title="Séries de TV" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/SeriesPopulares">Populares</Link>
              <Link className="dropdown-item" to="/Seriesnoar">No Ar</Link>
              <Link className="dropdown-item" to="/SeriesEstrelando">Séries Estrelando</Link>
            </NavDropdown>
          
          
          </Nav>
          </Container>
        </Navbar>

        <br />


    </div>
  )
}

export default Menu