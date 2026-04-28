import { navigationItems, portfolioOwner } from "../data/portfolio";

export function Navigation(): JSX.Element {
  return (
    <header className="card gradient-border-card ios-nav sticky top-0 z-50 rounded-none">
      <div className="section-shell flex min-h-16 flex-col justify-center gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <a className="text-sm font-bold text-navy outline-none focus-visible:ring-4 focus-visible:ring-pink/40" href="#hero">
          {portfolioOwner.name}
        </a>
        <nav
          aria-label="주요 섹션 이동"
          className="grid w-full max-w-[calc(100vw-40px)] grid-cols-3 gap-1.5 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-end sm:gap-2"
        >
          {navigationItems.map((item) => (
            <a
              className="ios-nav-link border border-transparent px-2.5 py-2 text-center text-xs font-semibold text-muted outline-none transition hover:text-navy focus-visible:ring-4 focus-visible:ring-pink/40 sm:px-3 sm:text-sm"
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
