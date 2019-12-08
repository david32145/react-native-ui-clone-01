import React from 'react';

import {Container, Logo} from './styles';

import avatar1 from '../../assets/avatar-01.png';
import avatar2 from '../../assets/avatar-04.png';
import avatar3 from '../../assets/avatar-03.png';
import avatar4 from '../../assets/avatar-02.png';

export default function Users() {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo source={avatar1} />
      <Logo source={avatar2} />
      <Logo source={avatar3} />
      <Logo source={avatar4} />
    </Container>
  );
}
