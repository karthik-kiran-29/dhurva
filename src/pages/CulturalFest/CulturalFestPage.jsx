import Navbar from "@/components/page-components/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import { Button } from "@/components/ui/button";
import React from "react";
import DhurvaAbout from "../../assets/images/about-images.jpg";
import { motion } from "framer-motion";
import RulesAndRegulation from "./section/RulesAndRegulation";
import HeroSection from "./section/HeroSection";
import Banners from "@/components/page-components/Banners";

function CulturalFestPage() {
  return (
    <div>
      <HeroSection />
      <RulesAndRegulation />
      <Banners />
      <FooterSection />
    </div>
  );
}

export default CulturalFestPage;
