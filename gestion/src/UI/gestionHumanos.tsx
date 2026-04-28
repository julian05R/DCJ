import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function GestionHumanos() {
  return (
    
    <div className='flex '>
        <div>

        <div className='text-[var(--text)] text-6xl ' >
            <h1>GESTION
            <br/>DE TALENTO
            <span className='text-[var(--navbar)]'> <br />HUMANO</span></h1>
        </div>
        <div >
            <p >
                <br />Tranformamos organizaciones a través de
                <br />personas comprometidas, procesos eficientes 
                <br />y soluciones que generan resultado
            </p>
                <button className='bg-[var(--navbar)] rounded-md bg-auto'>
                    <Link href="/servicio"> Servicio</Link>
                </button>
            </div>
        </div>
        <div>
            <Image 
                src="/equipoHome.png"
                alt='imagen de equipo'
                width={700}
                height={200}

            >

            </Image>
        </div>
    </div>
)
}
