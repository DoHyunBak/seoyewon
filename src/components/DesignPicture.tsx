import { motion, useReducedMotion } from "framer-motion";
import { Image, Palette } from "lucide-react";
import { designPictures } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

const toneClass = {
  navy: "from-[#1F2A44] via-[#596476] to-[#FAF7F2]",
  green: "from-[#3A7D5A] via-[#9BB6A3] to-[#FAF7F2]",
  pink: "from-[#FFD9E5] via-[#FFF0F5] to-[#FAF7F2]"
};

export function DesignPicture(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing flex flex-col gap-8" id="design-picture">
      <SectionTitle eyebrow="Design Picture" title="Design Picture Gallery" titleClassName="text-[2rem] font-bold leading-tight text-navy md:text-[2.5rem]" />

      <motion.article
        className="content-shell card gradient-border-card p-6 sm:p-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {designPictures.map((picture, index) => (
            <motion.section
              className="overflow-hidden rounded-lg"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              key={picture.title}
              transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${toneClass[picture.tone as keyof typeof toneClass]}`}>
                {"imageUrl" in picture ? (
                  <img
                    alt={`${picture.title} visual`}
                    className="absolute inset-0 h-full w-full bg-[#F8F4EE] object-contain"
                    loading="lazy"
                    src={picture.imageUrl}
                  />
                ) : (
                  <div className="absolute inset-5 rounded-md border border-white/55 bg-white/18" aria-hidden="true" />
                )}
                <div className="glass-caption absolute bottom-5 left-5 right-5 rounded-md p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-green">{picture.category}</p>
                  <p className="mt-2 text-xl font-bold text-navy">{picture.title}</p>
                </div>
                <span className="glass-orb absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-full text-green">
                  {index === 0 ? <Image aria-hidden="true" size={22} /> : <Palette aria-hidden="true" size={22} />}
                </span>
              </div>
            </motion.section>
          ))}
        </div>
      </motion.article>
    </section>
  );
}
