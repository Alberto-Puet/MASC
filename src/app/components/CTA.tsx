"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 px-6 bg-sky-900 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
        ¿Listo para aumentar tus conversiones?
      </h2>
      <p className="mb-6">
        Hablemos sobre cómo podemos crear la web perfecta para tu negocio.
      </p>
      <a
        href="/cotizacion"
        className="inline-block px-6 py-3 bg-white text-sky-800 font-bold rounded-full hover:bg-gray-200 transition"
      >
        Quiero mi Web
      </a>
    </motion.section>
  );
}
