import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const LoadingSpinner = lazy(() => import("./components/LoadingSpinner")); 


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-color z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
