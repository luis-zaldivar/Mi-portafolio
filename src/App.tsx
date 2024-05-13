import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./componets/home";
import AboutMe from "./componets/AboutMe";
import Projects from "./componets/proyectos";
import SkillsComponent from "./componets/habilidades";
import SocialLinksComponent from "./componets/contacto";
import './i18n';

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const customTheme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={customTheme}>
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
        <Route path="/contact" element={<SocialLinksComponent />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
