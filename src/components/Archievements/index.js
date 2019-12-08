import React from 'react';

import {Container, Logo} from './styles';

import logo1 from '../../assets/logo-01.png';
import logo2 from '../../assets/logo-04.png';
import logo3 from '../../assets/logo-03.png';
import logo4 from '../../assets/logo-02.png';

export default function Archievements() {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo source={logo1} />
      <Logo source={logo2} />
      <Logo source={logo3} />
      <Logo size={50} source={logo4} />
    </Container>
  );
}
