import { portfolioOwner } from "../data/portfolio";
import { updateSpotlightPosition } from "../utils/interaction";
import { PdfDownloadButton } from "./PdfDownloadButton";
import { SectionTitle } from "./SectionTitle";

export function DownloadSection(): JSX.Element {
  return (
    <section className="section-shell section-spacing" id="download">
      <div className="card spotlight-card gradient-border-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center" onPointerMove={updateSpotlightPosition}>
        <SectionTitle
          align="left"
          eyebrow="PDF Download"
          title="Downloadable Portfolio Materials"
          description="채용 담당자가 포트폴리오 PDF를 바로 저장할 수 있도록 다운로드 버튼만 제공합니다."
        />
        <div className="flex">
          <PdfDownloadButton href={portfolioOwner.pdfUrl} label="Download PDF" />
        </div>
        <p className="sr-only">PDF 포트폴리오 다운로드 기능을 제공합니다.</p>
      </div>
    </section>
  );
}
