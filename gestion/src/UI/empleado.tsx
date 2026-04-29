import React from 'react'
import Image from 'next/image'

export default function Empleado() {
  return (
    <section
      className="w-full py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0faf6 0%, #ffffff 50%, #e8f8f2 100%)'
      }}
    >
      {/* DECORACIÓN FONDO */}
      <div className="absolute w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(80px)', transform: 'translate(60%, 10%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* BADGE SUPERIOR */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-4 py-2 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-[#4FA58D] rounded-full animate-pulse" />
            Nuestro equipo
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col w-full md:w-72 flex-shrink-0 gap-6">

            {/* TÍTULO */}
            <div>
              <h2 className="text-4xl font-bold text-[#2E2E2E] leading-tight">
                CEO &
              </h2>
              <h2 className="text-4xl font-bold leading-tight relative">
                <span className="text-[#4FA58D]">FUNDADORA</span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#4FA58D] rounded-full opacity-40" />
              </h2>
              <p className="text-xs font-bold text-gray-500 mt-3 tracking-widest uppercase">
                Claudia Patricia Pulido C
              </p>
            </div>

            {/* FOTO CON DECORACIÓN */}
            <div className="relative">

              {/* FONDO ROTADO */}
              <div className="absolute inset-0 bg-[#4FA58D]/10 rounded-2xl transform rotate-3 z-0" />

              {/* TRIÁNGULOS DETRÁS */}
              <div className="absolute -top-3 -left-3 z-0">
                <div className="w-16 h-16 bg-[#4FA58D]/30"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
              </div>
              <div className="absolute -top-3 -right-3 z-0">
                <div className="w-16 h-16 bg-[#4FA58D]/30"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
              </div>

              {/* FOTO */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/ceo.png"
                  alt="CEO"
                  width={280}
                  height={340}
                  className="w-full object-cover object-top"
                />

                {/* OVERLAY SUTIL */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/30 to-transparent" />

                {/* TRIÁNGULOS ENCIMA */}
                <div className="absolute bottom-0 left-0 z-10">
                  <div className="w-14 h-14 bg-[#4FA58D]"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }} />
                </div>
                <div className="absolute bottom-0 right-0 z-10">
                  <div className="w-14 h-14 bg-[#4FA58D]"
                    style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
                </div>
              </div>

              {/* TRIÁNGULOS DETRÁS ABAJO */}
              <div className="absolute -bottom-3 -left-3 z-0">
                <div className="w-16 h-16 bg-[#4FA58D]/30"
                  style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }} />
              </div>
              <div className="absolute -bottom-3 -right-3 z-0">
                <div className="w-16 h-16 bg-[#4FA58D]/30"
                  style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
              </div>
            </div>

            {/* BADGE ISO */}
            <div className="bg-white rounded-xl shadow-sm border border-[#4FA58D]/20 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4FA58D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 bg-[#4FA58D] rounded-full" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2E2E2E]">ISO 9001</p>
                <p className="text-xs text-gray-400 italic">Auditora de Calidad</p>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div className="flex-1 flex flex-col gap-6 pt-4">

            {/* BADGE ESPECIALIDAD */}
            <div className="self-start bg-[#4FA58D] text-white text-xs px-4 py-3 rounded-xl max-w-[280px] italic leading-relaxed shadow-lg shadow-[#4FA58D]/20">
              Psicóloga especialista en Recursos Humanos y Seguridad y Salud en el Trabajo,
              con certificación como Auditora de Calidad ISO 9001
            </div>

            {/* TEXTO */}
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Más de 20 años de experiencia liderando áreas de Talento Humano y gestión
                administrativa en empresas privadas de gran escala,{' '}
                <strong className="text-[#2E2E2E]">con equipos de más de 1.000 empleados.</strong>
              </p>
              <p>
                Experta en estrategias de cultura organizacional, selección, capacitación,
                bienestar, nómina, normativa laboral y SST, orientada a la optimización de
                procesos, gestión del cambio y desarrollo del talento.
              </p>
              <p>
                Reconocida por su liderazgo, visión estratégica y capacidad para implementar
                proyectos que generan impacto medible en productividad, clima laboral y
                reducción de costos.
              </p>
              <p>
                Este proyecto cuenta con el acompañamiento de un equipo de profesionales
                altamente calificados, expertos en cada una de las áreas abordadas.
              </p>
              <p>
                Nuestra experiencia y conocimientos especializados garantizan la calidad
                del proceso y la obtención de los mejores resultados.
              </p>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-8 pt-6 border-t border-gray-200 mt-2">
              <div>
                <p className="text-2xl font-bold text-[#2E2E2E]">20+</p>
                <p className="text-xs text-gray-500">Años liderando</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-[#2E2E2E]">1.000+</p>
                <p className="text-xs text-gray-500">Empleados gestionados</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-[#2E2E2E]">ISO</p>
                <p className="text-xs text-gray-500">Certificación 9001</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}