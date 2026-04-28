import { DesignPicture } from "./components/DesignPicture";
import { DownloadSection } from "./components/DownloadSection";
import { CursorWave } from "./components/CursorWave";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HiddenGiftMessage } from "./components/HiddenGiftMessage";
import { Language } from "./components/Language";
import { Licence } from "./components/Licence";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";

export function App(): JSX.Element {
  return (
    <>
      <CursorWave />
      <Navigation />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Licence />
        <DesignPicture />
        <Language />
        <DownloadSection />
        <HiddenGiftMessage />
      </main>
      <Footer />
    </>
  );
}
