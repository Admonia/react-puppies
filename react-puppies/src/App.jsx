import "./App.css";
import AllPlayers from "./components/AllPlayers.jsx";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SearchBar from "./components/SearchBar";
import SinglePlayer from "./components/SinglePlayer";
import { Route, Routes } from "react-router-dom";
function App() {
     return (
          <>
               <div id="container">
                    <NavBar />
                    <SearchBar />
               </div>
               <div id="routeDiv">
                    <Routes>
                         <Route path="/" element={<AllPlayers />} />
                         <Route
                              path="/players/:id"
                              element={<SinglePlayer />}
                         />
                         <Route
                              path="/newplayerform"
                              element={<NewPlayerForm />}
                         />
                    </Routes>
               </div>
          </>
     );
}
export default App;