import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function CommitmentCard({ commitments }) {
  const [id, setId] = useState(0);

  useEffect(() => {
    setId(commitments.id);
  }, []);

  return(
    <Box
      p='30px'
      rounded='20px'
      boxShadow='sm'
      bg='gray.200'
      margin='8px'
    >
      <Text>{ `Id: ${commitments.id}`}</Text>
      <Text>{ `Nome: ${commitments.name}` }</Text>
      <Text>{ `Título: ${commitments.title}` }</Text>
      <Text>{ `Data: ${commitments.date}` }</Text>
      <Text>{ `Hora: ${commitments.time}` }</Text>
      <Flex justifyContent='space-evenly' mt='8px'>
        <Button>Modificar</Button>
        <Button>Excluir</Button>
      </Flex>
    </Box>
  )
};
