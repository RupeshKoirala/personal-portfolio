export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const site = {
  name: "Rupesh Koirala",
  shortName: "RK",
  role: "Forward Deployed Engineer | Applied AI Engineer | Full-Stack",
  headline: "Forward Deployed Engineer",
  location: "Centreville, VA",
  address: "5812 Rock Forest Ct, Centreville, VA 20121",
  streetAddress: "5812 Rock Forest Ct",
  postalCode: "20121",
  email: "rupeshkoirala17@gmail.com",
  phoneDisplay: "+1 (412) 413-1351",
  phoneHref: "tel:+14124131351",
  linkedin: "https://www.linkedin.com/in/rupeshkoirala33/",
  linkedinLabel: "linkedin.com/in/rupeshkoirala33",
  github: "https://github.com/RupeshKoirala",
  description:
    "Rupesh Koirala is a forward-deployed and applied AI engineer in Centreville, VA, building production full-stack systems, APIs, and cloud platforms across finance and enterprise teams.",
} as const;
