// import TeamCarousel from "@/components/cards";
import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Consultation from "@/components/Consultant";
import HeroSection from "@/components/HeroSection";
import Industry from "@/components/Industry";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Section from "@/components/Section";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <>
      <Section>
        <HeroSection />
        <AboutUs />
        <Services />
        <Industry />
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
