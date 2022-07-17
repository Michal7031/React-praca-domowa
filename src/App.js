//hooki
import { useState, useEffect } from "react";

// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//componenty
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import ListaPostaci from "./Components/ListaPostaci/ListaPostaci";
import ToDo from "./Components/ToDoList/ToDo";
import Contact from "./Components/contact/Contact";

function App() {
  const [logo, setLogo] = useState("Logo");

  const changeLogo = () => {
    setLogo("Nowe Logo");
  };

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const apiData = await response.json();
    setApiData(apiData.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar logoProps={logo} />
        <Router>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route
              path="lista-postaci"
              element={<ListaPostaci data={apiData} />}
            />
            <Route
              path="/todoList"
              element={<ToDo changeLogo={changeLogo} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
