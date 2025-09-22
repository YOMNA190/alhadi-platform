// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import CourseList from '../components/CourseList';
import Instructor from '../components/Instructor';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CourseList />
      <Instructor />
    </>
  );
};

export default HomePage;