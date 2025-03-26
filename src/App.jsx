
import NavBar from './componets/NavBar.jsx' 
import Inicio from './Screens/Inicio.jsx';
import  Servicios  from "./Screens/Servicios.jsx"
import  ComoTrabajamos  from './Screens/ComoTrabajamos.jsx'
import  Beneficios  from './Screens/Beneficios.jsx'
import  Contacto  from './Screens/Contacto.jsx'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Inicio></Inicio>
      <Servicios></Servicios>
      <ComoTrabajamos></ComoTrabajamos>
      <Beneficios></Beneficios>
      <Contacto></Contacto>

    </div>
  )
}

export default App



{/* Envia en una cuenta de Getform */}
