"use client"
import Link from "next/link"
import Image from "next/image"

function navbar() {
return (
    <div className="bg-[var(--navbar)] flex justify-between ">
        <div className="py-0.5">
            <Link href="/">
            <Image src="/logo.png" alt="logo" 
                    width={120}
                    height={120}    
            />
            
            </Link>
        </div>

        <div className=" flex gap-8 pr-8 py-4 text-[var(--text)] text-xl rounded-md">
            <Link href="/servicios" className="hover:text-white hover:bg-gray-500  ">
                <span>Servicios</span>
            </Link>

            <Link href="/formulario" className="hover:text-white hover:bg-gray-500  ">
            <span>Formulario</span>
            </Link>
        </div>
    </div>
  )
}


export default navbar