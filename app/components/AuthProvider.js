"use client";

import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  const value = useMemo(
    () => ({
      session,
      login: ({ email, role }) => {
        setSession({
          email,
          role,
          loggedInAt: Date.now(),
        });
      },
      logout: () => setSession(null),
    }),
    [session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
