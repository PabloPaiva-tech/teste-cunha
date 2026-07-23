
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';
import ProductsAllSection from './components/ProductsAllSection';

export default function Produtos() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProductsAllSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}