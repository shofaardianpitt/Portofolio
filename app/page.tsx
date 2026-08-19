// app/page.tsx
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0a0c] min-h-screen text-[#ecece9] selection:bg-emerald-500 selection:text-black relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certifications />
      <Footer />
    </main>
  );
}