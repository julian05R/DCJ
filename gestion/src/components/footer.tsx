import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E2E2E] text-white relative overflow-hidden">
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* LOGO + SLOGAN */}
        <div className="flex flex-col gap-3">
          <Image
            src="/logo.png"
            alt="DCJ Logo"
            width={120}
            height={60}
            className="object-contain"
          />
          <p className="text-gray-400 text-xs mt-2">
            Aliados en la administración de talento humano
          </p>
        </div>

        {/* ENLACES */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white text-sm tracking-wide">
            ENLACES
          </h3>
          <Link
            href="/servicios"
            className="text-gray-400 text-sm hover:text-[#4FA58D] transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="text-gray-400 text-sm hover:text-[#4FA58D] transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* CONTÁCTENOS */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white text-sm tracking-wide">
            CONTÁCTENOS
          </h3>
          <p className="text-gray-400 text-sm">+57 320 2111 1632</p>
          <p className="text-gray-400 text-sm">dcjtalentohumano3.0@gmail.com</p>
          <p className="text-gray-400 text-sm">Colombia</p>
        </div>

        {/* SÍGUENOS */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white text-sm tracking-wide">
            SÍGUENOS
          </h3>
          <div className="flex gap-4 mt-1">
            <a
              href="https://www.linkedin.com/in/claudia-patricia-pulido-cristancho-590b7278"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4FA58D] transition-colors"
            >
              {/* LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.609v5.587z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* DECORACIÓN VERDE DERECHA */}
      <div className="absolute right-0 bottom-0 opacity-20 z-0">
        <Image
          src="/bombillo.png"
          alt=""
          width={200}
          height={200}
          style={{ height: "auto" }}
          className="object-contain"
        />
      </div>

      {/* LÍNEA DIVISORIA */}
      <div className="border-t border-gray-600 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-gray-500 text-xs italic">
            2026 DCJ Talento Humano. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
