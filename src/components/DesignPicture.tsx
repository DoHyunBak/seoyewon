import { motion, useReducedMotion } from "framer-motion";
import { Image, Palette } from "lucide-react";
import { designPictures } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

const toneClass = {
  navy: "from-[#1F2A44] via-[#596476] to-[#FAF7F2]",
  green: "from-[#3A7D5A] via-[#9BB6A3] to-[#FAF7F2]",
  pink: "from-[#F3B6C8] via-[#F7D9E2] to-[#FAF7F2]"
};

export function DesignPicture(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-shell section-spacing" id="design-picture">
      <SectionTitle
        eyebrow="Design Picture"
        title="디자인 작업 이미지를 보여주는 영역"
        description="주얼리·패션 디자인 전공의 시각 자료를 배치해, 숫자 정리 역량만 앞서 보이지 않도록 균형을 맞춥니다."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {designPictures.map((picture, index) => (
          <motion.article
            className="card overflow-hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            key={picture.title}
            transition={{ duration: 0.24, delay: shouldReduceMotion ? 0 : index * 0.06, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <div className={`relative aspect-[4/5] bg-gradient-to-br ${toneClass[picture.tone as keyof typeof toneClass]}`}>
              <div className="absolute inset-5 rounded-md border border-white/55 bg-white/18" aria-hidden="true" />
              <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white/88 p-4 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-green">{picture.category}</p>
                <p className="mt-2 text-xl font-bold text-navy">{picture.title}</p>
              </div>
              <span className="absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white/85 text-green">
                {index === 0 ? <Image aria-hidden="true" size={22} /> : <Palette aria-hidden="true" size={22} />}
              </span>
            </div>
            <div className="p-5">
              <p className="text-sm leading-6 text-muted">{picture.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
