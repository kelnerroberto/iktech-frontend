import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import CommitmentCard from '../components/CommitmentCards';
import AddTaskToAgenda from '../components/Header';
import { CommitmentContext } from '../context/CommitmentProvider';

export default function Home() {
  const { commitments } = useContext(CommitmentContext); 

  return(
    <Flex height='100vh' alignItems='center' direction='column'>
      <AddTaskToAgenda />
      <Flex flexWrap='wrap' justifyContent='space-evenly'>
        { commitments.map(eachCommitment => <CommitmentCard commitments={eachCommitment} key={eachCommitment.id}/>) }
       </Flex>
    </Flex>
  )
}
