import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Search from "./components/Search";
import Repo from "./components/Repo";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/repo" element={<Repo />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
