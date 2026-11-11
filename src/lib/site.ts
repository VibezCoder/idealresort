export const BOOKING_URL =
  "https://www.swiftbook.io/inst/#home?propertyId=762MTwm3aRnGX73Yci3PKRVGT6dwwndjKZA7SyKnUZEQ0OQ==&JDRN=Y";

export const CONTACT = {
  address: "East Coast Road, Mahabalipuram, Tamil Nadu 603104",
  phones: [
    { label: "+91 44 2744 2240", href: "tel:+914427442240" },
    { label: "+91 44 2744 2443", href: "tel:+914427442443" },
    { label: "+91 44 2449 5161", href: "tel:+91-44-24495161" },
  ],
  email: "reservation@idealresort.com",
  instagram: "https://www.instagram.com/idealbeach/",
  facebook: "https://www.facebook.com/trulyideal/",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/mahabalipuram", label: "Mahabalipuram" },
  { to: "/events-offers", label: "Events & Offers" },
  { to: "/about-us", label: "About" },
] as const;
