'use client';
import AboutUs from "../components/AboutUs";
import Clients from "../components/Clients";
import Consultation from "../components/Consultant";
import HeroSection from "../components/HeroSection";
import Industry from "../components/Industry";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Section from "../components/Section";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* <Head>
        <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/public/favicon-32x32.png" type="image/png" />
        <title>Home | Tech Bite Solution</title>
        <meta name="description" content="At Tech Bite Solution, we are a dynamic IT solutions and SaaS provider committed to driving innovation and efficiency across a wide range of industries. From E-commerce and healthcare to construction, education, and more, our tailored solutions help businesses and institutions optimize their operations, enhance their digital presence, and achieve sustainable growth. With expertise in IT consultancy, full-stack development, database management, and graphic design, our team of professionals is dedicated to delivering cutting-edge technology that transforms how organizations operate." />
        <meta name="keywords" content="full-stack development, database management, graphic design" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="At Tech Bite Solution, we are a dynamic IT solutions and SaaS provider committed to driving innovation and efficiency across a wide range of industries. From E-commerce and healthcare to construction, education, and more, our tailored solutions help businesses and institutions optimize their operations, enhance their digital presence, and achieve sustainable growth." />
        <meta property="og:image" content="/public/assets/logo.svg" />
        <meta property="og:url" content="https://www.techbitesolution.com/" />
        <link rel="canonical" href="https://www.techbitesolution.com/" />
      </Head> */}
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
    </>
  );
}
