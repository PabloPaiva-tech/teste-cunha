
import { useState } from 'react';
import Button from '../base/Button';

interface ProductCardProps {
  name: string;
  specs: string;
  features: string[];
  image: string;
  badge?: string;
  category?: string;
}

function ProductCard({ name, specs, features, image, badge, category }: ProductCardProps) {
  const handleWhatsAppContact = () => {
    const categoryText = category ? ` para ${category}` : '';
    const message = `Gostaria de saber mais sobre a bateria ${name}${categoryText}`;
    const whatsappUrl = `http://wa.me/551141651062?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-800/30 overflow-hidden hover:border-gray-700/50 transition-all duration-700 cursor-pointer group transform hover:scale-105 hover:-translate-y-3 active:scale-95 relative" data-product-shop="true">
      {badge && (
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10">
          {badge}
        </div>
      )}
      
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-3 group-hover:translate-x-0">
          <i className="ri-heart-line text-white text-sm sm:text-lg"></i>
        </div>
        <img 
          alt={name}
          className="w-full h-full object-contain object-center rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 bg-white" 
          src={image}
        />
      </div>
      
      <div className="p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 group-hover:text-gray-100 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-400 mb-3 sm:mb-4 font-light text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
          {specs}
        </p>
        
        <ul className="space-y-2 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
              <i className="ri-check-line text-green-400 mr-3 text-sm"></i>
              <span className="text-xs sm:text-sm font-light">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button variant="primary" fullWidth onClick={handleWhatsAppContact}>
          Entrar em Contato
        </Button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('auto');

  const categories = [
    { id: 'auto', name: 'Automóveis', shortName: 'Auto', icon: 'ri-car-line' },
    { id: 'moto', name: 'Motocicletas', shortName: 'Moto', icon: 'ri-motorbike-line' },
    { id: 'pesado', name: 'Caminhão/ônibus', shortName: 'Pesado', icon: 'ri-truck-line' },
    { id: 'mais', name: '...Mais', shortName: 'Mais', icon: 'ri-more-line' }
  ];

  const productsByCategory = {
    auto: [
      {
        name: 'Moura',
        specs: '45Ah / 60Ah / 70Ah',
        features: ['Instalação gratuita', 'Tecnologia premium'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/8e89c1a9502859a71f4ac005d0bebdd9.webp',
        badge: 'Mais Vendido'
      },
      {
        name: 'Heliar',
        specs: '45Ah / 60Ah / 70Ah',
        features: ['Alta performance', 'Resistência total'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/296f6faae1e0329d6aea2dc293f2dbf9.png'
      },
      {
        name: 'ACdelco',
        specs: '45Ah / 60Ah / 70Ah',
        features: ['Tecnologia Premium', 'Máxima durabilidade'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/448cdb3b7afd93b43752d9c6c59dd5bc.png',
        badge: 'Premium'
      }
    ],
    moto: [
      {
        name: 'Moura',
        specs: '5Ah / 7Ah / 10Ah',
        features: ['Compacta e potente', 'Resistente a vibração'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/5484fb17cea92aa3fae5afcddc50bd0a.png',
        badge: 'Mais Vendido'
      },
      {
        name: 'Route',
        specs: '5Ah / 7Ah / 10Ah',
        features: ['Alta durabilidade', 'Tecnologia AGM'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/c2d449a299f25db7955fe981ea40c0cc.png'
      },
      {
        name: 'Yuasa',
        specs: '5Ah / 7Ah / 10Ah',
        features: ['Performance superior', 'Máxima potência'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/b0454a401388194fe06105ef07305cfc.png',
        badge: 'Premium'
      }
    ],
    pesado: [
      {
        name: 'Moura',
        specs: '180Ah / 150Ah / 200Ah',
        features: ['Extra resistente', 'Para uso intenso'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/0d2bcc088d9b20cb6c8f0f077f34b113.png',
        badge: 'Mais Vendido'
      },
      {
        name: 'Heliar',
        specs: '180Ah / 150Ah / 200Ah',
        features: ['Máxima capacidade', 'Tecnologia avançada'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/8fde0a467a230a316b284109258cfecf.png'
      },
      {
        name: 'Tudor',
        specs: '180Ah / 150Ah / 200Ah',
        features: ['Performance extrema', 'Uso profissional'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/fc6c981a5f749300c21dce281b43b464.png',
        badge: 'Premium'
      }
    ],
    mais: [
      {
        name: 'Moura',
        specs: '45Ah / 60Ah / 70Ah',
        features: ['Instalação gratuita', 'Tecnologia premium'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/8e89c1a9502859a71f4ac005d0bebdd9.webp',
        badge: 'Mais Vendido'
      },
      {
        name: 'Heliar',
        specs: '45Ah / 60Ah / 70Ah',
        features: ['Alta performance', 'Resistência total'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/06b3579b6063e456b2d27f625fcc801b.png'
      },
      {
        name: 'ACdelco',
        specs: '45Ah / 60Ah / 70Ah',
        features: ['Tecnologia Premium', 'Máxima durabilidade'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/448cdb3b7afd93b43752d9c6c59dd5bc.png',
        badge: 'Premium'
      }
    ]
  };

  const getCategoryName = (categoryId: string) => {
    const categoryNames: { [key: string]: string } = {
      auto: 'carro',
      moto: 'moto',
      pesado: 'caminhão/ônibus',
      mais: 'veículo'
    };
    return categoryNames[categoryId] || categoryId;
  };

  const handleMoreClick = () => {
    window.REACT_APP_NAVIGATE('/produtos');
  };

  return (
    <section id="produtos" className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden" data-product-shop="true">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6 sm:mb-8 tracking-tight">
            Um Pouco dos Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Linha completa de baterias premium com tecnologia avançada e design sofisticado
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex justify-center mb-12 sm:mb-20">
          <div className="bg-gray-800/40 backdrop-blur-sm p-2 rounded-full border border-gray-700/30 overflow-x-auto">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    if (category.id === 'mais') {
                      handleMoreClick();
                    } else {
                      setActiveCategory(category.id);
                    }
                  }}
                  className={`px-4 sm:px-6 lg:px-10 py-3 sm:py-4 rounded-full transition-all duration-500 whitespace-nowrap cursor-pointer font-medium text-sm sm:text-base lg:text-lg transform hover:scale-105 active:scale-95 ${
                    activeCategory === category.id
                      ? 'bg-white text-black shadow-2xl scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <i className={`${category.icon} mr-2 sm:mr-3 transition-transform duration-500 ${
                    activeCategory === category.id ? 'rotate-12 scale-110' : ''
                  }`}></i>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.shortName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {productsByCategory[activeCategory as keyof typeof productsByCategory].map((product, index) => (
            <ProductCard key={index} {...product} category={getCategoryName(activeCategory)} />
          ))}
        </div>
      </div>
    </section>
  );
}
