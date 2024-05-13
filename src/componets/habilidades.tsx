import { Box, List, ListItem, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import pyico from '../img/ico/python.svg';
import tsico from '../img/ico/typescript.svg';
import reactico from '../img/ico/react.svg';
import gitico from '../img/ico/git.svg';
import githubico from '../img/ico/github.svg';
import godotico from '../img/ico/godot_engine.svg';
import djangoico from '../img/ico/django.svg';
import vscodeico from '../img/ico/vscode.svg';
import chakraico from '../img/ico/chakra-ui.svg';
interface Skill {
  id: number;
  name: string;
  imagePath: string;
  experience: number;
}

const skills: Skill[] = [
  { id: 1, name: "Python", imagePath: pyico, experience: 3 },
  { id: 2, name: "TypeScript", imagePath: tsico, experience: 1 },
  { id: 3, name: "React", imagePath: reactico, experience: 1 },
  { id: 4, name: "Git", imagePath: gitico, experience: 2 },
  { id: 5, name: "GitHub", imagePath: githubico, experience: 2 },
  { id: 6, name: "Godot", imagePath: godotico, experience: 1 },
  { id: 7, name: "Django", imagePath: djangoico, experience: 1 },
  { id: 8, name: "VS Code", imagePath: vscodeico, experience: 3 },
  { id: 9, name: "Chakra UI", imagePath: chakraico, experience: 1 }
];

export function SkillsComponent() {
  const iconSize = useBreakpointValue({ base: '24px', md: '32px' });

  return (
    <Box width="full" padding={4}>
      <List spacing={3}>
        {skills.map(skill => (
          <ListItem key={skill.id} p={2} _hover={{ bg: "teal.100", cursor: "pointer", boxShadow: "md" }}>
            <Image src={skill.imagePath} boxSize={iconSize} alt={skill.name} mr={2} />
            <Text display="inline" fontSize={iconSize}>{skill.name}</Text>
            <Text display="inline" fontSize="sm" color="gray.600"> ({skill.experience} años)</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default SkillsComponent
