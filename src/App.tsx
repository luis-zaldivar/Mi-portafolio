import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "../src/componets/home";
import AboutMe from "../src/componets/AboutMe";
import Projects from "../src/componets/proyectos";
import SkillsComponent from "../src/componets/habilidades";
import SocialLinksComponent from "../src/componets/contacto";
import './i18n'; 

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
          <Route path="/skills" element={<SkillsComponent />} />
          <Route path="/contact" element={<SocialLinksComponent />} /> {/* Corregido */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
