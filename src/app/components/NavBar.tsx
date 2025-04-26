"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const linkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-slate-900 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">MASC</Link>

        {/* Ícono móvil */}
        <div className="lg:hidden text-white text-3xl cursor-pointer z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Links desktop */}
        <ul className="hidden lg:flex gap-6 text-white font-medium items-center">
          <li className="relative group">
            <a href="#servicios" className="cursor-pointer flex items-center">
              Servicios
              <IoIosArrowDown className="ml-1" />
            </a>
            <ul className="absolute top-full left-0 mt-2 bg-slate-900 text-white rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] z-50">
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer"><a href="/landing-pages">Landing Pages</a></li>
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer"><a href="/sitios-web">Sitios Webs</a></li>
            </ul>
          </li>
          <li><a href="/sobre-nosotros">Nosotros</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>

        <a
          href="/cotizacion"
          className="hidden lg:inline-block bg-sky-700 text-white px-4 py-2 rounded-sm font-light  hover:bg-sky-600 transition-all"
        >
          Cotización
        </a>
      </nav>

      {/* Sidebar y overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black z-40"
              onClick={handleClose}
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: "15%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[85%] h-screen bg-slate-900 z-50 px-6 py-8 flex flex-col text-white shadow-xl overflow-y-auto"
            >
              {/* Cruz de cierre dentro del sidebar */}
              <div className="self-end text-3xl mb-4 z-[60]" onClick={handleClose}>
                <HiX className="cursor-pointer" />
              </div>

              <div className="mt-6 flex flex-col gap-6">
                {/* Links con animación en cascada */}
                {[
                  { label: "Servicios", hasDropdown: true },
                  { label: "Nosotros", href: "/sobre-nosotros" },
                  { label: "Contacto", href: "/contacto" },
                ].map((item, i) =>
                  item.hasDropdown ? (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-col"
                    >
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex justify-between items-center w-full text-lg"
                      >
                        <span>{item.label}</span>
                        <IoIosArrowDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {dropdownOpen && (
                        <div className="mt-2 ml-4 flex flex-col gap-2 text-sm text-cyan-300">
                          <Link href="/landing-pages">Landing Pages</Link>
                          <Link href="/sitios-web">Sitios Webs</Link>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-lg font-light  hover:text-cyan-400"
                    >
                      {item.label}
                    </motion.a>
                  )
                )}

                {/* Botón cotización con animación suave */}
                <motion.a
                  href="/cotizacion"
                  custom={4}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 bg-cyan-600 px-4 py-2 rounded-sm font-light hover:text-black hover:bg-cyan-400 transition-all"
                >
                  Cotización
                </motion.a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
