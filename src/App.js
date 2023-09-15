import { useState } from "react";
import "./App.css";

import Web from "./components/Web";
import Home from "./components/Home";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

function App() {
  const [picture, setPicture] = useState("");
  const [enable, setEnable] = useState(false);
  const [name, setName] = useState("");

  return (
    <div style={{ width: "25%" }} className="App">
      {!enable ? (
        <Home
          setEnable={setEnable}
          picture={{ picture }}
          name={name}
          setName={setName}
        />
      ) : (
        <>
          <Web
            setPicture={setPicture}
            setEnable={setEnable}
            picture={{ picture }}
            name={name}
            setName={setName}
          />
        </>
      )}
    </div>
  );
}

export default App;
