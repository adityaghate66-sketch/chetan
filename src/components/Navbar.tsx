import { useEffect, useState } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { navItems, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-locked', menuOpen);
    return () => document.body.classList.remove('is-locked');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-ink-950/80 py-3 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#top" onClick={closeMenu} className="font-display flex items-center gap-2 text-lg font-bold tracking-wide text-bone">
          <Hexagon className="h-6 w-6 text-electric-400" strokeWidth={1.75} aria-hidden="true" />
          {profile.name.toUpperCase()}
          <span className="text-electric-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-bone' : 'text-ink-300 hover:text-bone'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gradient-to-r from-electric-400 to-violet-400 transition-transform duration-500 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <MagneticButton>
            <a
              href="#contact"
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-bone transition-colors duration-300 hover:bg-white/10"
            >
              Let&apos;s Connect
            </a>
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-bone md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[60px] bg-ink-950/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 px-5 pt-8">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="border-b border-white/10 transition-all duration-500"
              style={{ transitionDelay: menuOpen ? `${index * 60}ms` : '0ms', transform: menuOpen ? 'none' : 'translateY(16px)', opacity: menuOpen ? 1 : 0 }}
            >
              <a href={`#${item.id}`} onClick={closeMenu} className="font-display block py-5 text-3xl font-bold uppercase text-bone">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
