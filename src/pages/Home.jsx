import Hero from "../components/Hero/Hero";
import Integrations from "../components/Integrations/Integrations";

const Home = () => {
  return (
    <div className="container mx-auto mt-[10%] space-y-28 overflow-hidden pb-16">
      <div>
        <Hero />
      </div>
      <div>
        <Integrations />
      </div>
    </div>
  );
};

export default Home;
