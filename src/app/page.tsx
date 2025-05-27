import Benefits from "./components/Benefits";
import Calculator from "./components/Calculator";
import Features from "./components/Features";
import Main from "./components/Main";
import Reasons from "./components/Reasons";
import Reviews from "./components/Reviews";
import VedAdvantages from "./components/VedAdvantages";
import VedTeam from "./components/VedTeam";
import Package from "./components/Package";
export default function Home() {
  return (
    <main>
      <Main />
      <Features />
      <Benefits />
      <Calculator />
      <Reasons />
      <Reviews />
      <VedAdvantages />
      <VedTeam />
      <Package />
    </main>
  );
}
