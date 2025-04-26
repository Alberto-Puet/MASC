"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PreguntasFrecuentes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const preguntas = [
    {
      pregunta: "¿Cuánto tarda en estar lista mi web?",
      respuesta:
        "Depende del tipo de web. Una landing page puede estar lista en pocos días, mientras que un sitio institucional puede llevar entre 1 a 2 semanas.",
    },
    {
      pregunta: "¿Puedo pedir cambios luego de publicada?",
      respuesta:
        "¡Sí! Incluimos una ronda de ajustes después de la publicación. Además, ofrecemos planes de mantenimiento mensual si querés que nos encarguemos de todo.",
    },
    {
      pregunta: "¿Cómo es el proceso de trabajo?",
      respuesta:
        "Primero escuchamos tu idea, luego diseñamos una propuesta visual y funcional. Una vez aprobada, desarrollamos y lanzamos tu web lista para convertir.",
    },
    {
      pregunta: "¿Necesito tener conocimientos técnicos?",
      respuesta:
        "Para nada. Nos encargamos de todo el proceso técnico, vos solo nos contás qué necesitás y nosotros lo hacemos realidad.",
    },
  ];

  const [abierta, setAbierta] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAbierta((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={ref}
      className="bg-slate-100 min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-16 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-xl text-cyan-500 font-semibold"
      >
        Preguntas Frecuentes
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-black mt-4"
      >
        Respondemos tus dudas más comunes
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-extralight text-lg md:text-xl text-black mt-4 max-w-3xl mx-auto"
      >
        Sabemos que dar el primer paso puede generar preguntas. Acá te
        respondemos las más importantes antes de empezar.
      </motion.p>

      <div className="mt-12 max-w-4xl mx-auto w-full text-left space-y-4">
        {preguntas.map((item, index) => {
          const isOpen = abierta === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full bg-sky-200 rounded-sm flex justify-between items-center p-5 text-left cursor-pointer"
              >
                <span className="text-cyan-700 font-semibold text-lg">
                  {item.pregunta}
                </span>
                <span className="text-cyan-500 text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{item.respuesta}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="mt-16"
      >
        <h3 className="text-black font-bold text-lg">
          ¿Tenés otra pregunta? Escribinos y la respondemos.
        </h3>
        <a href="/contacto" className="mt-4 inline-block text-white bg-cyan-600 hover:bg-cyan-400 hover:text-black transition-all px-6 py-2 rounded font-semibold cursor-pointer">

          Contactanos
        </a>
      </motion.div>
    </section>
  );
}
