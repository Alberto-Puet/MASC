"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-4 sm:px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "url('/fondo-home.jpg')" }}
    >
      {/* Overlay con degradado radial */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Contenido responsive */}
      <div className="container relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center sm:items-start sm:text-left sm:justify-start">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
        >
          Desarrollo de páginas web{" "}
          <span className="text-[#00E0FF] block">que convierten</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-100 font-medium mt-4 max-w-2xl"
        >
          Agencia de desarrollo web
        </motion.h1>

        <motion.a
          href="/cotizacion"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-block mt-6 px-6 py-3 sm:px-8 sm:py-3 bg-sky-800 text-white font-semibold rounded-sm hover:bg-sky-700 transition text-sm sm:text-base"
        >
          Quiero una web que venda
        </motion.a>
      </div>
    </section>
  );
}
