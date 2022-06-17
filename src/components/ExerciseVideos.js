import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import YouTube from 'react-youtube';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <>
      { exerciseVideos.length && (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
          <Typography variant="h3" mb="33px">
            Watch{' '}
            <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
              {name}
            </span>{' '}
            exercise videos
          </Typography>
          <Stack
            justifyContent="flex-start"
            flexWrap="wrap"
            alignItems="center"
            sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
          >
            {exerciseVideos?.slice(0, 6).map((item, index) => (
              <YouTube
                className="exercise-video"
                videoId={item.video.videoId}
              />
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
};

export default ExerciseVideos;
