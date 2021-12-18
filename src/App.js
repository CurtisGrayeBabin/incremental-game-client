import "./App.css";
import { useState } from "react";
import { TotalProvider } from "./totalContext";

import Navbar from "./components/Navbar/Navbar";
import NewsSection from "./components/NewsSection/NewsSection";
import ClickButton from "./components/ClickButton/ClickButton";

function App() {
  const [total, setTotal] = useState(0);
  const [earnRate, setEarnRate] = useState(0.01);

  const totalObject = {
    total: total,
    setTotal: setTotal,
    earnRate: earnRate,
    setEarnRate: setEarnRate,
  };

  return (
    <div className="App">
      <TotalProvider value={totalObject}>
        <header>
          <Navbar />
        </header>
        <NewsSection />
        <ClickButton />
      </TotalProvider>
    </div>
  );
}

export default App;
