import Link from 'next/link'
import Image from 'next/image'

export default function GestionHumanos() {
  return (
    <section className="w-full min-h-[90vh] relative overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(135deg, #f0faf6 0%, #ffffff 50%, #e8f8f2 100%)'
      }}
    >
      {/* DECORACIÓN FONDO */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: '#4FA58D', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }}
      />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
        style={{ background: '#4FA58D', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 py-20 relative z-10">

        {/* TEXTO */}
        <div className="flex flex-col gap-6">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-4 py-2 rounded-full text-sm font-semibold w-fit">
            <div className="w-2 h-2 bg-[#4FA58D] rounded-full animate-pulse" />
            Soluciones en Talento Humano
          </div>

          {/* TÍTULO */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#2E2E2E] leading-tight">
            GESTIÓN <br />
            DEL TALENTO <br />
            <span className="text-[#4FA58D] relative">
              HUMANO
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#4FA58D] rounded-full opacity-40" />
            </span>
          </h1>

          {/* TEXTO */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Transformamos organizaciones a través de personas comprometidas,
            procesos eficientes y soluciones que generan resultados.
          </p>

          {/* BOTONES */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/servicio">
              <button className="bg-[#4FA58D] hover:bg-[#3e8f79] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg shadow-[#4FA58D]/30 hover:shadow-xl hover:scale-105">
                Ver servicios
              </button>
            </Link>
            <Link href="/formulario">
              <button className="border-2 border-[#4FA58D] text-[#4FA58D] hover:bg-[#4FA58D] hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300">
                Contáctenos
              </button>
            </Link>
          </div>

          {/* STATS */}
          <div className="flex items-center gap-8 pt-4 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-[#2E2E2E]">20+</p>
              <p className="text-xs text-gray-500">Años de experiencia</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-[#2E2E2E]">1.000+</p>
              <p className="text-xs text-gray-500">Empleados gestionados</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-[#2E2E2E]">9</p>
              <p className="text-xs text-gray-500">Servicios especializados</p>
            </div>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative flex justify-center">

          {/* FONDO DECORATIVO DETRÁS DE LA IMAGEN */}
          <div className="absolute inset-0 bg-[#4FA58D]/10 rounded-2xl transform rotate-3" />

          {/* IMAGEN */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Captura de pantalla 2026-04-29 110142.png"
              alt="Equipo de trabajo"
              width={550}
              height={420}
              className="object-cover w-full h-full"
            />
            {/* OVERLAY SUTIL */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/20 to-transparent" />
          </div>

          {/* BADGE FLOTANTE */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4FA58D]/10 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-[#4FA58D] rounded-full" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#2E2E2E]">ISO 9001</p>
              <p className="text-xs text-gray-400">Certificación de Calidad</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}