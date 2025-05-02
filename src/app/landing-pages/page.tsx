"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function LandingPageServicio() {
  const caracteristicas = [
    "Diseño personalizado y responsive",
    "Optimización para celulares y tablets",
    "Formulario de contacto funcional",
    "Integración con redes sociales",
    "Animaciones suaves y llamadas a la acción",
    "Carga rápida y buenas prácticas de SEO",
    "Hosting gratuito por 1 año (opcional)",
    "Soporte técnico por 30 días post entrega",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center bg-slate-950 text-white px-6 py-20">
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Landing Pages <span className="text-cyan-400">que convierten</span>
      </motion.h1>

      <motion.p
        className="text-lg text-slate-300 mb-10 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Ideal para promocionar un producto, servicio o evento de forma clara y efectiva. Incluye todo lo necesario para captar la atención y convertir visitantes en clientes.
      </motion.p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Imagen con animación */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src="/mockupLandingFinal.png"
            alt="Mockup Landing"
            width={900}
            height={900}
            className="w-full max-w-[500px] md:max-w-[700px] xl:max-w-[850px] object-contain"
          />
        </motion.div>

        {/* Detalles a la izquierda (en mobile aparecen debajo por defecto) */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="grid gap-4">
            {caracteristicas.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-green-400 min-w-6 mt-1" />
                <p className="text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/cotizacion"
              className="bg-cyan-500 hover:bg-cyan-400 transition text-white font-semibold py-3 px-6 rounded-lg"
            >
              Quiero cotizar mi Landing Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
