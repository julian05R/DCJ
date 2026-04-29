import QuienesSomos from "@/UI/quienesSomos";
import GestionHumanos from "@/UI/gestionHumanos";
import NuestroSueno from "@/UI/nuestroSueno";
import Empleado from "@/UI/empleado";
import Servicios from "@/UI/servicios";


export default function Home() {
  return (
    <section className="">
      <GestionHumanos/>
      <QuienesSomos/>
      <NuestroSueno/>
      <Empleado/>
      <Servicios/>
    </section>
  );
}