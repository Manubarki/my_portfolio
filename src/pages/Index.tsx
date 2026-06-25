import '../portfolio.css';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

function Orbs() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  const orb3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX - window.innerWidth / 2;
      ty = e.clientY - window.innerHeight / 2;
    };
    document.addEventListener('mousemove', onMove);
    let raf: number;
    const tick = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      if (orb1.current) orb1.current.style.transform = `translate(${cx * 0.018}px, ${cy * 0.012}px)`;
      if (orb2.current) orb2.current.style.transform = `translate(${cx * -0.022}px, ${cy * 0.015}px)`;
      if (orb3.current) orb3.current.style.transform = `translate(${cx * 0.012}px, ${cy * -0.02}px)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="orbs" aria-hidden="true">
      <div ref={orb1} className="orb orb-1" />
      <div ref={orb2} className="orb orb-2" />
      <div ref={orb3} className="orb orb-3" />
    </div>
  );
}

export default function Index() {
  return (
    <div className="portfolio-root">
      <Orbs />
      <Nav />
      <Hero />
      <Tools />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
