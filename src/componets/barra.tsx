import React from 'react';
import { Flex, Image, IconButton, useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from "../img/Logo.png";

// Define los tipos para las props
interface NavigationBarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  scrollToSection,
  aboutRef,
  projectsRef,
  skillsRef,
  contactRef
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p="1rem"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="docked"
      bg={bgColor}
      color={color}
      width="full"
      boxShadow="sm"
    >
      <Image src={Logo} alt="Logo" boxSize="100px" objectFit="contain" />
      <Flex gap="2rem">
        <Button onClick={() => scrollToSection(aboutRef)}>About</Button>
        <Button onClick={() => scrollToSection(projectsRef)}>Projects</Button>
        <Button onClick={() => scrollToSection(skillsRef)}>Skills</Button>
        <Button onClick={() => scrollToSection(contactRef)}>Contact</Button>
      </Flex>
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        isRound
        size="lg"
        alignSelf="center"
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
      />
    </Flex>
  );
};

export default NavigationBar;
