
import Navigation from '../../components/feature/Navigation';
import HeroSection from '../../components/feature/HeroSection';
import ServicesSection from '../../components/feature/ServicesSection';
import AboutSection from '../../components/feature/AboutSection';
import ProductsSection from '../../components/feature/ProductsSection';
import ContactSection from '../../components/feature/ContactSection';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
