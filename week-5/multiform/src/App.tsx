import Main from "./main/Main";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/form" element={<Main />} />
        </Routes>
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
