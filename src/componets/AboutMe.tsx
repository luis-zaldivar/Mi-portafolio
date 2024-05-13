import React from "react";
import { Box, Heading, Text, Image, Flex, useColorMode, BoxProps } from "@chakra-ui/react";
import { useTranslation } from 'react-i18next'; // Asegúrate de que i18next está correctamente configurado
import Perfil from "../img/icono.png";
import ImgRan from "../img/py.jpg";

const AboutMe: React.FC<BoxProps> = (props) => {
  const { t } = useTranslation(); // Inicializa el hook de i18next para usar la función de traducción
  const { colorMode } = useColorMode(); // Utiliza el modo de color de Chakra UI para estilos condicionales
  const bgColor = { light: "gray.200", dark: "gray.700" }; // Colores de fondo basados en el modo de color
  const color = { light: "black", dark: "white" }; // Colores de texto basados en el modo de color

  return (
    <Flex
      {...props}
      direction={{ base: "column", md: "row" }} // Ajusta la dirección del flex según el tamaño de la pantalla
      align="center"
      justify="space-between"
      p="5"
      bg={bgColor[colorMode]} // Aplica el color de fondo según el modo de color
      color={color[colorMode]} // Aplica el color de texto según el modo de color
      minHeight="50vh" // Altura mínima del componente
    >
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        p="5"
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src={Perfil}
          alt="Luis Eduardo Zaldivar Miranda"
          mb="4"
        />
        <Heading as="h2" size="xl" fontWeight="bold">
          Luis Eduardo Zaldivar Miranda
        </Heading>
        <Text fontSize="lg" mt="3">
          {t('about.description')} {/* Llama a la traducción para la descripción personal */}
        </Text>
      </Box>
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Image
          borderRadius="lg"
          boxSize="full"
          objectFit="cover"
          src={ImgRan}
          alt="Creative Coding Image" // Asegúrate de que el texto alternativo también pueda ser traducido si es necesario
        />
      </Box>
    </Flex>
  );
};

export default AboutMe;
