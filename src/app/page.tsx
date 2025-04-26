import Image from "next/image";
import PorQueElegir from './components/PorQueElegir'
import Home from "./components/Hero";
import Servicios from "./components/Servicios";
import FAQs from "./components/FAQs";
import CTA from "./components/CTA";


export default function HomePage() {
  return (
    <main className="">
      <Home/>
      <PorQueElegir/>
      <Servicios/>
      <FAQs/>
      <CTA/>
    </main>
  );
}
