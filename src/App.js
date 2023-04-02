import React from "react"
import {Outlet} from "react-router-dom"
import Headers from "./components/Headers.js"

function App() {
  return (
    <div className="App">

      <Headers />
      <Outlet />
      
    </div>
  );
}

export default App;
