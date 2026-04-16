export const roleLanding = {
  PATIENT: "/system/patient/overview",
  PROVIDER: "/system/provider/dashboard",
  ADMIN: "/system/admin/dashboard",
};

export const roleMenus = {
  PATIENT: [
    { label: "Overview", href: "/system/patient/overview" },
    { label: "Appointments", href: "/system/patient/appointments" },
    { label: "Messages", href: "/system/patient/messages" },
  ],
  PROVIDER: [
    { label: "Dashboard", href: "/system/provider/dashboard" },
    { label: "Cases", href: "/system/provider/cases" },
    { label: "Outcomes", href: "/system/provider/outcomes" },
  ],
  ADMIN: [
    { label: "Dashboard", href: "/system/admin/dashboard" },
    { label: "Moderation", href: "/system/admin/moderation" },
    { label: "Users", href: "/system/admin/users" },
    { label: "Settings", href: "/system/admin/settings" },
  ],
};
