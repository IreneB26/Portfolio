import "./App.css";

import ContactAside from "./components/contact-sidebar/contact-aside";

import { Route, Routes } from "react-router-dom";

import Index from "./pages/index";
import NavMenu from "./components/menu/menu";
import Proyectos from "./pages/proyectos/proyectos";
import ContainProyectos from "./pages/contain_proyectos/containProyectos";
import { useState } from "react";

import { motion } from "framer-motion";

import { useFirebaseApp } from "reactfire";
import { DatabaseProvider } from "reactfire";
import { getDatabase } from "firebase/database";

import Contact from "./pages/contact/contact";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");

  const setStyle = (color) => {
    setBackgroundColor(color);
    if (backgroundColor === "black") {
      setBackgroundColor("white");
    }
  };
  const firestoreInstance = getDatabase(useFirebaseApp());

  const database = getDatabase();
  return (
    <DatabaseProvider sdk={firestoreInstance}>
      <div className={`App ${backgroundColor}`}>
        {/* className="App" */}

        <NavMenu changeColor={setStyle} />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<ContainProyectos />} />

          <Route path="/infoProyecto/:id" element={<Proyectos />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>

        <ContactAside />
      </div>
    </DatabaseProvider>
  );
}

export default App;
