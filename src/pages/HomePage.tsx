import React from "react";
import CustomStyles from "../components/CustomStyles";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SimpleProcess from "../components/SimpleProcess";
import Achievements from "../components/Achievments";
import TechStack from "../components/TechStack";
import WhyUs from "../components/WhyUs";
import Proof from "../components/Proof";
import Testimonialform from "../components/Testimonialform";
import Process from "../components/Process";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#f4f5f7] font-sans text-navy">
      <CustomStyles />

      <Header />

      <main className="pt-0">
        <Hero />
        <Achievements />
        <Services />
        <SimpleProcess />
        <WhyUs />
        <Proof />
        <Process />
        <TechStack />
        <Contact />
        <FAQ />
        <Testimonialform />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
