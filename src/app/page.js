import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from "./components/hero-section/Hero";
import ProjectSection from "./components/project-section/ProjectSection";
import LogoSection from "./components/logo-section/LogoSection";
import AboutUs from "./components/about-us-section/AboutUs";

export default function Home() {
  return (
    <div>
       <HeroSection />
        <ProjectSection />
        <LogoSection />
        <AboutUs />
      </div>
  )
}
