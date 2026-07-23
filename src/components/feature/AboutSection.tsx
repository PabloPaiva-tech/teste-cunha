
interface ExcellenceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ExcellenceCard({ icon, title, description }: ExcellenceCardProps) {
  return (
    <div className="text-center p-6 sm:p-8 lg:p-10 bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-700 cursor-pointer group transform hover:scale-105 hover:-translate-y-3 active:scale-95">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
        <i className={`${icon} text-xl sm:text-2xl text-white transition-all duration-500 group-hover:scale-125`}></i>
      </div>
      <h3 className="font-medium text-white text-lg sm:text-xl mb-3 sm:mb-4 group-hover:text-gray-100 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const excellenceItems = [
    {
      icon: 'ri-award-line',
      title: 'Liderança',
      description: 'Construindo confiança através da excelência e inovação constante'
    },
    {
      icon: 'ri-team-line',
      title: 'Especialistas Certificados',
      description: 'Equipe altamente qualificada com certificações internacionais'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Clientes Satisfeitos',
      description: 'Milhares de clientes que confiam na nossa qualidade superior'
    }
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-1 gap-20 items-center">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-8 sm:mb-10 tracking-tight">
              Nossa Excelência
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 sm:mb-16 font-light leading-relaxed px-4">
              Liderando o mercado brasileiro de baterias automotivas com tecnologia de ponta, design premium e atendimento excepcional.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {excellenceItems.map((item, index) => (
                <ExcellenceCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
