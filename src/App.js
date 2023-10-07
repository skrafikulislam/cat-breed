//  import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";
import  SingleCat  from "./components/SingleCat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<SingleCat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
