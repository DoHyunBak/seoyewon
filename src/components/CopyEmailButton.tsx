import { ClipboardCopy } from "lucide-react";

type CopyEmailButtonProps = {
  email: string;
  onCopied: () => void;
  label?: string;
  variant?: "primary" | "secondary" | "soft";
};

const variantClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  soft: "btn-soft"
};

export function CopyEmailButton({
  email,
  onCopied,
  label = "이메일 복사",
  variant = "secondary"
}: CopyEmailButtonProps): JSX.Element {
  const copyEmail = async (): Promise<void> => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API is unavailable");
      }

      await navigator.clipboard.writeText(email);
      onCopied();
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      onCopied();
    }
  };

  return (
    <button className={`btn ${variantClass[variant]}`} type="button" onClick={copyEmail}>
      <ClipboardCopy aria-hidden="true" size={18} />
      <span>{label}</span>
    </button>
  );
}
