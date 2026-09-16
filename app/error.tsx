"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" className="shell" style={{ padding: "120px 0" }}>
      <p className="availability">Something broke</p>
      <h1>The page failed to render.</h1>
      <p className="hero-copy">{error.message || "An unexpected error occurred."}</p>
      <div className="hero-actions">
        <button className="button primary" type="button" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
