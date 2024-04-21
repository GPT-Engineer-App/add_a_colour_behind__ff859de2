import React from 'react';
import { Button, Input, VStack, HStack } from '@chakra-ui/react';
import { FaUserPlus } from 'react-icons/fa';

const PlayerNameInput = ({ playerNames, setPlayerNames, startGame }) => {
  const addPlayer = () => {
    setPlayerNames([...playerNames, '']);
  };

  const setPlayerName = (name, index) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

<VStack spacing={4}>
  {playerNames.map((name, index) => (
    <HStack key={index} style={{ color: index === playerNames.length - 1 ? '#000' : '#888' }}>
      <Input
        placeholder={`Player ${index + 1} Name`}
        value={name}
        onChange={(e) => setPlayerName(e.target.value, index)}
        style={{ backgroundColor: index === playerNames.length - 1 ? '#ffff99' : 'transparent' }}
      />
    </HStack>
  ))}
  <Button leftIcon={<FaUserPlus />} colorScheme="teal" onClick={addPlayer} isDisabled={playerNames.length >= 5}>
    Add Player
  </Button>
  <Button colorScheme="green" onClick={startGame} isDisabled={playerNames.some(name => name.trim() === '')}>
    Start Game
  </Button>
</VStack>
};

export default PlayerNameInput;