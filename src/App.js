import "./App.css";
import { useState, useEffect } from "react";

const MAX = Number(process.env.REACT_APP_MAX_TIME_MULTIPLE);
const MS = Number(process.env.REACT_APP_MS);

// for updating the timestamp in random intervals of seconds
const randomSeconds = () => {
  return MS * Math.floor(Math.random() * MAX);
};

// server requesting
const callApi = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  if (response.status !== 200) {
    throw Error("Response did not return 200");
  }
  return await response.json();
};

function App() {
  const [time, setTime] = useState("");

  // update time for the first time
  useEffect(() => {
    callApi()
      .then((res) => setTime(res.time))
      .catch((err) => {
        throw Error(err);
      });
  }, []);

  // update time every x ms
  useEffect(() => {
    // get initial time
    async function fetchAPI() {
      try {
        await callApi()
          .then((res) => setTime(res.time))
          .catch((err) => {
            throw Error(err);
          });
      } catch (err) {
        console.log(err);
        throw Error(err);
      }
    }

    const intervalId = setInterval(() => {
      const timeoutId = setTimeout(() => {
        fetchAPI();
      }, randomSeconds());
      // clear the interval id
      return () => clearTimeout(timeoutId);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header></header>
      <p>{time}</p>
    </div>
  );
}

export default App;
