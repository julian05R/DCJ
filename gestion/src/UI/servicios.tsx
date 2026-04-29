import { Users, ClipboardList, GraduationCap, Gift, BarChart2, Scale, Shield, Camera, Award } from 'lucide-react'

const servicios = [
  { icon: Users, title: 'Atracción y Retención del Talento Humano' },
  { icon: ClipboardList, title: 'Asesoría en la Administración y Procesos del Área de Talento Humano' },
  { icon: GraduationCap, title: 'Programas de Capacitación y Formación' },
  { icon: Gift, title: 'Plan de Beneficios y Bienestar' },
  { icon: BarChart2, title: 'Medición para la Eficiencia del Talento Humano' },
  { icon: Scale, title: 'Marco Legal' },
  { icon: Shield, title: 'Seguridad y Salud en el Trabajo' },
  { icon: Camera, title: 'Seguridad Física y Electrónica en las Organizaciones' },
  { icon: Award, title: 'Sistema de Gestión de Calidad' },
]

export default function Servicios() {
  return (
    <section
      className="w-full py-20 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #f0faf6 0%, #ffffff 50%, #e8f8f2 100%)'
      }}
    >
      {/* DECORACIÓN FONDO */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(80px)', transform: 'translate(-30%, -30%)' }}
      />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(60px)', transform: 'translate(30%, 30%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-4 py-2 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-[#4FA58D] rounded-full animate-pulse" />
            Lo que ofrecemos
          </div>
          <h2 className="text-4xl font-bold text-[#2E2E2E]">
            NUESTROS{' '}
            <span className="text-[#4FA58D] relative">
              SERVICIOS
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#4FA58D] rounded-full opacity-40" />
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mt-2">
            Soluciones integrales diseñadas para optimizar cada etapa del ciclo
            de vida del talento en su organización.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-[#4FA58D]/10 p-6 flex items-start gap-4 hover:shadow-xl hover:shadow-[#4FA58D]/10 hover:scale-105 hover:border-[#4FA58D]/40 transition-all duration-300 group cursor-pointer"
            >
              {/* NÚMERO */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

              {/* ÍCONO */}
              <div className="flex-shrink-0 w-14 h-14 bg-[#4FA58D]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4FA58D] group-hover:shadow-lg group-hover:shadow-[#4FA58D]/30 transition-all duration-300">
                <servicio.icon
                  size={26}
                  className="text-[#4FA58D] group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* TEXTO */}
              <div className="flex-1">
                <div className="w-8 h-0.5 bg-[#4FA58D]/40 group-hover:bg-[#4FA58D] group-hover:w-full transition-all duration-500 mb-3 rounded-full" />
                <p className="text-[#2E2E2E] font-semibold text-sm leading-snug group-hover:text-[#4FA58D] transition-colors duration-300">
                  {servicio.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}