"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

function navbar() {
   const Pathname = usePathname ()
return (
    <div className="bg-white  flex justify-between shadow-md shadow-[#4FA58D] sticky top-0 z-50
    ">
        <div className="py-0.5">
            <Link href="/">
            <Image src="/logo.png" alt="logo" 
                    width={120}
                    height={120}    
            />
            
            </Link>
        </div>

        <div className= "flex gap-8 pr-8 py-4 text-(--text) text-xl rounded-md">
            <Link href="/servicio" className={`${Pathname === "/servicio"? " px-2 py-1 bg-[var(--navbar)] text-white": "text-[var(--text)]"} hover:text-white hover:bg-[var(--navbar)] rounded-md`}>
                <span>Servicios</span>
            </Link>

            <Link href="/formulario" className={`${Pathname === "/formulario" ? " px-2 py-1 bg-[var(--navbar)] text-white" : "text-[var(--text)]"} hover:text-white hover:bg-[var(--navbar)] rounded-md bg-auto`}>
            <span>Formulario</span>
            </Link>
        </div>
    </div>
  )
}


export default navbar