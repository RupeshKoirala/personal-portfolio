import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span className="footer-links">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
