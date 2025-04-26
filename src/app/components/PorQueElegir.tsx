"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "remixicon/fonts/remixicon.css";

export default function PorQueElegir() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // se dispara solo una vez

  return (
    <section
      ref={ref}
      className="bg-slate-100 min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-16 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-xl text-cyan-500 font-semibold"
      >
        ¿Por qué elegir MASC?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-black mt-4"
      >
        Porque desarrollamos páginas web que convierten
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-extralight text-lg md:text-xl text-black mt-4 max-w-3xl mx-auto"
      >
        En <span className="text-cyan-500 font-bold">MASC</span>, creamos sitios
        enfocados en resultados. Cada decisión de diseño está pensada para
        llevar al usuario a tomar acción.
      </motion.p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {beneficios.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            className="bg-sky-900 p-6 rounded-xl shadow-lg text-white text-center"
          >
            <i className={`${item.icono} text-3xl text-cyan-300`} />
            <h3 className="text-lg font-semibold text-cyan-300 mt-4 mb-2">
              {item.titulo}
            </h3>
            <p className="text-sm text-gray-200">{item.descripcion}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-16"
      >
        <h3 className="text-black font-bold text-lg">
          ¿Querés una web que trabaje para vos las 24 hs?
        </h3>
        <a href="/cotizacion" className="mt-4 text-white inline-block bg-cyan-600 hover:bg-cyan-400 hover:text-black transition-all px-6 py-2 rounded font-semibold cursor-pointer">

          Cotizar mi web
        </a>
      </motion.div>
    </section>
  );
}

const beneficios = [
  {
    icono: "ri-quill-pen-line",
    titulo: "Copywriting persuasivo",
    descripcion:
      "Escribimos textos que conectan con tus clientes ideales y los guían a la acción.",
  },
  {
    icono: "ri-bar-chart-line",
    titulo: "SEO desde el día 1",
    descripcion:
      "Aplicamos buenas prácticas de SEO para que tu web sea visible en Google desde el inicio.",
  },
  {
    icono: "ri-flashlight-line",
    titulo: "Carga ultra rápida",
    descripcion:
      "Optimizamos cada línea de código para que tu web cargue en milisegundos.",
  },
  {
    icono: "ri-device-line",
    titulo: "Diseño responsive",
    descripcion:
      "Tu web se verá increíble en celulares, tablets y computadoras.",
  },
];
