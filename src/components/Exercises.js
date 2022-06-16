import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', sm: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
