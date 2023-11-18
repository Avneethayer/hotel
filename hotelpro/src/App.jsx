//import React from "react";
import "./App.css";

//arbitary values, defining own styles
// const bgColor = "bg-green-500";

//custom values, defined in tailwind config
const bg_light_beige = "bg-my-light-beige";
const bg_brown = "bg-my-brown";

const App = () => {
  return (
    <div className={`underline ${bg_brown}`}>
      App
      <div className={`${bg_light_beige}`}>
        <p className="font-kalam">This text uses kalam.</p>
        <p className="font-sans">This text uses the default open sansfont.</p>
      </div>
    </div>
  );
};

export default App;
