"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md shadow-[#4FA58D]/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <div className="py-0.5">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={60}
              loading="eager"
              style={{ height: "auto" }}
            />
          </Link>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex gap-8 py-4 text-xl">
          <Link
            href="/servicios"
            className={`px-2 py-1 rounded-md transition-colors ${
              pathname === "/servicios"
                ? "bg-[#4FA58D] text-white"
                : "text-gray-700 hover:bg-[#4FA58D] hover:text-white"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className={`px-2 py-1 rounded-md transition-colors ${
              pathname === "/contacto"
                ? "bg-[#4FA58D] text-white"
                : "text-gray-700 hover:bg-[#4FA58D] hover:text-white"
            }`}
          >
            Contacto
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA — solo en móvil */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-[#4FA58D]/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#4FA58D]/20 px-6 py-4 flex flex-col gap-3">
          <Link
            href="/servicios"
            onClick={() => setMobileOpen(false)}
            className={`px-3 py-2 rounded-md transition-colors text-base ${
              pathname === "/servicios"
                ? "bg-[#4FA58D] text-white"
                : "text-gray-700 hover:bg-[#4FA58D]/10"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className={`px-3 py-2 rounded-md transition-colors text-base ${
              pathname === "/contacto"
                ? "bg-[#4FA58D] text-white"
                : "text-gray-700 hover:bg-[#4FA58D]/10"
            }`}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
