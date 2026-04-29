import React from 'react'
import Image from 'next/image'

export default function Empleado() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* CARD */}
        <div className="bg-white rounded-xl shadow-md p-10 flex flex-col md:flex-row gap-10 items-start">

          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col w-full md:w-64 flex-shrink-0">

            {/* TÍTULO */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-[#2E2E2E] leading-tight">CEO &</h1>
              <h1 className="text-3xl font-bold text-[#4FA58D] leading-tight">FUNDADORA</h1>
              <p className="text-xs font-bold text-[#2E2E2E] mt-1 tracking-wide">
                CLAUDIA PATRICIA PULIDO C
              </p>
            </div>

            {/* FOTO CON DECORACIÓN */}
            <div className="relative">

              {/* TRIÁNGULO VERDE SUPERIOR IZQUIERDA DETRÁS */}
              <div className="absolute -top-3 -left-3 z-0">
                <div
                  className="w-16 h-16 bg-[#4FA58D]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                />
              </div>

              {/* TRIÁNGULO VERDE SUPERIOR DERECHA DETRÁS */}
              <div className="absolute -top-3 -right-3 z-0">
                <div
                  className="w-16 h-16 bg-[#4FA58D]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
              </div>

              {/* FOTO */}
              <div className="relative z-10 rounded-xl overflow-hidden">
                <Image
                  src="/ceo.png"
                  alt="CEO"
                  width={280}
                  height={320}
                  className="w-full object-cover object-top"
                />

                {/* TRIÁNGULOS VERDES ESQUINAS INFERIORES ENCIMA */}
                <div className="absolute bottom-0 left-0 z-10">
                  <div
                    className="w-14 h-14 bg-[#4FA58D]"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-10">
                  <div
                    className="w-14 h-14 bg-[#4FA58D]"
                    style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
                  />
                </div>
              </div>

              {/* TRIÁNGULO VERDE INFERIOR IZQUIERDA DETRÁS */}
              <div className="absolute -bottom-3 -left-3 z-0">
                <div
                  className="w-16 h-16 bg-[#4FA58D]"
                  style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                />
              </div>

              {/* TRIÁNGULO VERDE INFERIOR DERECHA DETRÁS */}
              <div className="absolute -bottom-3 -right-3 z-0">
                <div
                  className="w-16 h-16 bg-[#4FA58D]"
                  style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
                />
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="flex-1 flex flex-col gap-6">

            {/* BADGE VERDE — ARRIBA COMPLETAMENTE */}
            <div className="self-end bg-[#4FA58D] text-white text-xs px-4 py-3 rounded-md max-w-[220px] italic leading-relaxed">
              Psicóloga especialista en Recursos Humanos y Seguridad y Salud en el Trabajo,
              con certificación como Auditora de Calidad ISO 9001
            </div>

            {/* TEXTO — DEBAJO DEL BADGE SIN PISARSE */}
            <div className="space-y-4 text-[#3A3A3A] text-sm leading-relaxed">
              <p>
                Más de 20 años de experiencia liderando áreas de Talento Humano y gestión
                administrativa en empresas privadas de gran escala,{' '}
                <strong>con equipos de más de 1.000 empleados.</strong>
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

          </div>
        </div>
      </div>
    </section>
  )
}