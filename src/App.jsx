import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from './components/ListadoPacientes'

function App() {

    //Declaramos las propiedades "props" y las pasamos al componente en este caso a Formulario.
    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); // Listado de Pacientes buscando en el localStorage
    const [paciente, setPaciente] = useState({}); // Toma los datos de un Paciente
        
    //Guardamos paciente en el LocalStorage usando useEffect 
    useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes]);

    //funcion eliminar paciente, traemos el id desde Paciente.jsx
    const eliminarPaciente = (id) => {
      //buscamos el paciente por id
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
      //actualizamos la lista de pacientes sin el eliminado
      setPacientes(pacientesActualizados);
    }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-20 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>      
    </div>
  )
}

export default App
