import Image from 'next/image'

export default function QuienesSomosYSueno() {
  return (
    <section
      className="w-full py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0faf6 0%, #ffffff 50%, #e8f8f2 100%)'
      }}
    >
      {/* DECORACIÓN FONDO */}
      <div className="absolute w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(80px)', transform: 'translate(-10%, 20%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20 relative z-10">

        {/* ── QUIENES SOMOS ── */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* TEXTO */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-4 py-2 rounded-full text-sm font-semibold w-fit">
              <div className="w-2 h-2 bg-[#4FA58D] rounded-full animate-pulse" />
              Sobre nosotros
            </div>

            <h2 className="text-4xl font-bold text-[#2E2E2E] leading-tight">
              QUIENES <br />
              <span className="text-[#4FA58D] relative">
                SOMOS
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#4FA58D] rounded-full opacity-40" />
              </span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              DCJ es el aliado estratégico de su organización en la administración
              y gestión del talento humano, ofreciendo soluciones integrales que
              optimizan cada etapa del ciclo de vida del colaborador: atracción,
              contratación, retención y desarrollo.
            </p>
            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Nuestro enfoque garantiza procesos más eficientes, equipos
              comprometidos y un impacto positivo en la productividad y
              el crecimiento empresarial.
            </p>

            {/* STATS */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-200">
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

          {/* ICONO */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#4FA58D]/10 rounded-2xl transform rotate-3" />
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-10">
              <Image
                src="/bombillo.png"
                alt="Idea"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="w-3 h-3 rounded-full bg-[#4FA58D]" />
          <div className="w-2 h-2 rounded-full bg-[#4FA58D]/50" />
          <div className="w-1 h-1 rounded-full bg-[#4FA58D]/30" />
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ── NUESTRO SUEÑO ── */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* CAJA NEGRA */}
          <div className="w-full md:w-72 flex-shrink-0">
            <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">

              {/* CÍRCULO DECORATIVO */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#4FA58D]/20" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#4FA58D]/10" />

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-[#4FA58D]/20 text-[#4FA58D] px-3 py-1 rounded-full text-xs font-semibold mb-6">
                <div className="w-1.5 h-1.5 bg-[#4FA58D] rounded-full animate-pulse" />
                Nuestra visión
              </div>

              {/* COMILLAS */}
              <span className="text-[#4FA58D] text-6xl font-bold leading-none block mb-2">"</span>

              {/* TITULO */}
              <h2 className="text-3xl font-bold relative z-10">
                NUESTRO <br />
                <span className="text-[#4FA58D]">SUEÑO</span>
              </h2>
            </div>
          </div>

          {/* TEXTO */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-4 py-2 rounded-full text-sm font-semibold w-fit">
              <div className="w-2 h-2 bg-[#4FA58D] rounded-full animate-pulse" />
              Nuestra misión
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              Consolidarnos como una empresa referente en la administración y gestión
              del talento humano, impulsando la transformación organizacional de manera
              significativa y sostenible.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              <strong className="text-[#2E2E2E]">
                Trabajamos en pro de la calidad, el bienestar y la productividad
                de las organizaciones,
              </strong>{' '}
              poniendo al servicio más de 20 años de experiencia en la gestión
              integral del área.
            </p>

            {/* DESTACADO */}
            <div className="bg-white rounded-xl shadow-sm border border-[#4FA58D]/20 p-5 flex items-center gap-4 mt-2">
              <div className="w-12 h-12 bg-[#4FA58D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-[#4FA58D] rounded-full" />
              </div>
              <p className="text-sm text-gray-600">
                <strong className="text-[#2E2E2E]">ISO 9001</strong> — Certificación que respalda
                nuestro compromiso con la calidad en cada proceso.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}