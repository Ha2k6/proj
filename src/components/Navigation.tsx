import { motion } from 'framer-motion';
import { Smartphone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />
            <span className="text-xl sm:text-2xl font-bold text-white">TechRepair</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#phones" className="text-white hover:text-indigo-400 transition-colors">Phones</a>
            <a href="#cases" className="text-white hover:text-indigo-400 transition-colors">Cases</a>
            <a href="#accessories" className="text-white hover:text-indigo-400 transition-colors">Accessories</a>
            <a href="#repairs" className="text-white hover:text-indigo-400 transition-colors">Repairs</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'mt-4' : ''}`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <a 
              href="#phones" 
              className="text-white hover:text-indigo-400 transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Phones
            </a>
            <a 
              href="#cases" 
              className="text-white hover:text-indigo-400 transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Cases
            </a>
            <a 
              href="#accessories" 
              className="text-white hover:text-indigo-400 transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </a>
            <a 
              href="#repairs" 
              className="text-white hover:text-indigo-400 transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Repairs
            </a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}