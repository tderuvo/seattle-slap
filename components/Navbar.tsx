"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "The Slap", href: "#" },
  { label: "Menu", href: "#" },
  { label: "Locations", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-cream">
          Seattle Slap
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-cream/85 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="hidden rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-orange-dark md:inline-block"
        >
          Order Now
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-cream md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="mx-4 mt-2 rounded-2xl bg-charcoal/95 px-6 py-6 backdrop-blur md:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-cream/85 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-orange px-5 py-3 text-center text-sm font-semibold text-cream transition-colors hover:bg-orange-dark"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
