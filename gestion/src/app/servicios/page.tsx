import Soluciones from "@/UI/soluciones";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Soluciones />
    </Suspense>
  );
}
