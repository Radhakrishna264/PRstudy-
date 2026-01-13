export const adminSidebarConfig = [
  {
    section: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/admin-dashboard",
        icon: "dashboard",
      },
    ],
  },

  {
    section: "Management",
    items: [
      {
        label: "Users",
        href: "/users",
        icon: "users",
      },
      {
        label: "Files Control",
        href: "/files-control",
        icon: "files",
      },
      {
        label: "Tests Control",
        href: "/tests-control",
        icon: "tests",
      },
    ],
  },

  {
    section: "Finance",
    items: [
      {
        label: "Payments",
        href: "/payments",
        icon: "payments",
      },
    ],
  },

  {
    section: "Insights",
    items: [
      {
        label: "Analytics",
        href: "/analytics",
        icon: "analytics",
      },
    ],
  },

  {
    section: "System",
    superadminOnly: true,
    items: [
      {
        label: "Capabilities",
        href: "/_config/capabilities",
      },
      {
        label: "Roles",
        href: "/_config/roles",
      },
      {
        label: "Feature Flags",
        href: "/_flags",
      },
      {
        label: "Audit Logs",
        href: "/_config/audits",
      },
    ],
  },
];
