type SkillChipProps = {
  label: string;
};

export function SkillChip({ label }: SkillChipProps): JSX.Element {
  return (
    <span className="chip-hover inline-flex min-h-9 items-center rounded-full border border-white/70 bg-white/45 px-3 py-1.5 text-sm font-semibold text-navy backdrop-blur-sm">
      {label}
    </span>
  );
}
