import React from "react";
import CustomStyles from "../components/CustomStyles";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Achievements from "../components/Achievments";
import HorizontalTicker from "../components/HorizontalTicker";
import TechStack from "../components/TechStack";
import WhyUs from "../components/WhyUs";
import Proof from "../components/Proof";
import Testimonialform from "../components/Testimonialform";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FounderSection from "../components/founder";
import TrainingSection from "../components/servicesstudents";
import HappyNewMonth from "../components/newemonthflier/happynewmonth";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white font-['Inter',_sans-serif]">
      <CustomStyles />

      <Header />

      <main className="pt-0">
        <Hero />
        <Services />
        <HorizontalTicker />
        <TechStack />
        <WhyUs />
        <Achievements />
        <Proof />
        <Testimonialform />
        <Process />
        <Contact />
        <TrainingSection />
        <FounderSection />
        <HappyNewMonth />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
