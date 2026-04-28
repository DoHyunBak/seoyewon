type SkillChipProps = {
  label: string;
};

export function SkillChip({ label }: SkillChipProps): JSX.Element {
  return (
    <span className="card chip-hover inline-flex min-h-9 items-center px-3 py-1.5 text-sm font-semibold text-navy">
      {label}
    </span>
  );
}
