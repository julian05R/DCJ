import { Users, ClipboardList, GraduationCap, Gift, BarChart2, Scale, Shield, Camera, Award } from 'lucide-react'

const servicios = [
  {
    icon: Users,
    title: 'Atracción y Retención del Talento Humano',
  },
  {
    icon: ClipboardList,
    title: 'Asesoría en la Administración y Procesos del Área de Talento Humano',
  },
  {
    icon: GraduationCap,
    title: 'Programas de Capacitación y Formación',
  },
  {
    icon: Gift,
    title: 'Plan de Beneficios y Bienestar',
  },
  {
    icon: BarChart2,
    title: 'Medición para la Eficiencia del Talento Humano',
  },
  {
    icon: Scale,
    title: 'Marco Legal',
  },
  {
    icon: Shield,
    title: 'Seguridad y Salud en el Trabajo',
  },
  {
    icon: Camera,
    title: 'Seguridad Física y Electrónica en las Organizaciones',
  },
  {
    icon: Award,
    title: 'Sistema de Gestión de Calidad',
  },
]

export default function Servicios() {
  return (
    <section className="w-full bg-[#edfaf5] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2E2E2E] italic">
            NUESTROS <span className="text-[#4FA58D]">SERVICIOS</span>
          </h2>
          <div className="w-12 h-1 bg-[#4FA58D] mx-auto mt-3 rounded-full" />
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-[#c8f0e4] p-6 flex items-start gap-4 hover:shadow-md hover:border-[#4FA58D] transition-all duration-300 group"
            >
              {/* ÍCONO */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#edfaf5] rounded-lg flex items-center justify-center group-hover:bg-[#4FA58D] transition-colors duration-300">
                <servicio.icon
                  size={24}
                  className="text-[#4FA58D] group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* TEXTO */}
              <div className="flex-1">
                <div className="w-6 h-0.5 bg-[#4FA58D] mb-2" />
                <p className="text-[#2E2E2E] font-semibold text-sm leading-snug">
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