# DCJ Talento Humano 🧠

Página web institucional para **DCJ Talento Humano**, empresa especializada en la administración y gestión del talento humano en Colombia.

🔗 **[Ver sitio en producción](https://dcj-talento.vercel.app)**

---

## 📋 Descripción

DCJ Talento Humano es el aliado estratégico de las organizaciones en la administración y gestión del talento humano, ofreciendo soluciones integrales que optimizan cada etapa del ciclo de vida del colaborador: atracción, contratación, retención y desarrollo.

---

## 🚀 Tecnologías utilizadas

| Tecnología                                      | Versión | Uso                   |
| ----------------------------------------------- | ------- | --------------------- |
| [Next.js](https://nextjs.org/)                  | 16.x    | Framework principal   |
| [React](https://react.dev/)                     | 19.x    | Librería de UI        |
| [TypeScript](https://www.typescriptlang.org/)   | 5.x     | Tipado estático       |
| [Tailwind CSS](https://tailwindcss.com/)        | 4.x     | Estilos               |
| [Lucide React](https://lucide.dev/)             | 1.x     | Íconos                |
| [React Hook Form](https://react-hook-form.com/) | 7.x     | Manejo de formularios |
| [Zod](https://zod.dev/)                         | 3.x     | Validación de datos   |
| [EmailJS](https://www.emailjs.com/)             | —       | Envío de emails       |

---

## 📁 Estructura del proyecto

```
gestion/
├── public/                     # Archivos estáticos
│   ├── logo.png
│   ├── ceo.png
│   ├── bombillo.png
│   └── bombillito.png
├── src/
│   ├── app/                    # Rutas de Next.js
│   │   ├── page.tsx            # Página principal (Home)
│   │   ├── layout.tsx          # Layout global
│   │   ├── contacto/           # Página de contacto
│   │   │   └── page.tsx
│   │   └── servicios/          # Página de servicios
│   │       └── page.tsx
│   ├── components/             # Componentes reutilizables
│   │   ├── navbar.tsx          # Barra de navegación
│   │   └── footer.tsx          # Pie de página
│   └── UI/                     # Componentes de secciones
│       ├── gestionHumanos.tsx  # Hero section
│       ├── quienesSomos.tsx    # Quiénes somos y Nuestro Sueño
│       ├── empleado.tsx        # CEO & Fundadora
│       ├── serviciosView.tsx   # Vista de servicios en Home
│       ├── soluciones.tsx      # Acordeón de servicios
│       └── contacto.tsx        # Formulario de contacto
├── .env.local                  # Variables de entorno (no incluido en git)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 📄 Páginas

| Ruta         | Descripción                                |
| ------------ | ------------------------------------------ |
| `/`          | Home — Hero, Quiénes Somos, CEO, Servicios |
| `/servicios` | Acordeón con los 9 servicios detallados    |
| `/contacto`  | Formulario de contacto con envío de email  |

---

## ✨ Funcionalidades

- ✅ Diseño responsive — móvil, tablet y desktop
- ✅ Navbar con menú hamburguesa en móvil
- ✅ Sección Hero con stats animados
- ✅ Timeline de Quiénes Somos y Nuestro Sueño
- ✅ Sección CEO & Fundadora
- ✅ Grid de servicios con hover effects
- ✅ Acordeón de servicios con navegación directa desde Home
- ✅ Scroll automático al servicio seleccionado
- ✅ Formulario de contacto con validación
- ✅ Envío de emails con EmailJS
- ✅ Deploy continuo en Vercel

---

## ⚙️ Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

---

## 🛠️ Instalación y uso local

```bash
# 1. Clona el repositorio
git clone https://github.com/julian05R/DCJ.git

# 2. Entra a la carpeta del proyecto
cd DCJ/gestion

# 3. Instala las dependencias
npm install

# 4. Crea el archivo .env.local con tus variables de entorno

# 5. Corre el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

---

## 🚀 Deploy

El proyecto está desplegado en **Vercel** con deploy continuo desde la rama `main`.

Cada `git push` a `main` genera un nuevo deploy automáticamente.

---

## 📞 Contacto

**DCJ Talento Humano**

- 📧 dcjtslentohumano3.0@gmail.com
- 📱 +57 320 2111 1632
- 🌍 Colombia
- 🔗 [LinkedIn](https://www.linkedin.com/in/claudia-patricia-pulido-cristancho-590b7278)

---

## 👨‍💻 Desarrollado por

**Julian Esteban Rodriguez Pulido**

---

_2026 DCJ Talento Humano. Todos los derechos reservados._
