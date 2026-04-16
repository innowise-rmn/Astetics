"use client";

import Link from "next/link";
import { navLinks } from "../siteContent";
import { useAuth } from "./AuthProvider";
import ThreeDModelStub from "./ThreeDModelStub";

export function SiteFrame({ children }) {
  const { session, logout } = useAuth();

  return (
    <main className="brief-shell">
      <header className="brief-header">
        <div>
          <p className="brief-kicker">Beso Aesthetics</p>
          <p className="brief-brand">Best Med Spa NYC</p>
        </div>
        <nav className="brief-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} className="brief-nav-link" href={link.href}>
              {link.label}
            </Link>
          ))}
          {session ? (
            <>
              <span className="brief-role-chip">{session.role}</span>
              <button
                type="button"
                className="brief-nav-link"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="brief-button" href="/login">
              Login
            </Link>
          )}
        </nav>
      </header>
      <div className="mt-8">
        <ThreeDModelStub title="Patient Surface 3D Stub" />
      </div>
      {children}
    </main>
  );
}

export function SectionIntro({ kicker, title, copy }) {
  return (
    <section className="pt-10">
      <p className="brief-kicker">{kicker}</p>
      <h1 className="brief-title">{title}</h1>
      <p className="brief-subtitle">{copy}</p>
    </section>
  );
}
