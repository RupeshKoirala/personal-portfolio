import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Full-stack engineering · cloud systems · recent AI practice</span>
      </div>
    </footer>
  );
}
