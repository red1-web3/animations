import Flow1 from "@/views/Home/components/Flow1";
import Flow2 from "@/views/Home/components/Flow2";
import HeroSection from "@/views/Home/components/HeroSection";

const Home = () => {
  return (
    <main className="pt-[20vh]">
      <HeroSection />
      <Flow1 />
      <Flow2 />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
};

export default Home;
