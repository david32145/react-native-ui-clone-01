import React from 'react';
import {Alert} from 'react-native';

import {
  Container,
  Logo,
  Title,
  SubTitle,
  ButtonSumit,
  ButtonSumitText,
  CancelText,
  BottomIndicator,
  Top,
  Bottom,
} from './styles';

import logo from '../../assets/initial-logo.png';

export default function Started({navigation}) {
  function handleSubmit() {
    navigation.navigate('Main');
  }

  function handleCancel() {
    Alert.alert('Cancelar', 'Você Cancelor Sua Assinatura !');
  }

  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Olá João, {'\n'}Esses são nossos novos cursos !!!</Title>
        <SubTitle>
          Descubra como nossa nova ferramenta {'\n'}pode ajudá você a alcançar
          seus objetivos.
        </SubTitle>
      </Top>
      <Bottom>
        <ButtonSumit onPress={handleSubmit}>
          <ButtonSumitText>Descubra o curso</ButtonSumitText>
        </ButtonSumit>
        <CancelText onPress={handleCancel}>Não Agora</CancelText>
        <BottomIndicator />
      </Bottom>
    </Container>
  );
}
