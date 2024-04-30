import { Box, Button, Input, Text, VStack, HStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';

const Note = ({ note, onDelete, onEdit }) => (
  <HStack spacing={2} p={4} boxShadow="md" borderRadius="lg" w="full" justifyContent="space-between">
    <Text>{note.content}</Text>
    <HStack>
      <Button onClick={() => onEdit(note)} size="sm" colorScheme="blue">
        <FaPen />
      </Button>
      <Button onClick={() => onDelete(note.id)} size="sm" colorScheme="red">
        <FaTrash />
      </Button>
    </HStack>
  </HStack>
);

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const handleAddNote = () => {
    if (input.trim() === '') {
      toast({
        title: 'Error',
        description: "Note content can't be empty",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newNote = { id: Date.now(), content: input };
    setNotes([...notes, newNote]);
    setInput('');
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEditNote = (editedNote) => {
    const updatedNotes = notes.map(note => {
      if (note.id === editedNote.id) {
        return { ...note, content: editedNote.content };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <VStack spacing={4} p={8}>
      <Input placeholder="Add a new note..." value={input} onChange={(e) => setInput(e.target.value)} />
      <Button colorScheme="teal" onClick={handleAddNote}>Add Note</Button>
      <VStack spacing={4} w="full">
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={handleDeleteNote} onEdit={handleEditNote} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Notes;