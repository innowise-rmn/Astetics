"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiteFrame } from "../components/SiteFrame";
import { useAuth } from "../components/AuthProvider";
import { roleLanding } from "../app/systemConfig";

const roles = ["PATIENT", "PROVIDER", "ADMIN"];

export default function LoginPage() {
  const router = useRouter();
  const { login, session } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PATIENT");

  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      email: email.trim() || "guest@beso.local",
      role,
    });
    setPassword("");
    router.push(roleLanding[role] ?? "/app");
  };

  return (
    <SiteFrame>
      <section className="pt-10">
        <p className="brief-kicker">Login</p>
        <h1 className="brief-title">Role Selector Sign In</h1>
        <p className="brief-subtitle">
          This login accepts any credentials. Role is stored in app memory only
          and will reset on page reload.
        </p>
      </section>

      <div className="brief-divider" />

      <section className="brief-grid">
        <article className="brief-card">
          <h2 className="brief-card-title">Sign In</h2>
          <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="brief-label">Email</span>
              <input
                className="brief-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label className="block">
              <span className="brief-label">Password</span>
              <input
                className="brief-input"
                type="password"
                placeholder="Any password works"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            <label className="block">
              <span className="brief-label">Role</span>
              <select
                className="brief-input"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                {roles.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <button className="brief-button" type="submit">
              Login
            </button>
          </form>
        </article>

        <article className="brief-card">
          <h2 className="brief-card-title">Session Status</h2>
          <p className="brief-card-copy">
            {session
              ? `Logged in as ${session.email} (${session.role}).`
              : "No active in-memory session."}
          </p>
          <p className="brief-card-copy">
            Reloading the page clears this state by design.
          </p>
        </article>
      </section>
    </SiteFrame>
  );
}
