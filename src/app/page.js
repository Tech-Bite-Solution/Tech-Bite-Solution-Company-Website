// import TeamCarousel from "@/components/cards";
import Clients from "@/components/Clients";
import Consultation from "@/components/Consultant";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Section from "@/components/Section";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section>
        <HeroSection />
        <Services />
        <Portfolio />
        <Clients />
        <Consultation />
        <WhyUs />
        <Reviews />
      </Section>
      {/* <TeamCarousel /> */}
    </>
  );
}
