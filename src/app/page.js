// import TeamCarousel from "@/components/cards";
import Clients from "@/components/Clients";
import Consultation from "@/components/Consultant";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Section from "@/components/Section";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section>
        <HeroSection />
        <Services />
        <Portfolio />
        <Consultation />
        <Clients />
      </Section>
      {/* <TeamCarousel /> */}
    </>
  );
}
