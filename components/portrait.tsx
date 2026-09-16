import Image from "next/image";

export function Portrait() {
  return (
    <div className="portrait">
      <Image
        src="/rupesh-koirala.jpg"
        alt="Professional headshot of Rupesh Koirala, wearing a navy suit and tie, looking toward the camera"
        fill
        priority
        sizes="(max-width: 860px) 480px, 420px"
        className="portrait-photo"
      />
    </div>
  );
}
