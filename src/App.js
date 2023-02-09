import "./styles.css";
import { useEffect, useState ,React } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Favoritos from "./views/Favoritos";
import MiContexto from "./assets/Contexts/MiContexto";

export default function App() {

const [fotos,setFotos] =  useState ([]);
const estadoGlobal = {fotos,setFotos}

  async function obtenerDatos() {
    const res = await fetch('/data/fotos.json');
    const data = await res.json();

    setFotos (data.photos);

  }

  useEffect(() => {

    obtenerDatos()

  }, [])

  return (
    <div className="App">
      <MiContexto.Provider value={estadoGlobal}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MiContexto.Provider>
     
    </div>
  );
}
