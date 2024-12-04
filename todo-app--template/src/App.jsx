import Home from "./pages/Home";
import Todo from "./pages/Todo";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </main>
  );
};

export default App;
