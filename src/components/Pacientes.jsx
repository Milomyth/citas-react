
function Pacientes({paciente, setPaciente, eliminarPaciente}) {

  const {nombre, propietario, email, alta, sintomas, id} = paciente;

  const handleEliminar = () => {
    //preguntamos si deseamos eliminar paciente
     const respuesta = confirm('Deseas eliminar al Paciente');
    //si es positiva enviamos el id a eliminar al app.jsx
     if(respuesta){
      eliminarPaciente(id)
     }

  }

  return (
    <div className="bg-white m-3 shadow-md px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del Paciente: {''}<span className="font-normal normal-case text-violet-600">{nombre}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}<span className="font-normal normal-case text-violet-600">{propietario}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}<span className="font-normal normal-case text-violet-600">{email}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}<span className="font-normal normal-case text-violet-600">{alta}</span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}<span className="font-normal normal-case text-violet-600">{sintomas}</span></p>
      <div className="flex justify-between mt-10">
        <button 
          type="button" 
          className="py-3 px-10 bg-violet-600 transition-all cursor-pointer hover:bg-violet-700 uppercase rounded-lg font-bold text-white"
          onClick={() => setPaciente(paciente)}>
            Editar
        </button>
        <button 
          type="button" 
          className="py-3 px-10 bg-orange-600 transition-all cursor-pointer hover:bg-orange-700 uppercase rounded-lg font-bold text-white"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Pacientes