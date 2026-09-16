import { Capabilities } from "@/components/capabilities";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { ProofStrip } from "@/components/proof-strip";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <ProofStrip />
        <Experience />
        <Capabilities />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
