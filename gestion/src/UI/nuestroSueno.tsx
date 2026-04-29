export default function NuestroSueno() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">

        {/* IZQUIERDA */}
        <div className="flex items-center w-full md:w-2/3 gap-0">

          {/* FLECHA VERDE */}
          <div
            className="hidden md:block flex-shrink-0 w-8 h-36 bg-[#4FA58D]"
            style={{ clipPath: 'polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%)' }}
          />

          {/* BLOQUE GRIS */}
          <div className="bg-[#E5E5E5] p-6 rounded-lg shadow-sm text-[#3A3A3A] text-sm leading-relaxed flex-1">
            Consolidarnos como una empresa referente en la administración y gestión del talento humano,
            impulsando la transformación organizacional de manera significativa y sostenible.
            <br /><br />
            <strong>
              Trabajamos en pro de la calidad, el bienestar y la productividad de las organizaciones,
            </strong>{' '}
            poniendo al servicio más de 20 años de experiencia en la gestión integral del área.
          </div>
        </div>

        {/* DERECHA - CAJA NEGRA */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#2E2E2E] text-white p-8 rounded-lg relative overflow-hidden min-h-[140px] flex items-end justify-end">

            {/* COMILLAS */}
            <span className="absolute top-2 left-6 text-[#4FA58D] text-6xl font-bold leading-none select-none">
              "
            </span>

            {/* TITULO */}
            <h2 className="text-2xl font-bold text-right">
              NUESTRO <br />
              <span className="text-[#4FA58D]">SUEÑO</span>
            </h2>
          </div>
        </div>

      </div>
    </section>
  )
}