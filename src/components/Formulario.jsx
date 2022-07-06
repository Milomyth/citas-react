import { useState, useEffect } from "react"; // importacion de Hooks
import Error from './Error';                 // importacion de componentes

//Pasamos los datos del prop de app.jsx para que tome los valores y los mande a app.jsx
function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  //Uso de useEffect para evitar que React haga reRender en todos los cambios
  useEffect(() => {
    //comprobamos si se modifica paciente leyendo su llave o Key
   if(Object.keys(paciente).length > 0){
     //Seteamos los valores del paciente en los inputs usando los valores del paciente
     setNombre(paciente.nombre)
     setPropietario(paciente.propietario)
     setEmail(paciente.email)
     setAlta(paciente.alta)
     setSintomas(paciente.sintomas)
   }
  }, [paciente])
  

  //Generamos un ID unico para cada paciente
  const generarId = () =>{
    //generamos un numero random
    const random = Math.random().toString(36).substring(2);
    //generamos un numero dependiendo la fecha
    const date = Date.now().toString(36)
    //retornamos el resultado sumando ambas variables
    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validando Formulario
    //Verificamos que ningun campo este vacio
    if([nombre,propietario,email,alta,sintomas].includes('')){
      //Si algun campo o todos estan vacios cambiamos la variable error a true con setError para mostrar mensaje de error
      setError(true)

      return;
    } 
    // Devolvemos a false la variable error por medio del setError para quitar el mensaje de error en el formulario
    setError(false)
    // creamos el objeto pacientes para mandar
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }
    // Comprobamos si el paciente existe. Si existe lo editamos, si no lo creamos
    if(paciente.id){
      //si el paciente existe lo editamos
      objetoPaciente.id = paciente.id;
      //recorremos el state para encontrar el id del paciente
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      //guardamos los cambios de paciente
      setPacientes(pacientesActualizados);
      //reiniciamos el state
      setPaciente([]);
    }else {
      //si el paciente no existe lo creamos
      // compiamos el objeto pacientes creado en app.jsx y le agregamos los valores
      // despues con setPacientes lo agregamos 
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciamos los values en el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Registro de pacientes</h2>
      <p className="text-lg text-center mt-5 mb-10">Agrega pacientes y <i className="text-violet-600 font-bold">Administralos</i></p>
      
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        {error && <Error>Todos los Campos son Obligatorios</Error>}
        <div>
          <input className="border-gray-400 border-2 rounded-md uppercase text-center p-2 mt-2 w-full" 
            type="text" 
            placeholder="Nombre de la Mascota" 
            value={nombre}
            onChange = { (e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <input className="border-gray-400 border-2 rounded-md uppercase text-center p-2 mt-2 w-full" 
            type="text" 
            placeholder="Nombre del Propietario" 
            value={propietario}
            onChange = { (e) => setPropietario(e.target.value)}
          />
        </div>
        <div>
          <input className="border-gray-400 border-2 rounded-md uppercase text-center p-2 mt-2 w-full" 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange = { (e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input className="border-gray-400 border-2 rounded-md uppercase text-center p-2 mt-2 w-full" 
            type="Date"
            value={alta}
            onChange = { (e) => setAlta(e.target.value)}
          />
        </div>
        <div>
          <textarea id="sitomas" placeholder="Describe los Sintomas" 
            className=" border-2 border-gray-400 w-full p-2 mt-2 rounded-md placeholder-gray-400" 
            value={sintomas}
            onChange = { (e) => setSintomas(e.target.value)}
          />
        </div>
        <div>
          <input className="bg-violet-600 text-white uppercase w-full p-3 rounded-md transition-all cursor-pointer hover:bg-violet-700" 
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} type="submit" />
        </div>
      </form>
      
    </div>
    
  )
}

export default Formulario
