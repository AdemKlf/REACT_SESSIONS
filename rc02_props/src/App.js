import React from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";
// import data from "./data";

//? Otomatik import çift tık + ctrl space

function App() {
  return (
    <div>
      <Person />
    </div>
    // <div>
    //   {data.map((person) => (
    //     <Person
    //       key={person.name}
    //       name={person.name}
    //       img={person.img}
    //       tel={person.tel}
    //     />
    //   ))}
    // </div>
  );
}

export default App;
