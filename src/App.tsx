import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "../src/componets/home";
import AboutMe from "../src/componets/AboutMe"; // Importa el componente AboutMe
import Projects from "../src/componets/proyectos";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const customTheme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route
            path="/projects"
            element={
              <Projects
                imageUrl="ruta/a/la/imagen.jpg"
                title="Titulo del Proyecto"
              />
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
