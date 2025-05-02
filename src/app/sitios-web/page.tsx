"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SitioWebCompleto() {
  const caracteristicas = [
    "Diseño profesional, moderno y 100% responsive",
    "Secciones personalizadas: Inicio, Nosotros, Servicios, Contacto, etc.",
    "Panel de administración opcional para editar contenidos",
    "Optimización para SEO (Google y buscadores)",
    "Integración con WhatsApp, redes sociales y mapas",
    "Formulario de contacto con envío directo al mail o WhatsApp",
    "Animaciones suaves para una experiencia atractiva",
    "Soporte técnico por 60 días post entrega",
    "Hosting gratuito por 1 año (opcional)",
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        Sitios Web <span className="text-cyan-400">que venden</span>
        </motion.h1>

        <motion.p
          className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ideal para negocios, profesionales o emprendimientos que necesitan una presencia online sólida, escalable y bien estructurada.
        </motion.p>

        <div className="grid gap-4 text-left max-w-2xl mx-auto">
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
            href="/cotizar"
            className="bg-cyan-500 hover:bg-cyan-400 transition text-white font-semibold py-3 px-6 rounded-lg"
          >
            Quiero cotizar mi Sitio Web
          </a>
        </div>
      </div>
    </section>
  );
}
