import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { ChassisFinder } from "@/components/ChassisFinder";
import { HowToOrder } from "@/components/HowToOrder";
import { Dholaikhal, WhyUs } from "@/components/InfoSections";

export default function Home() {
  return (
    <div id="top">
      <Hero />
      <Catalog />
      <ChassisFinder />
      <HowToOrder />
      <Dholaikhal />
      <WhyUs />
    </div>
  );
}
