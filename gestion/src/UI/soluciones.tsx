"use client"
import { useState } from 'react'
import { Users, ClipboardList, GraduationCap, Gift, BarChart2, Scale, Shield, Camera, Award, ChevronDown } from "lucide-react"


const solucionesItems = [
  {
    id: 1,
    icon: Users,
    title: "ATRACCION Y RETENCIÓN DEL TALENTO HUMANO",
    description: "En DCJ, Aliados en la administración del talento humano, conectamos a tu empresa con el mejor talento diseñamos e implementamos estrategias integrales y efectivas de atracción, evaluación y selección de talento, garantizando procesos confiables, seguros, objetivos y alineados con las necesidades de cada organización. Nuestro compromiso va más allá de la contratación: desarrollamos programas de inducción e integración que fortalecen la permanencia, el compromiso, la fidelidad y la productividad de los nuevos colaboradores, aportando valor sostenible al crecimiento de la empresa.",
    Items: ["Reclutamiento","Entrevistas por competencias", "Aplicación e interpretación de pruebas psicométricas", "Onboarding (acompañamiento en la inducción)",
            "Assessment center", "Estudios de seguridad" , "Visitas domiciliarias", "Informe final de selección", "Asesoría en diseño de perfiles de cargo"]
  },
  {
    id: 2,
    icon:  ClipboardList,
    title: "ASESORIA EN LA ADMINISTRACION Y PROCESOS DEL AREA DE TALENTO HUMANO",
    description: "Optimizamos la gestión del área de Talento Humano mediante el diseño, implementación y administración de procesos eficientes que garantizan el cumplimiento normativo, la transparencia y la eficiencia operativa. Nuestro enfoque está orientado a brindar soluciones integrales en contratación, nómina, bienestar, capacitación y desarrollo, asegurando que cada proceso contribuya a fortalecer la cultura organizacional, mejorar la experiencia del colaborador y apoyar el logro de los objetivos estratégicos de la empresa.",
    Items: ["Manual de competencias y funciones"]
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "PROGRAMAS DE CAPACITACIÓN Y FORMACIÓN",
    description: "Diseñamos e implementamos programas de capacitación y formación adaptados a las necesidades de cada organización, orientados al desarrollo de competencias técnicas, blandas y de liderazgo. Nuestras metodologías prácticas y participativas aseguran la transferencia del conocimiento al puesto de trabajo, fortaleciendo el desempeño individual y colectivo, impulsando la productividad y contribuyendo al crecimiento sostenible de la empresa.",
    Items: ["Escuela de ventas","Escuela de lideres", "Plan semillero", "Plan carrera Programa de transición de conocimientos"]
  },
  {
    id:4,
    icon: Gift,
    title: "PLAN DE BENEFICIOS Y BIENESTAR",
    description: "Realizamos diagnósticos precisos de necesidades organizacionales para identificar fortalezas y oportunidades de mejora en el ambiente, la cultura y el clima laboral. A partir de estos hallazgos, estructuramos programas y alianzas estratégicas que fortalecen la integración, promueven un clima laboral positivo y generan un sólido sentido de pertenencia hacia la misión de la empresa.",
    Items:["Evaluación de clima organizacional", "Plan de beneficios", "Plan de bienestar", "Gestión de alianzas corporativas"]
  },
  {
    id:5,
     icon: BarChart2,
    title: "MEDICIÓN PARA LA EFICIENCIA DEL TALENTO HUMANO",
    description: "Implementamos metodologías de evaluación y medición que permiten conocer con precisión la eficiencia del talento humano en cada nivel de la organización. Nuestros diagnósticos integrales identifican fortalezas, brechas y oportunidades de mejora en desempeño, productividad y competencias, generando información confiable para la toma de decisiones estratégicas. Con ello, apoyamos a las empresas en la optimización de sus recursos, el fortalecimiento de su cultura organizacional y el logro de sus objetivos de negocio.",
    Items:["Evaluación de competencias", "Evaluación en periodo de prueba", "Evaluación de desempeño"]
  },
  {
    id:6,
     icon: Scale,
    title: "MERCO LEGAL",
    description: "Asesoramos y acompañamos a las organizaciones en la correcta aplicación de los parámetros legales, garantizando el cumplimiento de la normatividad vigente y reduciendo riesgos laborales, administrativos y legales. Nuestro enfoque asegura procesos confiables, transparentes y alineados con las obligaciones legales de la empresa.",
    Items:[ "asesoria de contratacion","auditorias en el pago de seguridad social","Auditorias en todos los procesos administrativos del Talento Humano","Manejo de cuota sena","procesos diciplinarios",
            "Elaboración del Reglamento Interno de trabajo", "Aplicación del código sustantivo del trabajo", "Nómina electrónica"] 
  },
  {
    id:7,
     icon: Shield,
    title: "SEGURIDAD Y SALUD EN EL TRABAJO ",
    description: "Diseñamos, asesoramos e implementamos el Sistema de Gestión de Seguridad y Salud en el Trabajo en todas las etapas del ciclo PHVA, utilizando metodologías prácticas y comprensibles para los colaboradores involucrados. De esta manera, garantizamos el cumplimiento de los lineamientos establecidos en la normativa vigente (Decreto 1072 de 2015 y Resolución 0312 de 2019).",
    Items: [
            {grupo: "PLANIFICACIÓN", subItems: ["Evaluación inicial SG-SST","Identificación de peligros","Matriz Legal", "Definición de objetivos","Responsabilidades","Definición de Recursos","Plan anual de trabajo","Indicadores del SG-SST" ],},
            {grupo:"HACER", subItems: ["Documentación del SG-SST"," Prevención, preparación y respuesta   ante emergencias","Programas de intervención del riesgo y PVE","Gestión de accidentes e incidentes","Conformación de COPASST y Comité de Convivencia laboral","Aplicación de la batería de riesgo psicosocial","Programas de riesgo psicosocial","Elaboración del plan formacióne inducción",],},
            {grupo: "AUDITORÍA Y REVISIÓN",subItems: ["Auditoria del SG-SST","Indicadores de estructura, proceso y resultado","Elaboración de informes técnicos y diseño de   planes de intervención efectivos, orientados a   proteger la salud mental y el bienestar de los colaboradores, fortaleciendo así la productividad  y el clima organizacional","Revisión por la alta dirección",],},
            {grupo: "ACTUAR",subItems: ["Acciones preventivas y correctivas"]}
            ]
},
{
    id:8,
     icon: Camera,
    title: "SEGURIDAD FÍSICA Y ELECTRÓNICA EN LAS ORGANIZACIONES",
    description: "Brindamos una solución de seguridad integral diseñada para proteger completamente su empresa, fusionando la robustez de la seguridad física con la inteligencia de la seguridad electrónica de vanguardia. Brindamos una solución de seguridad integral diseñada para proteger completamente su empresa, fusionando la robustez de la seguridad física con la inteligencia de la seguridad electrónica de vanguardia. Mediante el uso de herramientas avanzadas y soluciones basadas en Mediante el uso de herramientas avanzadas y soluciones basadas en Inteligencia Artificial (IA), optimizamos Inteligencia Artificial (IA), optimizamos sus recursos para crear un ecosistema sus recursos para crear un ecosistema de protección eficaz, protegiendo sus de protección eficaz, protegiendo sus activos y personal 24/7. Además, vamos un paso más allá con nuestra asesoría especializada y auditorías en seguridad aplicada a su organización como a sus activos y personal 24/7. Además, vamos un paso más allá con nuestra asesoría especializada y auditorías en seguridad aplicada a su organización como a sus proveedores, proveedores, donde donde identificamos identificamos proactivamente las vulnerabilidades en sus instalaciones y procesos. Permita que nuestro equipo de profesionales altamente capacitados implemente proactivamente las vulnerabilidades en sus instalaciones y procesos. Permita que nuestro equipo de profesionales altamente capacitados implemente medidas confiables para anticipar sus medidas confiables para anticipar sus amenazas y reducir sus riesgos, asegurar la continuidad de su negocio y brindarle la total tranquilidad que necesita para enfocarse en su estrategia empresarial. amenazas y reducir sus riesgos, asegurar la continuidad de su negocio y brindarle la total tranquilidad que necesita para enfocarse en su estrategia empresarial.",
    Items:[]
},
{
    id:9,
      icon: Award,
    title: "SISTEMA DE GESTION DE CALIDAD",
    description: "Ofrecemos asesoría y acompañamiento en la implementación, mantenimiento y mejora continua de Sistemas de Gestión de Calidad, asegurando el cumplimiento de estándares y normatividad vigente. Nuestro equipo, facultado como auditores internos, garantiza procesos confiables, evaluaciones objetivas y recomendaciones efectivas que fortalecen la eficiencia operativa y elevan la competitividad de su organización.",
    Items: []
}
]
export default function Soluciones() {
  const [activo, setActivo] = useState<number | null>(null)

  const toggle = (id: number) => {
    setActivo(activo === id ? null : id)
  }

  return (
    <section
      className="w-full py-20 overflow-hidden relative"
      style={{ background: 'linear-gradient(135deg, #f0faf6 0%, #ffffff 50%, #e8f8f2 100%)' }}
    >
      {/* DECORACIÓN FONDO */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-4 py-2 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-[#4FA58D] rounded-full animate-pulse" />
            Lo que ofrecemos
          </div>
          <h1 className="text-4xl font-bold text-[#2E2E2E]">
            NUESTRAS{' '}
            <span className="text-[#4FA58D] relative">
              SOLUCIONES
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#4FA58D] rounded-full opacity-40" />
            </span>
          </h1>
          <p className="text-gray-500 text-base max-w-xl mt-2">
            Soluciones integrales diseñadas para optimizar cada etapa del ciclo de vida del talento en su organización.
          </p>
        </div>

        {/* ACORDEÓN */}
        <div className="flex flex-col gap-4">
          {solucionesItems.map((item) => {
            const Icon = item.icon
            const estaActivo = activo === item.id
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${
                  estaActivo ? 'border-[#4FA58D] shadow-lg shadow-[#4FA58D]/10' : 'border-[#4FA58D]/10 hover:border-[#4FA58D]/40'
                }`}
              >
                {/* CABECERA */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center gap-4 p-6 text-left group"
                >
                  {/* ÍCONO */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    estaActivo ? 'bg-[#4FA58D] shadow-lg shadow-[#4FA58D]/30' : 'bg-[#4FA58D]/10 group-hover:bg-[#4FA58D]'
                  }`}>
                    <Icon size={22} className={`transition-colors duration-300 ${estaActivo ? 'text-white' : 'text-[#4FA58D] group-hover:text-white'}`} />
                  </div>

                  {/* TÍTULO */}
                  <div className="flex-1">
                    <div className={`w-8 h-0.5 rounded-full mb-1 transition-all duration-300 ${estaActivo ? 'bg-[#4FA58D] w-16' : 'bg-[#4FA58D]/30'}`} />
                    <p className={`font-bold text-sm leading-snug transition-colors duration-300 ${estaActivo ? 'text-[#4FA58D]' : 'text-[#2E2E2E]'}`}>
                      {item.title}
                    </p>
                  </div>

                  {/* CHEVRON */}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#4FA58D] transition-transform duration-300 ${estaActivo ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* CONTENIDO EXPANDIDO */}
                {estaActivo && (
                  <div className="px-6 pb-6 border-t border-[#4FA58D]/10">
                    <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-4">
                      {item.description}
                    </p>

                    {/* ITEMS */}
                    {item.Items && item.Items.length > 0 && typeof item.Items[0] === 'object' && 'grupo' in item.Items[0] ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {(item.Items as { grupo: string; subItems: string[] }[]).map((g, i) => (
                          <div key={i} className="bg-[#f0faf6] rounded-xl p-4">
                            <p className="text-xs font-bold text-[#4FA58D] mb-2 tracking-wide">{g.grupo}</p>
                            <ul className="flex flex-col gap-1">
                              {g.subItems.map((sub, j) => (
                                <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#4FA58D] shrink-0 mt-1" />
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : item.Items && item.Items.length > 0 ? (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(item.Items as string[]).map((subitem, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4FA58D] shrink-0" />
                            {subitem}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


