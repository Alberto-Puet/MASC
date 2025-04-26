"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Servicios() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-sky-900 text-center px-4 md:px-8 lg:px-16 py-20"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-xl text-white font-semibold"
      >
        Nuestros Servicios
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl text-white md:text-3xl font-bold mt-4"
      >
        Soluciones pensadas para potenciar tu negocio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="font-extralight text-white mt-4 max-w-3xl mx-auto"
      >
        Elegí el tipo de desarrollo que se adapta mejor a tus objetivos. En MASC
        no solo diseñamos sitios, construimos herramientas de venta digitales.
      </motion.p>

      {/* Grid de servicios */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {servicios.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-left"
          >
            <div className="text-cyan-500 text-3xl mb-4">
              <i className={item.icono}></i>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {item.titulo}
            </h3>
            <p className="text-sm text-gray-700">{item.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const servicios = [
  {
    icono: "ri-pages-line",
    titulo: "Landing Pages",
    descripcion:
      "Diseñadas para campañas publicitarias y ventas directas. Cada sección está pensada para captar atención y convertir.",
  },
  {
    icono: "ri-building-line",
    titulo: "Sitios Web Institucionales",
    descripcion:
      "Para empresas o profesionales que necesitan presencia online clara, profesional y adaptable.",
  },
  {
    icono: "ri-speed-up-line",
    titulo: "Optimización Web",
    descripcion:
      "Si ya tenés una web, la analizamos y mejoramos su velocidad, estructura y conversiones.",
  },
];
