import React from 'react';
import { Box, Link, Image, Stack } from '@chakra-ui/react';
import IcoLink from '../img/ico/linkedin.svg';
import IcoGit from '../img/ico/github.svg';
import IcoWhat from '../img/ico/whatsapp.svg';

const SocialLinksComponent: React.FC = () => {
  return (
    <Box p={5}>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Link href="https://www.linkedin.com/in/luis-eduardo-zaldivar-miranda-463baa262/" isExternal>
          <Image src={IcoLink} boxSize="2rem" _hover={{ transform: 'scale(1.1)' }} />
        </Link>
        <Link href="https://github.com/luis-zaldivar" isExternal>
          <Image src={IcoGit} boxSize="2rem" _hover={{ transform: 'scale(1.1)' }} />
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=7122005324&text&type=phone_number&app_absent=0" isExternal>
          <Image src={IcoWhat} boxSize="2rem" _hover={{ transform: 'scale(1.1)' }} />
        </Link>
      </Stack>
    </Box>
  );
};

export default SocialLinksComponent;
