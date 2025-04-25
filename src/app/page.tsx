import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import ContactForm from "./components/ContactForm";
import ServicesGallery from "./components/ServiceGallery";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CallToAction />
      <ServicesGallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
