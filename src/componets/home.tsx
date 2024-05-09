import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import ProjectCard from "./proyectos";
import Neko from "../img/Neko.png";
import Social from "../img/social.png";
import Barra from "./barra";
import AboutMe from "../componets/AboutMe";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Reproductor de Musica Web.",
    imageUrl: Neko,
    projectLink: "https://link-proyecto-1.com",
  },
  {
    title: "Aplicacion de eventos sociales",
    description: "Aplicacion de eventos sociales.",
    imageUrl: Social,
    projectLink: "https://link-proyecto-2.com",
  },
  {
    title: "Detector de placas.",
    description: "Detector de placas.",
    imageUrl: "url-de-la-imagen-3",
    projectLink: "https://link-proyecto-3.com",
  },
  {
    title: "Algoritmos Geneticos",
    description: "Descripción del Proyecto 4.",
    imageUrl: "url-de-la-imagen-4",
    projectLink: "https://link-proyecto-4.com",
  },
];

const Home: React.FC = () => {
  // Asume una altura de barra de 100px, ajusta según tu diseño específico.
  const navHeight = "100px"; 

  return (
    <Box pt={navHeight} p="200px">  
      <Barra />
      <Text fontSize="xl" fontWeight="bold">
        Bienvenido a mi portafolio
      </Text>
      <AboutMe mb="160px" />
      <Flex flexWrap="wrap" justify="center" gap="20px">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
