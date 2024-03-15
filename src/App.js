import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SpaceList from "./components/SpacesList";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpaceList />} />
        <Route path="/spaces" element={<SpaceList />} />
        <Route path="/spaces/:roomsId" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
