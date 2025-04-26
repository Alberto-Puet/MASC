"use client";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <div
      className="relative h-screen px-6 py-24 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-nosotros.jpg')" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      <div className="relative z-10">
        <p className="text-white font-semibold text-lg">Quiénes somos</p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mt-4"
        >
          Pasión por el diseño, enfoque en resultados
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-white max-w-3xl mx-auto text-lg leading-relaxed"
        >
          En MASC combinamos creatividad, estrategia y tecnología para crear sitios web que no solo se ven bien, sino que también convierten. Somos un equipo multidisciplinario que trabaja con compromiso y dedicación en cada proyecto. Nuestra misión es potenciar la presencia digital de nuestros clientes, ayudándolos a crecer con soluciones a medida.
        </motion.p>
      </div>
    </div>
  );
}
