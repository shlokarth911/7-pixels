import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./screens/Contact";
import Works from "./screens/Works";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Layout component to wrap routes and manage smooth scrolling
function Layout({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  // Initialize Lenis and integrate with ScrollTrigger
  useEffect(() => {
    // Create a new Lenis instance for smooth scrolling
    const lenis = new Lenis({
      duration: 0.8, // Duration of the scroll animation in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true, // Enable smooth scrolling
    });
    lenisRef.current = lenis;

    // Animation frame loop to update Lenis and ScrollTrigger
    function raf(time) {
      lenis.raf(time); // Update Lenis
      ScrollTrigger.update(); // Update ScrollTrigger
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Configure ScrollTrigger to use Lenis as the scroller
    ScrollTrigger.scrollerProxy(window, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true }); // Set scroll position immediately
        }
        return lenis.animatedScroll; // Get the current animated scroll position
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Refresh ScrollTrigger when Lenis resizes
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    // Cleanup on component unmount
    return () => {
      lenis.destroy(); // Stop Lenis and remove event listeners
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location]);

  // Render the children (route content)
  return <div>{children}</div>;
}

// Main App component
const App = () => {
  return (
    <Router basename="/7-pixels">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/works"
          element={
            <Layout>
              <Works />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
