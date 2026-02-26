'use client'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Project/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About />
    <Experiences />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
