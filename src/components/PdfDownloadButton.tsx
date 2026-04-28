import { Download } from "lucide-react";

type PdfDownloadButtonProps = {
  href: string;
  label?: string;
  variant?: "primary" | "secondary";
};

export function PdfDownloadButton({
  href,
  label = "PDF 다운로드",
  variant = "primary"
}: PdfDownloadButtonProps): JSX.Element {
  return (
    <a className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`} href={href} download>
      <Download aria-hidden="true" size={18} />
      <span>{label}</span>
    </a>
  );
}
