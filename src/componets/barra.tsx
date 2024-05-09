import React from "react";
import { Link } from "@reach/router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from "../img/Logo.png"; // Asegúrate de que la ruta a la imagen es correcta

const NavigationBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800"); // Blanco en modo claro, gris oscuro en modo oscuro
  const color = useColorModeValue("gray.800", "white"); // Texto oscuro en modo claro, claro en modo oscuro

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between" // Cambiado a 'space-between' para distribuir los elementos uniformemente
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
      <Breadcrumb padding="1rem" separator="/">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/about">
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/contact">
            Contact
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
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
