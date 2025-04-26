import './globals.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}