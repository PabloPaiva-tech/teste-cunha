
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800/30 text-white py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl text-white mb-6 sm:mb-8">Baterias Cunha</h3>
          <p className="text-gray-400 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Liderando o futuro da energia automotiva com tecnologia premium, design sofisticado e atendimento excepcional.
          </p>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 active:scale-95">
              <i className="ri-facebook-fill text-white transition-all duration-500 text-sm sm:text-base"></i>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 active:scale-95">
              <i className="ri-instagram-line text-white transition-all duration-500 text-sm sm:text-base"></i>
            </div>
            <a 
              href="http://wa.me/551141651062?text=Olá, tudo bem ? vim pelo site e gostaria de mais informaçôes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 active:scale-95"
            >
              <i className="ri-whatsapp-line text-white transition-all duration-500 text-sm sm:text-base"></i>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-gray-400 font-light">
            <p className="text-sm sm:text-base">
              © 2024 Baterias Cunha. Todos os direitos reservados. | 
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                {' '}Powered by Readdy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
