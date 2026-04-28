import { ExternalLink } from "lucide-react";
import { portfolioOwner } from "../data/portfolio";
import { CopyEmailButton } from "./CopyEmailButton";
import { PdfDownloadButton } from "./PdfDownloadButton";
import { SectionTitle } from "./SectionTitle";

type DownloadSectionProps = {
  onEmailCopied: () => void;
};

export function DownloadSection({ onEmailCopied }: DownloadSectionProps): JSX.Element {
  return (
    <section className="section-shell section-spacing" id="download">
      <div className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <SectionTitle
          align="left"
          eyebrow="PDF Download"
          title="Downloadable Portfolio Materials"
          description="PDF 파일은 public/portfolio.pdf 경로를 기준으로 연결되어 있으며, Notion과 이메일 복사 버튼도 같은 위치에서 제공합니다."
        />
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <PdfDownloadButton href={portfolioOwner.pdfUrl} label="Download PDF" />
          <a className="btn btn-secondary" href={portfolioOwner.notionUrl} rel="noopener noreferrer" target="_blank">
            <ExternalLink aria-hidden="true" size={18} />
            <span>Open Notion</span>
          </a>
          <CopyEmailButton email={portfolioOwner.email} label="Copy Email" onCopied={onEmailCopied} variant="soft" />
        </div>
        <p className="sr-only">PDF 다운로드, Notion 새 탭 열기, 이메일 복사 기능을 제공합니다.</p>
      </div>
    </section>
  );
}
