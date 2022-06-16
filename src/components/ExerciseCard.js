import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Box>
      <Link className="exercise-card" to={`/exercises/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      </Link>

      <Stack direction="row">
        <Button title="body part" sx={{ ml:'21px', color: '#fff', borderRadius:'20px', background:'#ffa9a9', fontSize: '14px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button title="target muscle" sx={{ ml:'21px', color: '#fff', borderRadius:'20px', background:'#fcc757', fontSize: '14px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>

      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="24px">
        {exercise.name}
      </Typography>
    </Box>
  )
}

export default ExerciseCard