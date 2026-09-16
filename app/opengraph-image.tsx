import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07131d",
          color: "#eaf7fb",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#9de8ff" }}>
          <span>RK/</span>
          <span>Centreville, VA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -4, lineHeight: 0.9 }}>
            Rupesh Koirala
          </div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#22c1f1" }}>builds for scale.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#91a6b5" }}>
          <span>Forward deployed · applied AI · full-stack</span>
          <span>BlackRock · First Bank · YAJ Tech</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
