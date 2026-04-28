import { portfolioOwner } from "../data/portfolio";
import { PdfDownloadButton } from "./PdfDownloadButton";
import { SectionTitle } from "./SectionTitle";

export function DownloadSection(): JSX.Element {
  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="download">
      <SectionTitle eyebrow="PDF Download" title="Downloadable Portfolio Materials" />

      <div className="card gradient-border-card flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-green">Portfolio PDF</p>
          <p className="mt-3 text-base leading-7 text-muted">
            한눈에 보기 쉬운 PDF 포트폴리오를 내려받고, 필요할 때 바로 공유할 수 있습니다.
          </p>
        </div>

        <PdfDownloadButton href={portfolioOwner.pdfUrl} label="Download PDF" />
      </div>
    </section>
  );
}
