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
  role: "Senior Software Engineer | Full-Stack Developer",
  headline: "Senior Full-Stack Engineer",
  location: "Centreville, VA",
  email: "rupeshkoirala17@gmail.com",
  phoneDisplay: "+1 (412) 413-1351",
  phoneHref: "tel:+14124131351",
  linkedin: "https://www.linkedin.com/in/rupeshkoirala33/",
  github: "https://github.com/RupeshKoirala",
  description:
    "Rupesh Koirala is a senior full-stack software engineer in Centreville, VA, building secure, cloud-native systems for finance and enterprise teams.",
} as const;
