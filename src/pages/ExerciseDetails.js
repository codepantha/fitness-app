import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import fetchData, { options, videoOptions } from '../utils/fetchData';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com/';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, options);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, videoOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }
    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetails;
