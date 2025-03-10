import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const TeachingAchievements = lazy(() => import("./components/TeachingAchievements"));

// Blog components
const BlogSection = lazy(() => import("./components/BlogSection"));
const BlogListPage = lazy(() => import("./components/BlogListPage"));
const BlogDetailsPage = lazy(() => import("./components/BlogDetailsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-color z-0 bg-primary">
        <Routes>
          {/* Home Route with Full Sections */}
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <>
                  {/* Navbar and Hero for Home Page */}
                  <Navbar />
                  <Hero />
                  <About />
                  <Experience />
                  <Tech />
                  <Works />
                  <TeachingAchievements />
                  <BlogSection />
                  <Contact />

                </>
              </Suspense>
            }
          />

          {/* Blog Listing Page (without Hero section) */}
          <Route
            path="/blogs"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <>
                  {/* <Navbar /> */}
                  <BlogListPage />
                </>
              </Suspense>
            }
          />

          {/* Blog Details Page (without Hero section) */}
        
          <Route
            //  path="/blogs/:id"
            path="/blogs/slug/:slug"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <>
                  {/* <Navbar /> */}
                  <BlogDetailsPage />
                </>
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
