import HeroSection from "@/views/Home/components/HeroSection";
import SkillsSection from "@/views/Home/components/SkillsSection";

const Home = () => {
  return (
    <main className="pt-[20vh]">
      <HeroSection />
      <SkillsSection />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
};

export default Home;
