'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { Send, User, Mail, Phone, MapPin, Briefcase, CheckCircle } from 'lucide-react'

const schema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  telefono: z.string().min(7, 'Ingresa un teléfono válido'),
  ciudad: z.string().min(2, 'Ingresa tu ciudad'),
  servicio: z.string().min(1, 'Selecciona un servicio'),
})

type FormData = z.infer<typeof schema>

const servicios = [
  'Atracción y Retención del Talento Humano',
  'Asesoría en Administración y Procesos de Talento Humano',
  'Programas de Capacitación y Formación',
  'Plan de Beneficios y Bienestar',
  'Medición para la Eficiencia del Talento Humano',
  'Marco Legal',
  'Seguridad y Salud en el Trabajo',
  'Seguridad Física y Electrónica',
  'Sistema de Gestión de Calidad',
]

export default function Contacto() {
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setEnviando(true)  // ← activa spinner
    setError(false)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          ciudad: data.ciudad,
          servicio: data.servicio,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setEnviado(true)  // ← éxito
      reset()
    } catch (err) {
      setError(true)    // ← error
    } finally {
      setEnviando(false) // ← apaga spinner siempre
    }
  }

  return (
    <section
      className="w-full min-h-screen py-20 relative overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(135deg, #f0faf6 0%, #ffffff 50%, #e8f8f2 100%)' }}
    >
      {/* DECORACIÓN FONDO */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#4FA58D', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }} />

      {/* CONTENEDOR */}
      <div className="max-w-2xl mx-auto px-6 w-full relative z-10">

        {/* HEADER */}
        <div className="text-center mb-10 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-[#4FA58D]/10 text-[#4FA58D] px-4 py-2 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-[#4FA58D] rounded-full animate-pulse" />
            Contáctenos
          </div>
          <h1 className="text-4xl font-bold text-[#2E2E2E]">
            SOLICITA{' '}
            <span className="text-[#4FA58D] relative">
              INFORMACIÓN
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#4FA58D] rounded-full opacity-40" />
            </span>
          </h1>
          <p className="text-gray-500 text-base max-w-md">
            Envíanos tu información y el servicio que requieres, nos pondremos en contacto lo más rápido posible.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#4FA58D]/10 p-8">

          {/* PANTALLA ÉXITO */}
          {enviado && (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="w-20 h-20 bg-[#4FA58D]/10 rounded-full flex items-center justify-center">
                <CheckCircle size={40} className="text-[#4FA58D]" />
              </div>
              <h2 className="text-2xl font-bold text-[#2E2E2E]">¡Información enviada!</h2>
              <p className="text-gray-500">
                Su solicitud ha sido recibida con éxito. Nos pondremos en contacto pronto.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-4 bg-[#4FA58D] hover:bg-[#3e8f79] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Enviar otra solicitud
              </button>
            </div>
          )}

          {/* FORMULARIO */}
          {!enviado && (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

              {/* NOMBRE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#2E2E2E] flex items-center gap-2">
                  <User size={14} className="text-[#4FA58D]" /> Nombre completo
                </label>
                <input
                  {...register('nombre')}
                  placeholder="Ej: Juan García"
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                    errors.nombre ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#4FA58D]'
                  }`}
                />
                {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#2E2E2E] flex items-center gap-2">
                  <Mail size={14} className="text-[#4FA58D]" /> Correo electrónico
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Ej: juan@empresa.com"
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                    errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#4FA58D]'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* TELÉFONO Y CIUDAD */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#2E2E2E] flex items-center gap-2">
                    <Phone size={14} className="text-[#4FA58D]" /> Teléfono
                  </label>
                  <input
                    {...register('telefono')}
                    placeholder="Ej: 320 2111 1632"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                      errors.telefono ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#4FA58D]'
                    }`}
                  />
                  {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#2E2E2E] flex items-center gap-2">
                    <MapPin size={14} className="text-[#4FA58D]" /> Ciudad
                  </label>
                  <input
                    {...register('ciudad')}
                    placeholder="Ej: Bogotá"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                      errors.ciudad ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#4FA58D]'
                    }`}
                  />
                  {errors.ciudad && <p className="text-red-500 text-xs mt-1">{errors.ciudad.message}</p>}
                </div>
              </div>

              {/* SERVICIO */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#2E2E2E] flex items-center gap-2">
                  <Briefcase size={14} className="text-[#4FA58D]" /> Tipo de servicio
                </label>
                <select
                  {...register('servicio')}
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                    errors.servicio ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#4FA58D]'
                  }`}
                >
                  <option value="">Selecciona un servicio</option>
                  {servicios.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
                {errors.servicio && <p className="text-red-500 text-xs mt-1">{errors.servicio.message}</p>}
              </div>

              {/* ERROR GENERAL */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                  Hubo un error al enviar. Por favor intenta de nuevo.
                </div>
              )}

              {/* BOTÓN */}
              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-[#4FA58D] hover:bg-[#3e8f79] disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg shadow-[#4FA58D]/30 hover:scale-105 flex items-center justify-center gap-2"
              >
                {enviando ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar solicitud
                  </>
                )}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  )
}