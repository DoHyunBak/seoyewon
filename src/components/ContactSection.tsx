import { ExternalLink, Instagram, Mail } from "lucide-react";
import { portfolioOwner } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

const contactItems = [
  {
    label: "Email",
    value: portfolioOwner.email,
    href: `mailto:${portfolioOwner.email}`,
    icon: Mail,
    action: "메일 보내기"
  },
  {
    label: "Instagram",
    value: portfolioOwner.instagramHandle,
    href: portfolioOwner.instagramUrl,
    icon: Instagram,
    action: "인스타그램 열기",
    external: true
  }
];

export function ContactSection(): JSX.Element {
  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="contact">
      <SectionTitle eyebrow="Contact" title="Contact" titleClassName="text-[2rem] font-bold leading-tight text-navy md:text-[2.5rem]" />

      <div className="content-shell card gradient-border-card p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                className="group inner-white-panel inner-white-panel-interactive flex min-h-[150px] flex-col justify-between p-5 outline-none hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-pink/40 sm:p-6"
                href={item.href}
                key={item.label}
                rel={item.external ? "noreferrer" : undefined}
                target={item.external ? "_blank" : undefined}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#F8F4EE] text-green transition group-hover:bg-pink/50 group-hover:text-navy">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/45 px-3 py-1 text-xs font-bold text-muted backdrop-blur-sm">
                    {item.action}
                    <ExternalLink aria-hidden="true" size={13} />
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-green">{item.label}</p>
                  <p className="mt-2 break-words text-xl font-bold text-navy sm:text-2xl">{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
