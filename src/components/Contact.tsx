import { ExternalLink, FileText, Mail } from "lucide-react";
import { portfolioOwner } from "../data/portfolio";
import { CopyEmailButton } from "./CopyEmailButton";
import { PdfDownloadButton } from "./PdfDownloadButton";
import { SectionTitle } from "./SectionTitle";

type ContactProps = {
  onEmailCopied: () => void;
};

export function Contact({ onEmailCopied }: ContactProps): JSX.Element {
  return (
    <section className="section-shell section-spacing" id="contact">
      <SectionTitle
        eyebrow="Contact"
        title="연락과 자료 확인을 한 곳에서"
        description="지원 전 실제 이메일, Notion 링크, PDF 자료로 교체하면 바로 공유 가능한 포트폴리오 구조입니다."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="card p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-navy">연락 문구</h3>
          <p className="mt-4 text-base leading-8 text-muted">
            디자인 프로젝트의 비용, 증빙, 정산, 리포트 흐름을 꼼꼼하게 정리하는 Design Financial Operations 방향의 지원자입니다.
            포트폴리오와 세부 자료는 아래 링크에서 확인하실 수 있습니다.
          </p>
        </article>

        <article className="card p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-navy">Contact Links</h3>
          <dl className="mt-5 grid gap-4">
            <div className="rounded-md border border-border bg-[#FBFAF8] p-4">
              <dt className="flex items-center gap-2 text-sm font-bold text-muted">
                <Mail aria-hidden="true" size={16} />
                Email
              </dt>
              <dd className="mt-2 break-words text-base font-bold text-navy">{portfolioOwner.email}</dd>
            </div>
            <div className="rounded-md border border-border bg-[#FBFAF8] p-4">
              <dt className="flex items-center gap-2 text-sm font-bold text-muted">
                <ExternalLink aria-hidden="true" size={16} />
                Notion
              </dt>
              <dd className="mt-2 break-words text-base font-bold text-navy">{portfolioOwner.notionUrl}</dd>
            </div>
            <div className="rounded-md border border-border bg-[#FBFAF8] p-4">
              <dt className="flex items-center gap-2 text-sm font-bold text-muted">
                <FileText aria-hidden="true" size={16} />
                PDF
              </dt>
              <dd className="mt-2 break-words text-base font-bold text-navy">{portfolioOwner.pdfUrl}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CopyEmailButton email={portfolioOwner.email} label="이메일 복사" onCopied={onEmailCopied} />
            <a className="btn btn-secondary" href={portfolioOwner.notionUrl} rel="noopener noreferrer" target="_blank">
              <ExternalLink aria-hidden="true" size={18} />
              <span>Notion 열기</span>
            </a>
            <PdfDownloadButton href={portfolioOwner.pdfUrl} label="PDF 저장" variant="secondary" />
          </div>
        </article>
      </div>
    </section>
  );
}
