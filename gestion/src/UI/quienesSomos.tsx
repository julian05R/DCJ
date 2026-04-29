import Image from 'next/image'

export default function QuienesSomos() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* BANDA NEGRA CURVA */}
        <div className="hidden md:block absolute -left-16 -top-10 z-0">
          <svg width="120" height="320" viewBox="0 0 120 320">
            <path
              d="M 20 0 Q 20 160 80 280 L 60 320 Q 0 200 0 0 Z"
              fill="#2E2E2E"
            />
          </svg>
        </div>

        {/* CARD */}
        <div className="relative z-10 bg-white rounded-xl shadow-md p-10 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* TEXTO */}
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[#3A3A3A] leading-tight">
              QUIENES <br />
              <span className="text-[#4FA58D]">SOMOS</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              DCJ es el aliado estratégico de su organización en la administración 
              y gestión del talento humano, ofreciendo soluciones integrales que 
              optimizan cada etapa del ciclo de vida del colaborador: atracción, 
              contratación, retención y desarrollo.
              <br /><br />
              Nuestro enfoque garantiza procesos más eficientes, equipos 
              comprometidos y un impacto positivo en la productividad y 
              el crecimiento empresarial.
            </p>
          </div>

          {/* ICONO */}
          <div className="flex justify-center md:justify-end flex-shrink-0">
            <Image
              src="/bombillo.png"
              alt="Idea"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}