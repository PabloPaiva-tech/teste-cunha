
export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
      <a 
        href="http://wa.me/551141651062?text=Olá, tudo bem ? vim pelo site e gostaria de mais informaçôes" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 active:scale-95"
      >
        <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
      </a>
    </div>
  );
}
