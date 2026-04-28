import { portfolioOwner } from "../data/portfolio";
import { PdfDownloadButton } from "./PdfDownloadButton";
import { SectionTitle } from "./SectionTitle";

export function DownloadSection(): JSX.Element {
  return (
    <section className="section-shell section-spacing" id="download">
      <div className="card gradient-border-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <SectionTitle
          align="left"
          eyebrow="PDF Download"
          title="Downloadable Portfolio Materials"
        />
        <div className="flex">
          <PdfDownloadButton href={portfolioOwner.pdfUrl} label="Download PDF" />
        </div>
      </div>
    </section>
  );
}
