
import Link from 'next/link'
import Image from 'next/image'

export default function GestionHumanos() {
return (
    <section className="w-full bg-white py-20">
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">

        {/* TEXTO */}
        <div className="bg-white p-10 rounded-xl shadow-lg relative">

          {/* TITULO */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#3A3A3A] leading-tight">
            GESTIÓN <br />
            DEL TALENTO <br />
            <span className="text-[#4FA58D]">HUMANO</span>
        </h1>

          {/* TEXTO */}
        <p className="mt-6 text-gray-600 text-lg">
            Transformamos organizaciones a través de personas comprometidas,
            procesos eficientes y soluciones que generan resultados.
        </p>

          {/* BOTON */}
        <Link href="/servicio">
            <button className="mt-6 bg-[#4FA58D] text-white px-6 py-3 rounded-lg hover:bg-[#3e8f79] transition">
            Ver servicios
            </button>
        </Link>

          {/* FLECHA DECORATIVA */}
        <div className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2">
            <div className="w-20 h-40 bg-[#4FA58D] clip-arrow"></div>
        </div>
        </div>

        {/* IMAGEN */}
        <div className="relative flex justify-center">
        <Image  
            src="/Captura de pantalla 2026-04-29 110142.png"
            alt="Equipo de trabajo"
            width={500}
            height={400}
            className="rounded-lg object-cover"
        />

          {/* FLECHA SOBRE IMAGEN */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-10 h-32 bg-[#4FA58D] clip-arrow-small"></div>
        </div>
        </div>

    </div>

    </section>
)
}