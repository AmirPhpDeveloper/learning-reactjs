import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import BestBook from "./components/BestBook";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books></Books>}>
            <Route index element={<BestBook></BestBook>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
