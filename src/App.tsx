import "./App.css";
import { Counter } from "./tasks/Counter";
import { Todo } from "./tasks/Todo";
import { Weather } from "./tasks/Weather";

const App = () => {
 return (
  <div>
   <Counter />
   <Todo />
   {/* <Weather /> */}
  </div>
 );
};

export default App;
