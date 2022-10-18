import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //?CRUD: (GET-READ)
  const getTutorials = async () => {
    const { data } = await axios(url);

    console.log(data);
    setTutorials(data);
  };

  //?didmount
  useEffect(() => {
    getTutorials();
  }, []);
  // getTutorials();

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
