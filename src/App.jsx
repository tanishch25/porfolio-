import React, { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import FloatingPreview from './components/FloatingPreview';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import ServicesAccordion from './components/ServicesAccordion';
import ProcessTimeline from './components/ProcessTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <SmoothScroll>
      <CustomCursor />
      <FloatingPreview />
      <CaseStudyModal project={selectedProject} onClose={handleCloseModal} />
      
      <div className="min-h-screen bg-[#060608] text-platinum font-inter selection:bg-cyber-yellow selection:text-obsidian-950 relative overflow-x-hidden">
        <Navbar onOpenModal={handleOpenModal} />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <ServicesAccordion onOpenModal={handleOpenModal} />
          <ProcessTimeline onOpenModal={handleOpenModal} />
          <ProjectsGrid onOpenModal={handleOpenModal} />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
