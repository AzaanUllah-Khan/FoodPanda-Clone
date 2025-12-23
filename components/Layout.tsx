import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Facebook, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from './Button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Newsroom', path: '/newsroom' },
  { label: 'Partners', path: '/partners' },
  { label: 'panda ads', path: 'https://pandaads-azaan.vercel.app/' },
  { label: 'Contact', path: '/contact' },
  { label: 'Careers', path: '#' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark">
      {/* Header */}
      <header className="fixed w-full bg-white z-50 shadow-sm top-0">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <img src="/assets/logo.svg" alt="logo" />

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 h-full">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.label} 
                  to={item.path} 
                  className={`
                    h-full flex items-center px-1 border-t-4 transition-all duration-200 font-bold text-base
                    ${isActive ? 'border-panda text-black' : 'border-transparent text-black hover:text-panda'}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden xl:flex items-center gap-6">
             <Button className="rounded-full px-6 py-2.5 text-base font-bold transition-all transform text-white hover:bg-panda-hover">
                Choose location
             </Button>
             <button className="text-black hover:text-panda transition-colors p-2">
                <Search size={24} strokeWidth={2.5} />
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="xl:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.path} 
                  className="text-xl font-bold text-gray-800 py-2 border-b border-gray-100"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <Button fullWidth className="rounded-full py-3 font-bold">Choose location</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-panda rounded-lg flex items-center justify-center text-white">
              <span className="text-lg font-bold">🐼</span>
            </div>
            <span className="text-xl font-bold text-panda">foodpanda</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
            <div>
              <h3 className="font-bold text-lg mb-6">Navigate</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/newsroom" className="hover:text-white">Newsroom</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Collaborate</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Explore careers</a></li>
                <li><a href="#" className="hover:text-white">Become a rider</a></li>
                <li><a href="#" className="hover:text-white">Feed your team</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 md:text-right">
                <h3 className="font-bold text-lg mb-6">Follow us on</h3>
                <div className="flex gap-4 md:justify-end">
                    <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200"><Facebook size={20} /></a>
                    <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200"><Linkedin size={20} /></a>
                    <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200"><Instagram size={20} /></a>
                </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>Copyright © 2025 foodpanda</p>
            <div className="mt-4 md:mt-0 flex items-center gap-6">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <button 
                 onClick={scrollToTop}
                 className={`fixed bottom-8 right-8 bg-panda hover:bg-panda-hover text-white p-3 rounded-lg shadow-lg transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <ArrowUp size={24} />
               </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
