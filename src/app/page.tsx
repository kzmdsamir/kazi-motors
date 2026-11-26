import { Hero } from "@/components/Hero";
import { HowToOrder } from "@/components/HowToOrder";
import { Catalog } from "@/components/Catalog";
import { ChassisFinder } from "@/components/ChassisFinder";
import { Dholaikhal, WhyUs } from "@/components/InfoSections";

export default function Home() {
  return (
    <div id="top">
      <Hero />
      <HowToOrder />
      <Catalog />
      <ChassisFinder />
      <Dholaikhal />
      <WhyUs />
    </div>
  );
}
