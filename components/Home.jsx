import dynamic from 'next/dynamic'
import React from "react";
import MainLayout from "./MainLayout";
const Features = dynamic(() => import("./Feature"))
const HowItWorks = dynamic(() => import("./How-it-work"))
const Testimonials = dynamic(() => import("./Testimonials"))
const FAQ = dynamic(() => import("./Faq"))
import Hero from "./Hero";
import Navbar from './Navbar'
import Footer from "./Footer";

const HomePage = () => {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </MainLayout>
  );
};

export default HomePage;
