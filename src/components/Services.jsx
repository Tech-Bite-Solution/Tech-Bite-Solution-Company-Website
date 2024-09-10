'use client'

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import services from '/public/assets/services.svg';
import { motion, useScroll, useTransform } from 'framer-motion';

const servicesData = [
    {
        title: "Web Development",
        content: "Tech Bite Solution specializes in crafting exceptional web solutions that help businesses grow and thrive online. With a team of 15+ dedicated professionals, we’ve successfully delivered 100+ projects to clients from diverse industries, ranging from eCommerce and tech startups to finance and healthcare. Our web development services are tailored to your unique needs, ensuring seamless performance and a user-friendly experience that resonates with your audience We take a collaborative approach, working closely with clients across the US, Europe, and Asia, offering full- stack development, responsive design, and SEO optimization to ensure your website ranks well and converts visitors into customers.",
        description: "  In a digital landscape where 94 % of users judge a site’s credibility based on design, we understand the importance of building visually stunning yet functional websites.Our solutions ensure an increased customer engagement by 30 % on average, helping businesses boost sales and strengthen their online presence.Let’s build something remarkable together—your vision, powered by our expertise in cutting - edge technologies and human - centered design.",
    },
    {
        title: "Mobile App Development",
        content: "In today’s fast-paced digital world, mobile apps are shaping the future of businesses, with over 6.92 billion smartphone users worldwide. At our company, we harness this vast potential by offering cutting-edge mobile app development services designed to help your business thrive in the hands of millions. With over 200 successful app launches and a dedicated team of experienced developers, we specialize in creating seamless and engaging apps for iOS, Android, and cross-platform solutions.",

        description: "Whether you're targeting Gen Z’s mobile-first approach or catering to the millennials’ demand for convenience, we craft solutions tailored to your audience's needs. Our apps combine stunning UX/UI design with robust functionality, ensuring an intuitive experience that keeps users coming back. We’re not just developers—we’re your strategic partners in mobile success. Our clients report an average of 35% increase in customer engagement and 20% growth in revenue post-launch. Let’s build the future together, one app at a time."
    },
    {
        title: "Data Engineering and Analytics",
        content: "We specialize in Data Engineering and Analytics, helping businesses unlock the full potential of their data. We’ve successfully partnered with several startups and medium sized companies globally, spanning industries like finance, healthcare, and retail. Our team of certified data engineers and analysts work with cutting-edge technologies, ensuring scalable solutions that cater to your specific needs. We help organizations in North America, Europe, and Asia manage and analyze over 5 terabytes of data daily, offering services from data pipeline creation and cloud migration to advanced predictive analytics.",

        description: "Our human-centric approach emphasizes seamless integration with your existing infrastructure, providing you with actionable insights that drive growth. Whether you're looking to improve operational efficiency or uncover new business opportunities, our tailored solutions are designed to empower your decision-making process with real-time, accurate data. Let us turn your data into a strategic asset that fuels innovation and drives success"
    },
    {
        title: "BlockChain Development",
        content: "At Tech Bite Solution, we’re at the forefront of blockchain innovation, providing end-to-end solutions tailored to drive growth in the digital economy. With a global market forecast to grow from $10.13 billion in 2022 to $39.7 billion by 2025, blockchain is transforming industries, and we’re here to help you harness its full potential. Whether you're a startup or an enterprise, we offer customized blockchain development, tokenization, smart contracts, and decentralized finance (DeFi) solutions that cater to your needs. Our experienced team has worked with clients across finance, healthcare, supply chain, and entertainment sectors, ensuring secure and scalable systems that enhance transparency and efficiency. Partner with us to unlock the power of blockchain and lead in the digital revolution."
    },
    {
        title: "AI/ML",
        content: "At our company, we specialize in delivering cutting-edge AI and machine learning solutions designed to transform businesses. With AI set to drive global economic growth by up to $15.7 trillion by 2030, adopting these technologies isn’t just an option—it’s a competitive advantage. Our team of skilled data scientists and engineers has a proven track record of creating tailored AI models that drive efficiency, increase accuracy by 90%, and reduce operational costs by up to 30%.",

        description: "We serve clients from diverse sectors including finance, healthcare, and retail, where AI solutions are projected to save over $200 billion annually by 2025. From predictive analytics to intelligent automation, we empower businesses to make data-driven decisions, foster innovation, and scale faster in today’s digital economy. Whether you are a small startup or a medium sized company, we provide scalable AI/ML services that cater to your specific needs. Let us help you unlock the potential of AI and create a future-ready business."
    },
    {
        title: "UI/UX Design",
        content: "Tech Bite Solution offers exceptional services in UI/UX design that not only look great but drive results. With over 100+ successful projects across diverse industries such as e-commerce, healthcare, and fintech, our team understands the power of seamless digital experiences. We’ve helped companies increase user retention by up to 40% and boost engagement by 30% through intuitive design solutions tailored to their target audience. Serving clients globally, from North America to Asia, we prioritize user-centric designs that resonate with real people.",

        description: "Our process includes in-depth research, wireframing, prototyping, and user testing to ensure every detail aligns with your business goals. Whether you’re looking to enhance a mobile app, website, or enterprise platform, our goal is to deliver designs that convert and create lasting impressions. Let’s collaborate to transform your digital product into a meaningful experience that speaks to your users."
    },
    {
        title: "Open AI Integrations",
        content: "Tech Bite Solution has been helping businesses in seamless OpenAI integration, transforming the way businesses leverage AI to solve complex problems and enhance efficiency. Our services have empowered over 50+ companies globally, with a strong focus on North America and Europe, where 85% of our clients have seen a 30% reduction in operational costs within the first three months of implementation. Whether you're a startup seeking to automate customer interactions or a large enterprise looking to optimize data analytics, our team of AI experts customizes solutions that align with your business needs.",
        description: "We focus on natural language processing (NLP), predictive analytics, and automated decision-making to drive innovation and help companies scale. We make sure your OpenAI integration is secure, scalable, and user-friendly. Let us help you stay ahead of the curve, utilizing the most cutting-edge AI technology available today to maximize your productivity and revenue. 100% satisfaction guaranteed with every project."
    },
    {
        title: "Software Development",
        content: "The core expertise of our company lies in Custom Software Development that drives innovation and growth for businesses of all sizes. With a team of seasoned developers, designers, and project managers, we’ve delivered over 150+ successful projects across industries like fintech, healthcare, e-commerce, and logistics, catering to startups, SMBs, and enterprises alike. Our solutions have enabled our customers to experience reduced operational costs and improved operational efficiency by 30% on average for clients across North America, Europe, and Asia. We take a client-first approach, understanding the unique challenges and goals of each business before crafting tailor-made software that scales with your needs. Whether you need a fully integrated ERP system, a sleek mobile app, or robust cloud-based solutions, we blend cutting-edge technology with agile methodologies to ensure on-time, on-budget delivery.",
        description: "With 95% client retention and customer satisfaction scores of 9/10, we don’t just build software—we forge partnerships. Our solutions are designed to be scalable, secure, and future-ready, ensuring your business stays ahead of the curve. If you’re ready to transform your vision into reality, Tech Bite Solution is here to lead the way. Let’s build something extraordinary together."
    },
    {
        title: "Project Management and Consultation",
        content: "With a team of experienced and highly skilled professionals, Tech Bite Solution offers Project Management and Consultation services designed to deliver measurable results. We have successfully completed 150+ projects in sectors such as technology, finance, healthcare, and retail. Our team of certified project managers and consultants has worked with companies ranging from SMBs to emerging startups, delivering an average project completion time 20% faster than industry benchmarks.",
        description: "We understand that every project is unique, which is why we tailor our approach to fit the specific needs of each client.By implementing proven methodologies such as Agile, Scrum, and Lean, we help businesses improve efficiency, reduce costs, and achieve their goals.Our clients have reported a 25% increase in productivity and a 15% reduction in operational costs through our consultation services. Serving clients across North America, Europe, and Asia, our global reach ensures that we can manage your projects no matter where you're based. Whether you're looking to streamline operations, launch a new product, or optimize your processes, Tech Bite Solution is committed to providing high- quality project management that drives success.Let us help you turn your vision into reality."
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(servicesData[0]);
    const [sidebarHeight, setSidebarHeight] = useState('auto');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    // Transform the x value based on the scroll progress
    const xValue = useTransform(scrollYProgress, [0, 1], [900, -1800]);
    useEffect(() => {
        // Adjust the content area's height to match the sidebar height
        const sidebarElement = document.querySelector('#sidebar');
        if (sidebarElement) {
            setSidebarHeight(sidebarElement.clientHeight);
        }
    }, [selectedService]);

    return (
        <div id="services" ref={ref} className="">

            <div className="flex py-5  overflow-hidden relative justify-center">
                <motion.div
                     style={{ x: xValue }}
                     initial={{ opacity: 0 }} // Ensure it starts invisible
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.8}}
                     className=""
                >
                    <Image src={services} alt='Services' className='py-6 z-10 md:h-auto h-28' />
                </motion.div>
                <h1 className='text-3xl font-bold absolute top-16 md:top-36'>Our Services</h1>
            </div>
            <div className="flex flex-col max-w-6xl mx-auto relative lg:flex-row p-8">
                {/* Sidebar */}
                <div
                    id="sidebar"
                    className="w-full lg:w-1/4 md:absolute left-10 bottom-5 bg-[#000037] rounded-lg"
                >
                    <ul className="p-4">
                        {servicesData.map((service, index) => (
                            <li key={index} className="my-2">
                                <button
                                    onClick={() => setSelectedService(service)}
                                    className={`block w-full text-left px-4 py-2 rounded-lg ${selectedService.title === service.title
                                        ? "bggradient text-white font-bold"
                                        : "text-gray-300 hover:bggradient hover:text-white"
                                        }`}
                                >
                                    {service.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Area */}
                <div
                    className="w-full bg-gradient-to-r py-6 from-white to-[#EFF7F2] md:pl-[23rem] bg-white text-black p-6 shadow-lg"
                    style={{ minHeight: sidebarHeight }}
                >
                    <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
                    <p className="text-base">{selectedService.content}</p>
                    <p className="text-base py-2">{selectedService.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Services