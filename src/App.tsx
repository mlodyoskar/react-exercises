import "./App.css";
import { Route, Routes } from "react-router";
import { Counter } from "./tasks/Counter";
import { Todo } from "./tasks/Todo";
import { Link } from "react-router";
import PostsView from "./tasks/PostsTable";

const App = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 fixed left-0 right-0 top-0 w-full z-10">
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:text-gray-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/counter">
              Counter
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/todo">
              Todo
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/posts" element={<PostsView />} />
        </Routes>
      </div>
    </>
  );
};

const IndexPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-4xl">Welcome to the homepage</h1>
    </div>
  );
};

export default App;
