import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.app}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

export default App;
