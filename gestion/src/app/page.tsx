import QuienesSomos from "@/UI/quienesSomos";
import GestionHumanos from "@/UI/gestionHumanos";
import Empleado from "@/UI/empleado";
import ServiciosView from "@/UI/serviciosView";


export default function Home() {
  return (
    <section>
      <GestionHumanos/>
      <QuienesSomos/>
      <Empleado/>
      <ServiciosView/>
    </section>
  );
}