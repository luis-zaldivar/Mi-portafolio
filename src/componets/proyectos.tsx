import React from 'react';
import {
  Box as ChakraBox,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from '@chakra-ui/react';

interface CardProps {
  imageUrl: string; // URL de la imagen del proyecto
  title: string; // Título del proyecto
  description?: string; // Descripción opcional del proyecto
  projectLink?: string; // Enlace opcional al proyecto
}

const ProjectCard: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  projectLink,
}) => {
  return (
    <ChakraBox maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {/* Contenedor para la imagen para centrarla */}
      <ChakraBox display="flex" justifyContent="center" alignItems="center" height="200px">
        <Image src={imageUrl} alt={title} maxH="200px" maxW="100%" objectFit="cover" />
      </ChakraBox>
      <Stack p="6">
        <Heading size="md">{title}</Heading>
        {description && <Text fontSize="sm">{description}</Text>}
        <Divider />
        {projectLink && (
          <Button
            as="a"
            href={projectLink}
            target="_blank"  // Añadir esto para abrir en una nueva pestaña
            rel="noopener noreferrer" // Buenas prácticas de seguridad
            colorScheme="teal"
            mt="4"
            width="full"
          >
            Ver Proyecto
          </Button>
        )}
      </Stack>
    </ChakraBox>
  );
};

export default ProjectCard;
