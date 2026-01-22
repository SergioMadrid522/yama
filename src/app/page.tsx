import BestSeller from "./components/bestSeller/BestSeller";
import Header from "./components/header/Header";
import Offers from "./components/offers/Offers";

export default function Home() {
  return (
    <main>
      <Header />
      <Offers />
      <BestSeller />
    </main>
  );
}
