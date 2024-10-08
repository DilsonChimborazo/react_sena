import React,{useState} from 'react'

const Boton=()=>{
    const [contador,setContador]=useState(0)
    if(contador>=100){
        alert('tus dedos son magnificos')
        setContador(0)
    }
    return(
        <div className='mt-5'>
            <p>{contador}</p>
            <button className='btn btn-primary mx-2' onClick={()=>setContador('Hola')}>Presiona</button>
            <button className='btn btn-primary' onClick={()=>setContador(contador+1)}>aumenta</button>
            <button className='btn btn-danger mx-2' onClick={()=>setContador(contador-1)}>desminuir</button>
            <button className='btn btn-success' onClick={()=>setContador(0)}>reiniciar</button>

        </div>
    ) 
    
}

export default Boton