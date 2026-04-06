"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Heim", href: "/" },
  { label: "Hafa samband", href: "mailto:johannas@emdrstofan.is" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-surface/90 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.04)] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="shrink-0 flex items-center gap-3">
          <Image
            src="/images/flower-logo.png"
            alt="Liðan"
            width={24}
            height={43}
          />
          <span className="text-text font-semibold text-lg tracking-tight">
            Jóhanna Steingrímsdóttir
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                pathname === link.href
                  ? "text-accent"
                  : "text-body hover:text-accent"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer p-2">
          <svg
            className="w-6 h-6 text-body"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 bg-surface border border-border rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] py-2 min-w-[180px] z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2.5 text-sm font-medium text-body hover:bg-accent-light hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
