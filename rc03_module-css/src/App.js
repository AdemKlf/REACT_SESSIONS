import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //JS
  return (
    //JSX alani içerisinde JS statment lari yazilacksa {} içerisine yazilir.
    <>
      {data.map((item) => {
        const { id, language, img, btnName } = item; //!destr.
        return <Card key={id} language={language} img={img} btn={btnName} />; //!Value const ta gönderilecek olandir.
      })}
    </>
  );
}

export default App;
