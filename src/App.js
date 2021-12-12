import "./App.css";
import { useState } from "react";
import { TotalProvider } from "./totalContext";

import Navbar from "./components/Navbar/Navbar";
import ClickButton from "./components/ClickButton/ClickButton";

function App() {
  const [total, setTotal] = useState(0);

  const totalObject = {
    total: total,
    setTotal: setTotal,
  };

  return (
    <div className="App">
      <header></header>
      <TotalProvider value={totalObject}>
        <Navbar />
        <ClickButton />
      </TotalProvider>
    </div>
  );
}

export default App;
