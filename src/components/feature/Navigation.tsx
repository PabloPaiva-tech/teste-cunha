
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Se estamos na página de produtos, navegar para home primeiro
    if (window.location.pathname === '/produtos') {
      window.REACT_APP_NAVIGATE('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToProducts = () => {
    window.REACT_APP_NAVIGATE('/produtos');
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    window.REACT_APP_NAVIGATE('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-gray-700/50 bg-gray-900/95">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4 cursor-pointer" onClick={navigateToHome}>
            <img 
              alt="Baterias Cunha Logo" 
              className="h-12 sm:h-14 w-auto" 
              src="https://static.readdy.ai/image/679a8cfcb22f2886792df750740da3c7/afd123ca58d16d19aa992ae741847738.png"
            />
            <div className="text-lg sm:text-2xl font-bold text-white">Baterias Cunha</div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Início
            </button>
            <button 
              onClick={navigateToProducts}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Todos os Produtos
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Contato
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
              >
                Início
              </button>
              <button 
                onClick={navigateToProducts}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
              >
                Todos os Produtos
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
