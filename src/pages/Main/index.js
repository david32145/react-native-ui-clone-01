import React from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import course01 from '../../assets/cart-01.png';
import course02 from '../../assets/cart-02.png';
import course03 from '../../assets/cart-03.png';

import {Container, Header, Tab, BottomIndicator} from './styles';

import CourseList from '../../components/Courses';
import ArchievementList from '../../components/Archievements';
import UserList from '../../components/Users';

const courses = [
  {
    image: course01,
    label: 'Iniciante',
    title: 'Design Course',
    duration: '8 hrs',
    color: {
      r: 91,
      g: 63,
      b: 255,
    },
  },
  {
    image: course02,
    label: 'Intermediário',
    title: 'UX Design for Devs',
    duration: '12 hrs',
    color: {
      r: 37,
      g: 206,
      b: 209,
    },
  },
  {
    image: course03,
    label: 'Avançado',
    title: 'Explore',
    duration: '6 hrs',
    color: {
      r: 156,
      g: 162,
      b: 186,
    },
  },
];

export default function Main() {
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingBottom: 20,
        }}>
        <Header>Seus Cursos</Header>
        <CourseList courses={courses} />
        <Header>Conquistas</Header>
        <ArchievementList />
        <Header>Usuários ativos</Header>
        <UserList />
      </ScrollView>
      <Tab>
        <Icon name="book" size={30} color="#5B3FFF" />
        <Icon name="chat" size={30} color="#9CA2BA" />
        <Icon name="turned-in" size={30} color="#9CA2BA" />
      </Tab>
      <BottomIndicator />
    </Container>
  );
}
