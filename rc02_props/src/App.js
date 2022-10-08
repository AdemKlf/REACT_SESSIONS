import React from "react";
import Msg from "./components/Msg";

function App() {
  return (
    <div>
      <Msg name="Felix" age={5} />
      <Msg name="Harvey" />
      <Msg name="Helen" />
    </div>
  );
}

export default App;
