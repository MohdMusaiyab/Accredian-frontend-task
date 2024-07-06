import React, { useRef, useState } from "react";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Benefits from "../components/Benifits";
import FAQ from "../components/FAQ";
import ReferModal from "../components/ReferModal";
import SubHeader from "../components/SubHeader";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const faqRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <SubHeader scrollToSection={scrollToSection} refs={{ heroRef, processRef, benefitsRef, faqRef }} />
      <div ref={heroRef}><Hero openModal={openModal} /></div>
      <div ref={processRef}><Process openModal={openModal} /></div>
      <div ref={benefitsRef}><Benefits openModal={openModal} /></div>
      <div ref={faqRef}><FAQ /></div>
      <ReferModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Home;
