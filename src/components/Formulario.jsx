import React, {useState} from 'react'


const Formulario=()=>{
    const [nombre,setnombre]=useState('')
    const[correo,setcorreo]=useState('')

    const enviarDatos=(e)=>{


    const datosformulario={
        nombre:nombre,
        correo:correo
    }
    const datos=JSON.stringify(datosformulario)
    localStorage.setItem('datosformulario',datos)
    setnombre('')
    }



    return(
        <div>
            <div className="container shadow p-5 my-5 bg-secondary text-white rounded-5">
                <form onSubmit={enviarDatos}>
                    <h1 className="bg-white text-secondary p-1">Agregar Actividad</h1>
                    <label htmlFor="nombre" className="form-label text-start d-block"><b>Nombre:</b></label>
                    <input className="form-control" type="text" value={nombre} id="nombre" placeholder="Ingrese el nombre" onChange={(e)=>setnombre(e.target.value)} />

                    <label htmlFor="correo" className="form-label text-start d-block"><b>correo:</b></label>
                    <input className="form-control" type="email" value={correo} id="correo" placeholder="Ingrese el correo" onChange={(e)=>setcorreo(e.target.value)}/>


                    <button type="submit" className="btn btn-primary mt-4">Enviar</button>
                </form>
                    <button onClick={()=>{const date=JSON.parse(localStorage.getItem('datosformulario'))
                        setnombre(date.nombre)
                        setcorreo(date.correo)
                    }} 
                    className="btn btn-success mt-4 mx-2">Editar</button>    
            </div>
            <div>
              <p></p>  
            </div>
        </div>
    )
}
export default Formulario