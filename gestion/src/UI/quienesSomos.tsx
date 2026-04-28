import React from 'react'
import Image from 'next/image'

export default function QuienesSomos() {
  return (
    <div className="">
        <div className='text-[var(--text)] text-6xl ' >
            <h1>QUINES <span className='text-[var(--navbar)]'>SOMOS</span></h1>
        </div>
        <div className=' text-[var(--text) ]'  >
            <p>DCJ es el aliado estratégico de su organización en la 
            <br />administración y gestión del talento humano, ofreciendo 
            <br />soluciones integrales que optimizan cada etapa del ciclo de 
            <br />vida del colaborador: atracción, contratación, retención y 
            desarrollo. 
            <br />Nuestro enfoque garantiza procesos más eficientes, equipos 
            <br />comprometidos y un impacto positivo en la productividad y 
            <br />el crecimiento empresarial.</p>
        </div>
        <div className=' flex justify-end'>
            <Image  
                src="/reunion.png"
                alt='imagen'
                width={600}
                height={200}
            />
        </div>
    </div>
)
}

