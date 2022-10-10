import React from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";
import data from "./data";

//? Otomatik import çift tık + ctrl space

function App() {
  return (
    <div>
      <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
      <Person name={data[1].name} img={data[1].img} tel={data[1].tel} />
      <Person name={data[2].name} img={data[2].img} tel={data[2].tel} />
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
