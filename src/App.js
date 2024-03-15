import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CarList from "./components/CarList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/cars" element={<CarList />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
