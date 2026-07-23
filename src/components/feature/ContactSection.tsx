
import Button from '../base/Button';

interface ContactCardProps {
  icon: string;
  title: string;
  subtitle: string;
  details: string[];
}

function ContactCard({ icon, title, subtitle, details }: ContactCardProps) {
  return (
    <div className="text-center p-6 sm:p-8 lg:p-10 bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-800/30 hover:border-gray-700/50 transition-all duration-700 cursor-pointer group transform hover:scale-105 hover:-translate-y-3 active:scale-95">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500">
        <i className={`${icon} text-xl sm:text-2xl text-white transition-all duration-500`}></i>
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 group-hover:text-gray-400 transition-colors duration-300">
        {subtitle}
      </p>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300 mb-2 text-sm sm:text-base lg:text-lg">
          {detail}
        </p>
      ))}
    </div>
  );
}

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre as baterias Cunha.';
    const whatsappUrl = `http://wa.me/551141651062?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:bateriascunhaloja@gmail.com', '_blank');
  };

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600 to-teal-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6 sm:mb-8 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Estamos prontos para atender você. Entre em contato conosco para mais informações sobre nossos produtos e serviços.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-800/30">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-6 sm:mb-8 text-center">
              Informações de Contato
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-blue-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Endereço</h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Rod. Armando Salles, 2411<br />
                    Jardim Imperatriz<br />
                    Itapecerica da Serra - SP<br />
                    CEP: 06856-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-green-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Telefone</h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    (11) 4165-1062<br />
                    (11) 94856-4168
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-purple-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    bateriascunhaloja@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-orange-400 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Horário de Funcionamento</h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Segunda a Sexta: 8h às 19h<br />
                    Sábado: 8h às 18h<br />
                    Domingo: 8h às 14h
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                onClick={handleWhatsAppClick}
                className="flex-1"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                onClick={handleEmailClick}
                className="flex-1"
              >
                <i className="ri-mail-line mr-2"></i>
                Email
              </Button>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 sm:mt-24">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-800/30">
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-6 sm:mb-8 text-center">
              Nossa Localização
            </h3>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.8456789!3d-23.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRod.%20Armando%20Salles%2C%202411%20-%20Jardim%20Imperatriz%2C%20Itapecerica%20da%20Serra%20-%20SP%2C%2006856-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=Rod.+Armando+Salles,+2411+-+Jardim+Imperatriz,+Itapecerica+da+Serra+-+SP,+06856-000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Baterias Cunha"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
