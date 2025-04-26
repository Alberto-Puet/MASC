export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo / Nombre */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">MASC</h3>
          <p className="text-sm text-gray-300">
            Creamos páginas web enfocadas en conversión y resultados reales para tu negocio.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-cyan-200">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-cyan-200">Servicios</a></li>
            <li><a href="#proyectos" className="hover:text-cyan-200">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-cyan-200">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-4">Seguinos</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-cyan-200" aria-label="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="hover:text-cyan-200" aria-label="LinkedIn">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href="#" className="hover:text-cyan-200" aria-label="WhatsApp">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>

        {/* Contacto o llamado a la acción */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-4">¿Listo para empezar?</h4>
          <p className="text-sm text-gray-300 mb-2">
            Cotizá tu web en pocos minutos.
          </p>
          <a
            href="/cotizacion"
            className="inline-block mt-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-4 rounded transition-all"
          >
            Cotizar mi web
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MASC. Todos los derechos reservados.
      </div>
    </footer>
  );
}
