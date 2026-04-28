import { useEffect, useRef, useState } from "react";
import { Contact } from "./components/Contact";
import { CoreStrength } from "./components/CoreStrength";
import { DesignPicture } from "./components/DesignPicture";
import { DownloadSection } from "./components/DownloadSection";
import { Hero } from "./components/Hero";
import { HiddenGiftMessage } from "./components/HiddenGiftMessage";
import { Language } from "./components/Language";
import { Licence } from "./components/Licence";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { Toast } from "./components/Toast";

export function App(): JSX.Element {
  const [toastMessage, setToastMessage] = useState("");
  const toastTimer = useRef<number | null>(null);

  const showEmailCopiedToast = (): void => {
    setToastMessage("이메일이 복사되었습니다.");

    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current);
    }

    toastTimer.current = window.setTimeout(() => {
      setToastMessage("");
    }, 2200);
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        window.clearTimeout(toastTimer.current);
      }
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero onEmailCopied={showEmailCopiedToast} />
        <Profile />
        <CoreStrength />
        <Skills />
        <Licence />
        <DesignPicture />
        <Language />
        <DownloadSection />
        <Contact onEmailCopied={showEmailCopiedToast} />
        <HiddenGiftMessage />
      </main>
      <Toast message={toastMessage} />
    </>
  );
}
