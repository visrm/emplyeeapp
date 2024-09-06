import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import View from "./components/View";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
