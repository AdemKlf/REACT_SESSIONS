import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { legacy_createStore } from "redux";

function App() {
  const store = creatStore();
  return (
    <div className="app">
      <Counter />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
