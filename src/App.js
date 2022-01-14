import "./App.css";
import { useState } from "react";
import { TotalProvider } from "./totalContext";
import { currencyFormatter } from "./businessLogic";

import Navbar from "./components/Navbar/Navbar";
import NewsSection from "./components/NewsSection/NewsSection";
import ClickButton from "./components/ClickButton/ClickButton";
import Bank from "./components/BankSection/Bank";

function App() {
  const [bank, setBank] = useState(1);
  const [earnClickRate, setEarnClickRate] = useState(0.01);

  const statsObject = {
    earnClicks: 0,
    timePlayed: 0,
    scratchersBought: 0,
  };

  const totalObject = {
    bank: bank,
    setBank: setBank,
    earnClickRate: earnClickRate,
    setEarnClickRate: setEarnClickRate,
    stats: statsObject,
    formattedTotal: currencyFormatter.format(bank),
  };

  return (
    <div className="App">
      <TotalProvider value={totalObject}>
        <header>
          <Navbar />
        </header>
        <NewsSection />
        <Bank />
        <ClickButton />
      </TotalProvider>
    </div>
  );
}

export default App;
