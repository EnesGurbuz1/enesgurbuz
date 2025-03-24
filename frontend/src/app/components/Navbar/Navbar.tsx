"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string): boolean => pathname === path;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 w-full z-50 ${
        scrolled 
          ? "bg-gradient-to-r from-black via-gray-900 to-black shadow-lg backdrop-blur-sm" 
          : "bg-black/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-xl font-bold relative group">
            <motion.span 
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Enes Gürbüz
            </motion.span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-violet-600" 
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact" }
            ].map((link) => (
              <Link 
                key={link.path}
                href={link.path} 
                className={`relative transition-colors duration-300 ${
                  isActive(link.path) 
                    ? "text-white" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-violet-600"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          <motion.button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden py-3 border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/projects", label: "Projects" },
                  { path: "/contact", label: "Contact" }
                ].map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={link.path} 
                      className={`py-2 block transition-colors ${
                        isActive(link.path)
                          ? "text-white pl-2 border-l-2 border-indigo-500" 
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}