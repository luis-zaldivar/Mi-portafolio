import React, { useRef } from "react";
import { Box, Flex, VStack, Heading } from "@chakra-ui/react";
import ProjectCard from "../componets/proyectos";
import AboutMe from "./AboutMe";
import NavigationBar from "../componets/barra";
import SkillsComponent from "./habilidades";
import SocialLinksComponent from "./contacto";
import { useTranslation } from "react-i18next";
import Neko from "../img/Neko.png";
import Social from "../img/social.png";
import Placas from "../img/Placas.png";
import ImgAsm from "../img/asm.png";

const ProjectsList: React.FC = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.list.0.title"),
      description: t("projects.list.0.description"),
      imageUrl: Neko,
      projectLink: "https://github.com/luis-zaldivar/NekoMusic",
    },
    {
      title: t("projects.list.1.title"),
      description: t("projects.list.1.description"),
      imageUrl: Social,
      projectLink: "https://github.com/TheIcySpark/Society-events",
    },
    {
      title: t("projects.list.2.title"),
      description: t("projects.list.2.description"),
      imageUrl: Placas,
      projectLink: "https://github.com/luis-zaldivar/DeteccionDePlacas",
    },
    {
      title: t("projects.list.3.title"),
      description: t("projects.list.3.description"),
      imageUrl: ImgAsm,
      projectLink: "https://github.com/luis-zaldivar/Ensambladores",
    },
  ];


  return (
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
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
            {t("about.title")}
          </Heading>
          <AboutMe />
        </Box>
        <Box ref={projectsRef} id="projects" p={5}>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            {t("projects.title")}
          </Heading>
          <ProjectsList />
        </Box>
        <Box ref={skillsRef} id="skills" p={5}>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            {t("skills.title")}
          </Heading>
          <SkillsComponent />
        </Box>
        <Box ref={contactRef} id="contact" p={5}>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            {t("contact.title")}
          </Heading>
          <SocialLinksComponent />
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
