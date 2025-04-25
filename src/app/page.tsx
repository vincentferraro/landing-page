import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import ContactForm from "./components/ContactForm";
import ServicesGallery from "./components/ServiceGallery";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return (
    <main>
      <Hero />
      
      <AboutSection />
      {/* <CallToAction /> */}
      <ServicesGallery />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
}
