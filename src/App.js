import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componentes/general/Header";
import ListadoAgentes from "./Componentes/Agentes/Agentes";
import ListadoCliente from "./Componentes/Clientes/ListadoCliente";
import FrmCliente from "./Componentes/Clientes/FrmCliente";
import Bienvenido from "./Componentes/general/Bienvenida"
import Frmlogin from "./Componentes/Clientes/login"


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
       <Route path="/Cliente" element={<ListadoCliente/>} exact></Route>
       <Route path="/" element={<Bienvenido/>} exact></Route>
        <Route path="/clientes/form" element={<FrmCliente/>} exact></Route>
        <Route path="/Agentes" element={<ListadoAgentes/>} exact></Route>
        <Route path="/clientes/formLogin" element={<Frmlogin/>} exact></Route>
      </Routes>
      </BrowserRouter>
       
    </div>

  );
}

export default App;
