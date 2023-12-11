import React from "react";
import AllRoute from "./Routes";
import "./App.css";
import { useEffect } from "react";
import { GlobalDebug } from "./utils/console";
function App() {
  useEffect(() => {
    GlobalDebug(false);
  }, []);

  return (
    <div className="body">
      <AllRoute />
    </div>
  );
}

export default App;
