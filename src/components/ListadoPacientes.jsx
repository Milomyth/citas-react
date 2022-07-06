// import de los componentes
import Pacientes from "./Pacientes";

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 mt-10 md:mt-0 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className="text-lg text-center mt-5 mb-10">Administra tus <i className="text-violet-600 font-bold">Pacientes y Citas</i></p>

        {pacientes.map( paciente => (
          <Pacientes 
            key = {paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Sin Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">Agrega pacientes para  <i className="text-violet-600 font-bold">verlos en este espacio</i></p>
        </>
      )}      
    </div>
    
  )
}

export default ListadoPacientes