import Hero from "./components/Hero";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";
import ServicesGallery from "./components/ServiceGallery";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <AboutSection />
      <ServicesGallery />
      <Features />
      <ContactForm />
    </main>
  );
}
