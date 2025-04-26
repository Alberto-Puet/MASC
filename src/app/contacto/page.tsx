"use client";
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section className="bg-sky-950 py-24 px-6 text-center" id="contacto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        ¿Tenés una idea más compleja en mente?
      </motion.h2>

      <motion.p
        className="mt-4 text-white max-w-xl mx-auto text-lg"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Si tu proyecto requiere algo especial, escribime directamente y lo charlamos.
      </motion.p>

      <motion.form
        className="mt-10 max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          placeholder="Tu email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          rows={4}
          placeholder="Contame sobre tu proyecto..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-sm transition"
        >
          Enviar mensaje
        </button>
      </motion.form>
    </section>
  );
}
