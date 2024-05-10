import React, { useRef } from "react";
import { Box, Flex, VStack, Heading } from "@chakra-ui/react";
import ProjectCard from "../componets/proyectos";
import AboutMe from "./AboutMe";
import NavigationBar from "../componets/barra";
import Neko from "../img/Neko.png";
import Social from "../img/social.png";

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null); // Definición de skillsRef
  const contactRef = useRef<HTMLDivElement>(null); // Definición de contactRef

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

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100, // Ajustar para la altura de la barra de navegación
        behavior: "smooth",
      });
    }
  };

  return (
    <Box pt="200px">
      <NavigationBar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <VStack spacing={40} align="stretch">
        <Box ref={aboutRef} id="about" p={5}>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            About Me
          </Heading>
          <AboutMe />
        </Box>
        <Box ref={projectsRef} id="projects" p={5}>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            Projects
          </Heading>
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
        {/*}
        <Box ref={skillsRef} id="skills" p={5}>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>Skills</Heading>
          <Skills />
        </Box>
        <Box ref={contactRef} id="contact" p={5}>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>Contact</Heading>
          <Contact />
        </Box> */}
      </VStack>
    </Box>
  );
};

export default Home;
