import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="shell" style={{ padding: "120px 0" }}>
      <p className="availability">404</p>
      <h1>This page is off the timeline.</h1>
      <p className="hero-copy">The page you asked for is not part of this portfolio.</p>
      <div className="hero-actions">
        <Link className="button primary" href="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
