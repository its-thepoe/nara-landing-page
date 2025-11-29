// Navigation configurations for different pages

export interface NavLink {
  label: string;
  href: string;
  isAnchor?: boolean;
}

export interface NavbarConfig {
  navLinks: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

// Provider/Main page navigation
export const PROVIDER_NAV_CONFIG: NavbarConfig = {
  navLinks: [
    { label: "For Organizations", href: "/organizations", isAnchor: false },
    { label: "For Clients", href: "/clients", isAnchor: false },
    { label: "For Providers", href: "/", isAnchor: false },
  ],
  ctaText: "Get started - for free",
  ctaHref: "javascript:void(0)",
  secondaryCtaText: "Book a demo",
  secondaryCtaHref: "javascript:void(0)",
};

// Client page navigation
export const CLIENT_NAV_CONFIG: NavbarConfig = {
  navLinks: [
    { label: "For Organizations", href: "/organizations", isAnchor: false },
    { label: "For Clients", href: "/clients", isAnchor: false },
    { label: "For Providers", href: "/", isAnchor: false },
  ],
  ctaText: "Get started - for free",
  ctaHref: "javascript:void(0)",
  secondaryCtaText: "Book a demo",
  secondaryCtaHref: "javascript:void(0)",
};

// Organization page navigation
export const ORGANIZATION_NAV_CONFIG: NavbarConfig = {
  navLinks: [
    { label: "For Organizations", href: "/organizations", isAnchor: false },
    { label: "For Clients", href: "/clients", isAnchor: false },
    { label: "For Providers", href: "/", isAnchor: false },
  ],
  ctaText: "Login",
  ctaHref: "javascript:void(0)",
  secondaryCtaText: "Book Your Demo",
  secondaryCtaHref: "javascript:void(0)",
};
