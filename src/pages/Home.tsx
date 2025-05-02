import { Header } from "@/components/custom/sections/header";
import { Hero } from "@/components/custom/sections/hero";
import { Wallets } from "@/components/custom/sections/wallets";

const Home = () => {
  return (
    <main>
      <Header />
      <div className={"space-y-6"}>
        <Hero />
        <Wallets />
      </div>
    </main>
  );
};

export default Home;
