"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../components/AuthProvider";
import ThreeDModelStub from "../components/ThreeDModelStub";
import { roleLanding, roleMenus } from "./systemConfig";

export default function AppShell({ children }) {
  const { session, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!session) {
      router.replace("/login");
      return;
    }

    const landing = roleLanding[session.role];
    const allowed = roleMenus[session.role] ?? [];
    const isAllowedPath = allowed.some((item) => item.href === pathname);
    const isLandingPath = pathname === landing;
    const isAppRoot = pathname === "/app";

    if (isAppRoot || (!isAllowedPath && !isLandingPath)) {
      router.replace(landing);
    }
  }, [pathname, router, session]);

  if (!session) return null;

  const menuItems = roleMenus[session.role] ?? [];

  return (
    <main className="system-shell">
      <aside className="system-sidebar">
        <p className="brief-kicker">App</p>
        <h1 className="system-title">{session.role} Portal</h1>
        <p className="system-meta">{session.email}</p>

        <nav className="mt-6 flex flex-col gap-2" aria-label="Role menu">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              className={`system-link ${
                pathname === item.href ? "system-link-active" : ""
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="brief-button" href="/">
            Public Site
          </Link>
          <button type="button" className="brief-nav-link" onClick={logout}>
            Logout
          </button>
        </div>
      </aside>

      <section className="system-content">
        <ThreeDModelStub title="Provider App 3D Stub" />
        <div className="mt-6">{children}</div>
      </section>
    </main>
  );
}
