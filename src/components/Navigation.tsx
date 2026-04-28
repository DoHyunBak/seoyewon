import { navigationItems, portfolioOwner } from "../data/portfolio";

export function Navigation(): JSX.Element {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/95 backdrop-blur">
      <div className="section-shell flex min-h-16 flex-col justify-center gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <a className="text-sm font-bold text-navy outline-none focus-visible:ring-4 focus-visible:ring-pink/40" href="#hero">
          {portfolioOwner.name}
          <span className="ml-2 font-medium text-muted">Design Finance</span>
        </a>
        <nav
          aria-label="주요 섹션 이동"
          className="grid w-full max-w-[calc(100vw-40px)] grid-cols-3 gap-1.5 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:gap-2"
        >
          {navigationItems.map((item) => (
            <a
              className="rounded-full border border-transparent px-2.5 py-2 text-center text-xs font-semibold text-muted outline-none transition hover:border-border hover:bg-white hover:text-navy focus-visible:ring-4 focus-visible:ring-pink/40 sm:px-3 sm:text-sm"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
