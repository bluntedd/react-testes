import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Cartao from './components/Cartao';
import Pagina1 from './pages/Pagina1';
import Objeto from './pages/Objeto';
import Array from './pages/Array';
import Carros from './pages/Carros';
//mport Box from './components/Box';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contador from './pages/Contador';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import Filmeslancamentos from './pages/filmes/Filmeslancamentos';
import Filmesemcartaz from './pages/filmes/Filmesemcartaz';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';
import SeriesPopulares from './pages/series/SeriesPopulares';
import SeriesEstrelando from './pages/series/SeriesEstrelando';
import Seriesnoar from './pages/series/Seriesnoar';
import SeriesDetalhes from './pages/series/SeriesDetalhes';



function App() {
  return (
    <div> 
    <BrowserRouter>
    <Menu/> 
    <Routes>

    <Route path="/" element={<Carros/>} />
    <Route path="/carros" element={<Carros/>} />
    <Route path="/array" element={<Array/>} />
    <Route path="/objeto" element={<Objeto/>} />
    <Route path="/contador" element={<Contador/>} />
    <Route path="/pagina1" element={<Pagina1/>} />
    <Route path="/filmesPopulares" element={<FilmesPopulares/>} />
    <Route path="/filmes/:id" element={<FilmesDetalhes/>} />
    <Route path="/filmeslancamentos" element={<Filmeslancamentos/>} />
    <Route path="/filmesemcartaz" element={<Filmesemcartaz/>} />
    <Route path="/atores/:id" element={<AtoresDetalhes/>} />
    <Route path="/seriesnoar" element={<Seriesnoar/>} />
    <Route path="/seriesestrelando" element={<SeriesEstrelando />} />
    <Route path="/seriesPopulares" element={<SeriesPopulares/>} />
    <Route path="/series/:id" element={<SeriesDetalhes/>} />
    
    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;

