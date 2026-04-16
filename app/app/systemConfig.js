export const roleLanding = {
  PATIENT: "/",
  PROVIDER: "/app/provider/portal",
  ADMIN: "/app/admin/dashboard",
};

export const roleMenus = {
  PATIENT: [],
  PROVIDER: [
    { label: "Portal", href: "/app/provider/portal" },
    { label: "Cases", href: "/app/provider/cases" },
  ],
  ADMIN: [
    { label: "Dashboard", href: "/app/admin/dashboard" },
    { label: "Moderation", href: "/app/admin/moderation" },
    { label: "Intelligence", href: "/app/admin/intelligence" },
  ],
};
