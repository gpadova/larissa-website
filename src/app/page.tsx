import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { AreasSection } from "@/components/areas-section";
import { TrajetoriaSection } from "@/components/trajetoria-section";
import { DepoimentosSection } from "@/components/depoimentos-section";
import { CTASection } from "@/components/cta-section";
import { ContatoSection } from "@/components/contato-section";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppFab />
      <main>
        <HeroSection />
        <AboutSection />
        <AreasSection />
        <TrajetoriaSection />
        <DepoimentosSection />
        <CTASection />
        <ContatoSection />
      </main>
      <Footer />
    </>
  );
}
