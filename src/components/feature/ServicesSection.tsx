
import Button from '../base/Button';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="service-card bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-700 cursor-pointer group hover:bg-gray-800/60 transform hover:scale-105 hover:-translate-y-3 active:scale-95">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
        <i className={`${icon} text-xl sm:text-2xl text-white transition-all duration-500 group-hover:scale-125`}></i>
      </div>
      <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 font-light leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
            <i className="ri-check-line text-green-400 mr-3 text-sm"></i>
            <span className="text-sm font-light">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-car-line',
      title: 'Automóveis',
      description: 'Baterias premium para carros nacionais e importados com tecnologia de última geração.',
      features: ['Garantia estendida', 'Instalação gratuita', 'Suporte 24h']
    },
    {
      icon: 'ri-motorbike-line',
      title: 'Motocicletas',
      description: 'Soluções compactas e eficientes para motos com máxima durabilidade.',
      features: ['Design compacto', 'Alta performance', 'Resistência total']
    },
    {
      icon: 'ri-truck-line',
      title: 'Caminhão/Ônibus',
      description: 'Energia robusta para veículos pesados e aplicações industriais.',
      features: ['Capacidade industrial', 'Durabilidade extrema', 'Manutenção mínima']
    },
    {
      icon: 'ri-tools-line',
      title: 'Entrega e Instalação Gratuita',
      description: 'Serviço técnico especializado com equipamentos de precisão.',
      features: ['Técnicos certificados', 'Diagnóstico completo', 'Garantia do serviço']
    },
    {
      icon: 'ri-sun-line',
      title: 'Bateria Solar',
      description: 'Armazenamento de energia solar com tecnologia avançada para sistemas fotovoltaicos.',
      features: ['Ciclo profundo', 'Longa durabilidade', 'Eco-friendly']
    },
    {
      icon: 'ri-rocket-line',
      title: 'Cobrimos Oferta',
      description: 'o melhor custo-benefício para você',
      features: ['Entrega rápida', 'Rastreamento online', 'Cobertura SP']
    }
  ];

  const handleQuoteRequest = () => {
    // Google Ads - evento de conversão "Solicitar cotação"
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17625117036/i2uMCI3DjdYbEOzip9RB',
        'value': 1.0,
        'currency': 'BRL'
      });
    }

    const message = 'Olá, Tudo bem ? Gostaria de saber mais sobre as condições especiais para Empresas, Condomínios, Taxi e Uber';
    const whatsappUrl = `http://wa.me/551141651062?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-green-600 to-teal-600 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6 sm:mb-8 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Soluções completas em energia automotiva com tecnologia premium e atendimento excepcional
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Special conditions section */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-6 sm:mb-8">
              Condições Especiais
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Condições especiais para: Empresas, Condomínios, Taxi e Uber
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                Cobrimos Oferta
              </Button>
              <Button variant="outline" onClick={handleQuoteRequest}>
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
