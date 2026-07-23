
import { useState } from 'react';
import Button from '../../../components/base/Button';

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
    let productName = name;
    let categoryText = '';
    
    // Para categoria EFB, adicionar "EFB" no nome da bateria
    if (category === 'EFB') {
      productName = `${name} EFB`;
    }
    
    // Para categorias específicas, adicionar texto da categoria
    if (category === 'barco' || category === 'placa solar') {
      categoryText = ` para ${category}`;
    }
    
    const message = `Gostaria de saber mais sobre a bateria ${productName}${categoryText}`;
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

export default function ProductsAllSection() {
  const [activeCategory, setActiveCategory] = useState('barco');

  const categories = [
    { id: 'barco', name: 'Barco', icon: 'ri-ship-line' },
    { id: 'estacionaria', name: 'Estacionária', icon: 'ri-battery-line' },
    { id: 'tracionaria', name: 'Tracionária', icon: 'ri-truck-line' },
    { id: 'efb', name: 'Especiais EFB', icon: 'ri-flashlight-line' },
    { id: 'solar', name: 'Para placa solar', icon: 'ri-sun-line' }
  ];

  const productsByCategory = {
    barco: [
      {
        name: 'Moura BOAT',
        specs: '100Ah / 150Ah',
        features: ['Resistente à corrosão', 'Prova d\'água'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/77727a36c91d53e679d92c0b405eb504.png',
        badge: 'Mais Vendido'
      },
      {
        name: 'Tudor',
        specs: '220Ah',
        features: ['Tecnologia AGM', 'Ciclo profundo'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/45f55cbda6256b48a23aac75c3a668a7.png'
      },
      {
        name: 'Heliar',
        specs: '100Ah / 150Ah / 220Ah',
        features: ['Performance superior', 'Uso intensivo'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/a62b6db67943429fb7fca57d47c9e384.png',
        badge: 'Premium'
      }
    ],
    estacionaria: [
      {
        name: 'Freedom',
        specs: '40Ah / 70Ah',
        features: ['Longa duração', 'Baixa manutenção'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/866bfa8a1dcb22ef1b3af822d3398de4.png',
        badge: 'Mais Vendido'
      },
      {
        name: 'Freedom',
        specs: '115Ah / 220Ah',
        features: ['Alta capacidade', 'Tecnologia avançada'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/866bfa8a1dcb22ef1b3af822d3398de4.png'
      },
      {
        name: 'Get Power',
        specs: '5Ah / 7Ah',
        features: ['Compacta', 'Tecnologia AGM'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/c65ac7b1e0b140760076e9452e9e50b4.png',
        badge: 'Premium'
      },
      {
        name: 'Get Power',
        specs: '9Ah / 12Ah / 18Ah',
        features: ['Versátil', 'Longa vida útil'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/c65ac7b1e0b140760076e9452e9e50b4.png'
      }
    ],
    tracionaria: [
      {
        name: 'Moura',
        specs: '45Ah / 150Ah / 300Ah',
        features: ['Ciclo profundo', 'Alta resistência'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/2e87eb07c96d703d8a4e06030c30d6d0.png',
        badge: 'Mais Vendido'
      },
      {
        name: 'Tudor',
        specs: '45Ah / 150Ah / 300Ah',
        features: ['Tecnologia avançada', 'Máxima durabilidade'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/fc6c981a5f749300c21dce281b43b464.png'
      },
      {
        name: 'Log',
        specs: '45Ah / 150Ah / 300Ah',
        features: ['Performance extrema', 'Uso intensivo'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/7277d88634935b665dee8f2fe748f8e6.png',
        badge: 'Premium'
      }
    ],
    efb: [
      {
        name: 'Moura',
        specs: '72Ah / 50Ah / 60Ah',
        features: ['Tecnologia EFB', 'Start-Stop'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/69db59ce97069aed99081ab95c269451.png',
        badge: 'Mais Vendido'
      },
      {
        name: 'Heliar',
        specs: '72Ah / 50Ah / 60Ah',
        features: ['Alta performance', 'Ciclo melhorado'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/1f329a26cd5820991b66f8ed4cd7287f.png'
      },
      {
        name: 'ACdelco',
        specs: '72Ah / 50Ah / 60Ah',
        features: ['Máxima eficiência', 'Tecnologia premium'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/506884b4f49e4851a42b30424b3a9582.png',
        badge: 'Premium'
      }
    ],
    solar: [
      {
        name: 'Moura',
        specs: '150Ah / 111Ah / 162Ah',
        features: ['Ciclo profundo', 'Energia renovável'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/bf80f93bb8a261c406b9cd98fa81cd2f.png',
        badge: 'Mais Vendido'
      },
      {
        name: 'Heliar',
        specs: '150Ah / 111Ah / 162Ah',
        features: ['Alta capacidade', 'Tecnologia AGM'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/ce4d62b22ddad3f2d0dbafdf4cd80ed1.png'
      },
      {
        name: 'Freedom',
        specs: '150Ah / 111Ah / 162Ah',
        features: ['Performance máxima', 'Uso profissional'],
        image: 'https://static.readdy.ai/image/01f80f9b03447858aad54b9173d445e0/bc9f11983c0840370d18afd52eb5a915.png',
        badge: 'Premium'
      }
    ]
  };

  const getCategoryName = (categoryId: string) => {
    const categoryNames: { [key: string]: string } = {
      barco: 'barco',
      estacionaria: 'estacionária',
      tracionaria: 'tracionária',
      efb: 'EFB',
      solar: 'placa solar'
    };
    return categoryNames[categoryId] || categoryId;
  };

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 pb-16 sm:pb-24 lg:pb-32 bg-black relative overflow-hidden" data-product-shop="true">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-gradient-to-r from-green-600 to-teal-600 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-6 sm:mb-8 tracking-tight">
            Todos os Produtos
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Explore nossa linha completa de baterias especializadas para todas as suas necessidades
          </p>
        </div>
        
        {/* Category navigation - horizontal layout */}
        <div className="flex justify-center mb-12 sm:mb-20">
          <div className="bg-gray-800/40 backdrop-blur-sm p-2 rounded-full border border-gray-700/30 overflow-x-auto">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full transition-all duration-500 whitespace-nowrap cursor-pointer font-medium text-sm sm:text-base transform hover:scale-105 active:scale-95 ${
                    activeCategory === category.id
                      ? 'bg-white text-black shadow-2xl scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <i className={`${category.icon} mr-2 transition-transform duration-500 ${
                    activeCategory === category.id ? 'rotate-12 scale-110' : ''
                  }`}></i>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Categories and products */}
        <div className="space-y-20">
          {categories.map((category) => (
            <div key={category.id} id={`category-${category.id}`} className="scroll-mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-thin text-white mb-4 tracking-tight">
                  <i className={`${category.icon} mr-4`}></i>
                  {category.name}
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {productsByCategory[category.id as keyof typeof productsByCategory].map((product, index) => (
                  <ProductCard key={index} {...product} category={getCategoryName(category.id)} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back to home button */}
        <div className="text-center mt-20">
          <Button 
            variant="secondary" 
            onClick={() => window.REACT_APP_NAVIGATE('/')}
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Voltar ao Início
          </Button>
        </div>
      </div>
    </section>
  );
}
