/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-slate-300" style={{ backgroundColor: '#020b18' }}>
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full opacity-6 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid opacity-100" />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Languages />
      </main>
      <Contact />
    </div>
  );
}
