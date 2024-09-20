import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AnimationProvider from "../components/AnimationProvider";


// Import and configure the Montserrat font
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Tech Bite Solution",
  description: "At Tech Bite Solution, we are a dynamic IT solutions and SaaS provider committed to driving innovation and efficiency across a wide range of industries. From E-commerce and healthcare to construction, education, and more, our tailored solutions help businesses and institutions optimize their operations, enhance their digital presence, and achieve sustainable growth.With expertise in IT consultancy, full- stack development, database management, and graphic design, our team of professionals is dedicated to delivering cutting - edge technology that transforms how organizations operate.We combine industry knowledge with technical proficiency to offer seamless, scalable, and secure SaaS products that meet the evolving demands of the modern business landscape.As a client - centered agency, we focus on understanding your unique challenges and goals, ensuring our solutions are aligned with your vision.Whether you are looking to streamline processes, improve customer experience, or scale your business with the latest technology, Tech Bite Solution is here to guide you every step of the way.Let us help you harness the power of technology to unlock your full potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tech Bite Solution</title>
        <meta name="description" content="At Tech Bite Solution, we are a dynamic IT solutions and SaaS provider committed to driving innovation and efficiency across a wide range of industries. From E-commerce and healthcare to construction, education, and more, our tailored solutions help businesses and institutions optimize their operations, enhance their digital presence, and achieve sustainable growth.With expertise in IT consultancy, full- stack development, database management, and graphic design, our team of professionals is dedicated to delivering cutting - edge technology that transforms how organizations operate.We combine industry knowledge with technical proficiency to offer seamless, scalable, and secure SaaS products that meet the evolving demands of the modern business landscape.As a client - centered agency, we focus on understanding your unique challenges and goals, ensuring our solutions are aligned with your vision.Whether you are looking to streamline processes, improve customer experience, or scale your business with the latest technology, Tech Bite Solution is here to guide you every step of the way.Let us help you harness the power of technology to unlock your full potential" />

        {/* Favicon for browsers */}
        <link rel="icon" href="/assets/tbite.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/assets/tbite.png" type="image/png" sizes="16x16" />

        {/* Apple Touch Icon for iOS */}
        <link rel="apple-touch-icon" href="/assets/tbite.png" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Tech-bite" />
        <meta property="og:description" content="Tech-bite - Driving innovation and IT solutions." />
        <meta property="og:image" content="/assets/tbite.png" />
        <meta property="og:url" content="https://www.techbitesolution.com" />

        {/* Twitter meta tags for sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech-bite" />
        <meta name="twitter:description" content="Tech-bite - Driving innovation and IT solutions." />
        <meta name="twitter:image" content="/assets/tbite.png" />

        {/* Fallback for older browsers */}
        <link rel="shortcut icon" href="/assets/tbite.png" type="image/png" />

        {/* Canonical link for SEO */}
        <link rel="canonical" href="https://www.techbitesolution.com" />
      </head>


      {/* <Head>
        <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/public/favicon-32x32.png" type="image/png" />
        <title>Home | Tech Bite Solution</title>
        <meta name="description" content="At Tech Bite Solution, we are a dynamic IT solutions and SaaS provider committed to driving innovation and efficiency across a wide range of industries. From E-commerce and healthcare to construction, education, and more, our tailored solutions help businesses and institutions optimize their operations, enhance their digital presence, and achieve sustainable growth.
With expertise in IT consultancy, full-stack development, database management, and graphic design, our team of professionals is dedicated to delivering cutting-edge technology that transforms how organizations operate. We combine industry knowledge with technical proficiency to offer seamless, scalable, and secure SaaS products that meet the evolving demands of the modern business landscape.
As a client-centered agency, we focus on understanding your unique challenges and goals, ensuring our solutions are aligned with your vision. Whether you are looking to streamline processes, improve customer experience, or scale your business with the latest technology, Tech Bite Solution is here to guide you every step of the way. Let us help you harness the power of technology to unlock your full potential" />
        <meta name="keywords" content="full-stack development, database management, graphic design" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="At Tech Bite Solution, we are a dynamic IT solutions and SaaS provider committed to driving innovation and efficiency across a wide range of industries. From E-commerce and healthcare to construction, education, and more, our tailored solutions help businesses and institutions optimize their operations, enhance their digital presence, and achieve sustainable growth.

With expertise in IT consultancy, full-stack development, database management, and graphic design, our team of professionals is dedicated to delivering cutting-edge technology that transforms how organizations operate. We combine industry knowledge with technical proficiency to offer seamless, scalable, and secure SaaS products that meet the evolving demands of the modern business landscape.

As a client-centered agency, we focus on understanding your unique challenges and goals, ensuring our solutions are aligned with your vision. Whether you are looking to streamline processes, improve customer experience, or scale your business with the latest technology, Tech Bite Solution is here to guide you every step of the way. Let us help you harness the power of technology to unlock your full potential" />
        <meta property="og:image" content="/public/assets/logo.svg" />
        <meta property="og:url" content="https://www.techbitesolution.com/" />
        <link rel="canonical" href="https://www.techbitesolution.com/" />
      </Head> */}
      <body className={montserrat.className}>
        <div className="">
          <Navbar />
          <div className="">
            <AnimationProvider>
              {children}
            </AnimationProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
