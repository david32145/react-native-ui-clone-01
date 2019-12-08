import React from 'react';

import CourseItem from './CourseItem';
import {Container} from './styles';
export default function Courses({courses}) {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {courses.map((course, index) => (
        <CourseItem key={index} {...course} />
      ))}
    </Container>
  );
}
