import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E2E2E] text-white relative overflow-hidden">

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

        {/* LOGO + SLOGAN */}
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.png"
            alt="DCJ Logo"
            width={120}
            height={60}
            className="object-contain"
          />
          <p className="text-gray-400 text-xs mt-2">
            Aliados en la administración de talento humano
          </p>
        </div>

        {/* ENLACES */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white text-sm tracking-wide">ENLACES</h3>
          <Link href="/servicios" className="text-gray-400 text-sm hover:text-[#4FA58D] transition-colors">Servicios</Link>
          <Link href="/formulario" className="text-gray-400 text-sm hover:text-[#4FA58D] transition-colors">Formulario</Link>
          <Link href="/contacto" className="text-gray-400 text-sm hover:text-[#4FA58D] transition-colors">Contacto</Link>
        </div>

        {/* CONTÁCTENOS */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white text-sm tracking-wide">CONTÁCTENOS</h3>
          <p className="text-gray-400 text-sm">+57 320 2111 1632</p>
          <p className="text-gray-400 text-sm">dcjtslentohumano3.0@gmail.com</p>
          <p className="text-gray-400 text-sm">Colombia</p>
        </div>

        {/* SÍGUENOS */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white text-sm tracking-wide">SÍGUENOS</h3>
          <div className="flex gap-4 mt-1">
            <a href="#" className="text-gray-400 hover:text-[#4FA58D] transition-colors">
              {/* LinkedIn */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.609v5.587z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4FA58D] transition-colors">
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* DECORACIÓN VERDE DERECHA */}
      <div className="absolute right-0 bottom-0 opacity-20 z-0">
        <Image
          src="/bombillo.png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* LÍNEA DIVISORIA */}
      <div className="border-t border-gray-600 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-gray-500 text-xs italic">
            2026 DCJ Talento Humano. Todos los derechos reservados
          </p>
        </div>
      </div>

    </footer>
  )
}