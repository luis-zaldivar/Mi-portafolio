import React from 'react';
import { Box, Heading, Text, Image, Flex, useColorMode, BoxProps } from '@chakra-ui/react';
import Perfil from '../img/icono.png';
import ImgRan from '../img/py.jpg';

const AboutMe: React.FC<BoxProps> = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.200', dark: 'gray.700' };
  const color = { light: 'black', dark: 'white' };

  return (
    <Flex {...props} direction={{ base: "column", md: "row" }} align="center" justify="space-between" p="5"
          bg={bgColor[colorMode]} color={color[colorMode]} minHeight="50vh">
      <Box flex="1" display="flex" flexDirection="column" alignItems="center" textAlign="center" p="5">
        <Image
          borderRadius="full"
          boxSize="150px"
          src={Perfil}
          alt="Luis Eduardo Zaldivar Miranda"
          mb="4"
        />
        <Heading as="h2" size="xl" fontWeight="bold">Luis Eduardo Zaldivar Miranda</Heading>
        <Text fontSize="lg" mt="3">
          Passionate and dedicated, I am a versatile software developer with a background in computing engineering and a deep love for problem solving. I've honed my skills through competitive programming. Winner of the Mexican Informatic Olympiad (programming tournament) 2017.
        </Text>
      </Box>
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Image
          borderRadius="lg"
          boxSize="full"
          objectFit="cover"
          src={ImgRan}
          alt="Descripción de la otra imagen"
        />
      </Box>
    </Flex>
  );
};

export default AboutMe;
