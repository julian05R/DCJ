import Image from "next/image";

export default function QuienesSomosYsuenos() {
  return (
    <section
      className="w-full py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0faf6 0%, #ffffff 50%, #e8f8f2 100%)",
      }}
    >
      <div
        className="absolute w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "#4FA58D",
          filter: "blur(80px)",
          transform: "translate(-10%, 20%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        {/* ── QUIENES SOMOS ── */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* TEXTO */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-[#4FA58D]/30 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-[#4FA58D]/40" />
              <div className="w-3 h-3 rounded-full bg-[#4FA58D]/70" />
              <div className="w-4 h-4 rounded-full bg-[#4FA58D]" />
              <div className="w-3 h-3 rounded-full bg-[#4FA58D]/70" />
              <div className="w-2 h-2 rounded-full bg-[#4FA58D]/40" />
              <div className="w-8 h-px bg-[#4FA58D]/30 rounded-full" />
            </div>
            <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-3 py-1 rounded-full text-xs font-semibold w-fit">
              <div className="w-1.5 h-1.5 bg-[#4FA58D] rounded-full animate-pulse" />
              Sobre nosotros
            </div>
            <h2 className="text-4xl font-bold text-[#2E2E2E] leading-tight">
              QUIENES <br />
              <span className="text-[#4FA58D] relative">
                SOMOS
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#4FA58D] rounded-full opacity-40" />
              </span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              DCJ es el aliado estratégico de su organización en la
              administración y gestión del talento humano, ofreciendo soluciones
              integrales que optimizan cada etapa del ciclo de vida del
              colaborador: atracción, contratación, retención y desarrollo.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nuestro enfoque garantiza procesos más eficientes, equipos
              comprometidos y un impacto positivo en la productividad y el
              crecimiento empresarial.
            </p>
            <div className="flex items-center gap-6 pt-3 border-t border-gray-200">
              <div>
                <p className="text-xl font-bold text-[#2E2E2E]">20+</p>
                <p className="text-xs text-gray-500">Años de experiencia</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-xl font-bold text-[#2E2E2E]">1.000+</p>
                <p className="text-xs text-gray-500">Empleados gestionados</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-xl font-bold text-[#2E2E2E]">9</p>
                <p className="text-xs text-gray-500">
                  Servicios especializados
                </p>
              </div>
            </div>
          </div>

          {/* BOMBILLO */}
          <div className="shrink-0">
            <Image
              src="/bombilloBueno.png"
              alt="Idea"
              width={220}
              height={220}
              style={{ height: "auto" }}
              className="object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* DIVISOR */}
        <div className="flex items-center gap-2 justify-center">
          <div className="w-8 h-px bg-[#4FA58D]/30 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-[#4FA58D]/40" />
          <div className="w-3 h-3 rounded-full bg-[#4FA58D]/70" />
          <div className="w-4 h-4 rounded-full bg-[#4FA58D]" />
          <div className="w-3 h-3 rounded-full bg-[#4FA58D]/70" />
          <div className="w-2 h-2 rounded-full bg-[#4FA58D]/40" />
          <div className="w-8 h-px bg-[#4FA58D]/30 rounded-full" />
        </div>

        {/* ── NUESTRO SUEÑO ── */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* CAJA NEGRA */}
          <div className="w-full md:w-72 flex-shrink-0 min-w-0">
            <div className="bg-[#2E2E2E] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#4FA58D]/20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#4FA58D]/10" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#4FA58D]/20 text-[#4FA58D] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  <div className="w-1.5 h-1.5 bg-[#4FA58D] rounded-full animate-pulse" />
                  Nuestra visión
                </div>
                <span className="text-[#4FA58D] text-5xl font-bold leading-none block mb-1">
                  "
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight">
                  NUESTRO <br />
                  <span className="text-[#4FA58D]">SUEÑO</span>
                </h2>
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-3 py-1 rounded-full text-xs font-semibold w-fit">
              <div className="w-1.5 h-1.5 bg-[#4FA58D] rounded-full animate-pulse" />
              Nuestra misión
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Consolidarnos como una empresa referente en la administración y
              gestión del talento humano, impulsando la transformación
              organizacional de manera significativa y sostenible.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-[#2E2E2E]">
                Trabajamos en pro de la calidad, el bienestar y la productividad
                de las organizaciones,
              </strong>{" "}
              poniendo al servicio más de 20 años de experiencia en la gestión
              integral del área.
            </p>
            <div className="bg-white rounded-xl shadow-sm border border-[#4FA58D]/20 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4FA58D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 bg-[#4FA58D] rounded-full" />
              </div>
              <p className="text-sm text-gray-600">
                <strong className="text-[#2E2E2E]">ISO 9001</strong> —
                Certificación que respalda nuestro compromiso con la calidad en
                cada proceso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
