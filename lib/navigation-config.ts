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
    { label: "For Clients", href: "/clients", isAnchor: false },
    { label: "Features", href: "#features", isAnchor: true },
    { label: "How it works", href: "#how-it-works", isAnchor: true },
    { label: "FAQs", href: "#faqs", isAnchor: true },
  ],
  ctaText: "Get started - for free",
  ctaHref: "javascript:void(0)",
  secondaryCtaText: "Book a demo",
  secondaryCtaHref: "javascript:void(0)",
};

// Client page navigation
export const CLIENT_NAV_CONFIG: NavbarConfig = {
  navLinks: [
    { label: "For Providers", href: "/", isAnchor: false },
    { label: "Features", href: "#features", isAnchor: true },
    { label: "Pricing", href: "#pricing", isAnchor: true },
    { label: "FAQs", href: "#faqs", isAnchor: true },
  ],
  ctaText: "Get started - for free",
  ctaHref: "javascript:void(0)",
  secondaryCtaText: "Book a demo",
  secondaryCtaHref: "javascript:void(0)",
};
