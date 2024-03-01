import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import CrearCuenta from './componentes/CrearCuenta';
import Admin from './componentes/Admin';
import Home from './componentes/Home';
/*import Prueba from './componentes/Prueba';*/
import Recibos from './componentes/Recibos';
import ListaRecibos from './componentes/ListaRecibos';

function App() {
  return (
  <Fragment>
    <Router>
      <Routes>
        <Route path="Home" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="crear-cuenta" exact element={<CrearCuenta/>}/>
        <Route path="/" exact element={<Admin/>}/>
        <Route path="Listarecibos" exact element ={<ListaRecibos/>}/>
        <Route path="Recibo" exact element = {<Recibos/>}/>
      </Routes>
    </Router>
  </Fragment>
  );
}

export default App;
