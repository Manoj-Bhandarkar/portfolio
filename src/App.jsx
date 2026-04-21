import React, { lazy, Suspense } from "react";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import LazySection from "./components/LazySection";

// Lazy imports (split chunks)
const CertificationsLazy = lazy(() => import("./components/Certifications"));
const ProjectsLazy = lazy(() => import("./components/Projects"));
const CustomCursorLazy = lazy(() => import("./utils/CursorAnimation"));

export default function App() {
  return (
    <div className="font-sora overflow-x-hidden">
      
      {/* Lazy load heavy cursor */}
      <Suspense fallback={null}>
        <CustomCursorLazy />
      </Suspense>

      <Navbar />

      <main>
        {/* ABOVE THE FOLD (critical) */}
        <Home />

        {/* BELOW THE FOLD (lazy on scroll) */}
        <LazySection>
          <Suspense fallback={<div className="py-20 text-center">Loading Certifications...</div>}>
            <CertificationsLazy />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<div className="py-20 text-center">Loading Projects...</div>}>
            <ProjectsLazy />
          </Suspense>
        </LazySection>

        {/* These are lighter → can stay normal */}
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}