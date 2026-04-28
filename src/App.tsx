import { DesignPicture } from "./components/DesignPicture";
import { ContactSection } from "./components/ContactSection";
import { CursorWave } from "./components/CursorWave";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Language } from "./components/Language";
import { Licence } from "./components/Licence";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { Skills } from "./components/Skills";

export function App(): JSX.Element {
  return (
    <>
      <CursorWave />
      <Navigation />
      <main className="pt-[118px] sm:pt-20">
        <Hero />
        <Profile />
        <Skills />
        <Licence />
        <DesignPicture />
        <Language />
        <ContactSection />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
