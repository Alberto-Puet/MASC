"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const pasos = [
  {
    pregunta: "¿Qué tipo de proyecto necesitás?",
    opciones: [
      { texto: "Landing Page", precio: 100 },
      { texto: "Sitio Web Empresarial", precio: 200 },
      { texto: "Tienda Online", precio: 350 },
    ],
  },
  {
    pregunta: "¿Qué secciones o páginas querés incluir?",
    opciones: [
      { texto: "Inicio", precio: 30 },
      { texto: "Nosotros", precio: 40 },
      { texto: "Servicios", precio: 50 },
      { texto: "Contacto", precio: 30 },
      { texto: "Preguntas frecuentes", precio: 25 },
    ],
    multiple: true,
  },
  {
    pregunta: "¿Qué funcionalidades necesitás?",
    opciones: [
      { texto: "Formulario de contacto", precio: 40 },
      { texto: "Integración con redes sociales", precio: 25 },
      { texto: "Blog autoadministrable", precio: 60 },
      { texto: "Panel de administración", precio: 120 },
      { texto: "Pasarela de pago", precio: 90 },
    ],
    multiple: true,
  },
];

export default function SelectorDeNecesidades() {
  const [step, setStep] = useState(0);
  const [selecciones, setSelecciones] = useState<{ [key: string]: number }>({});
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const manejarSeleccion = (texto: string, precio: number, multiple = false) => {
    const clave = `${step}-${texto}`;
    setSelecciones((prev) => {
      if (multiple) {
        return clave in prev
          ? Object.fromEntries(Object.entries(prev).filter(([k]) => k !== clave))
          : { ...prev, [clave]: precio };
      } else {
        const filtrado = Object.fromEntries(
          Object.entries(prev).filter(([k]) => !k.startsWith(`${step}-`))
        );
        return { ...filtrado, [clave]: precio };
      }
    });
  };

  const eliminarSeleccion = (clave: string) => {
    setSelecciones((prev) => {
      const nuevo = { ...prev };
      delete nuevo[clave];
      return nuevo;
    });
  };

  const total = Object.values(selecciones).reduce((acc, val) => acc + val, 0);

  return (
    <section className="bg-slate-950 h-screen py-20 px-6 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cotizá tu web a medida
      </motion.h2>

      <div className="max-w-xl mx-auto text-white">
        {!mostrarResumen ? (
          <>
            <p className="text-lg font-semibold mb-4">{pasos[step].pregunta}</p>
            <div className="grid gap-4 grid-cols-1">
              {pasos[step].opciones.map(({ texto, precio }) => {
                const clave = `${step}-${texto}`;
                const activo = clave in selecciones;
                return (
                  <button
                    key={texto}
                    onClick={() => manejarSeleccion(texto, precio, pasos[step].multiple)}
                    className={`border rounded-lg py-3 px-4 transition-all duration-300 text-left ${
                      activo
                        ? "bg-cyan-600 text-white border-cyan-400"
                        : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                    }`}
                  >
                    <strong>{texto}</strong>
                    <span className="block text-sm">+${precio} USD</span>
                  </button>
                );
              })}
            </div>

            {/* Resumen en tiempo real */}
            <div className="mt-10 bg-slate-800 p-4 rounded-xl">
              <h4 className="font-semibold mb-2">Resumen parcial:</h4>
              <ul className="text-sm text-left space-y-1">
                {Object.entries(selecciones).map(([k, precio]) => (
                  <li key={k} className="flex justify-between items-center">
                    <span>{k.split("-")[1]}</span>
                    <div className="flex items-center gap-2">
                      <span>${precio}</span>
                      <button
                        onClick={() => eliminarSeleccion(k)}
                        className="text-red-400 hover:text-red-300"
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-2 font-bold">Total: ${total} USD</div>
            </div>

            <div className="mt-8 flex justify-center flex-wrap gap-4">
              {step > 0 && (
                <button
                  onClick={() => {
                    // Eliminar selecciones del paso actual al volver atrás
                    setSelecciones((prev) => {
                      return Object.fromEntries(
                        Object.entries(prev).filter(([k]) => !k.startsWith(`${step}-`))
                      );
                    });
                    setStep((prev) => prev - 1);
                  }}
                  className="bg-slate-700 text-white px-6 py-2 rounded hover:bg-slate-600 transition"
                >
                  Atrás
                </button>
              )}
              {step < pasos.length - 1 ? (
                <button
                  onClick={() => setStep((prev) => prev + 1)}
                  className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-400 transition"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={() => setMostrarResumen(true)}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 transition"
                >
                  Finalizar cotización
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-4">Resumen de tu cotización</h3>
            <div className="bg-slate-800 p-6 rounded-xl shadow max-w-md mx-auto text-left">
              <ul className="text-slate-300 space-y-1 text-sm">
                {Object.entries(selecciones).map(([k, precio]) => (
                  <li key={k} className="flex justify-between items-center">
                    <span>{k.split("-")[1]}</span>
                    <span className="text-white font-medium">${precio}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-700 mt-4 pt-2 text-white font-bold">
                Total estimado: <span className="text-green-400">${total} USD</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center flex-wrap gap-4">
              <button
                onClick={() => setMostrarResumen(false)}
                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-400 transition"
              >
                Editar selección
              </button>
              <button
                onClick={() => {
                  setSelecciones({});
                  setStep(0);
                  setMostrarResumen(false);
                }}
                className="bg-slate-700 text-white px-6 py-2 rounded hover:bg-slate-600 transition"
              >
                Volver al inicio
              </button>
              <button
                onClick={() => alert("Cotización enviada (simulado)")}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 transition"
              >
                Enviar cotización
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
