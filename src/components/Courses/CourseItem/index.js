import React from 'react';
import {
  Container,
  ImageLogo,
  Title,
  Info,
  Label,
  LabelText,
  DurantionText,
} from './styles';

export default function Courses({image, title, label, duration, color}) {
  return (
    <Container>
      <ImageLogo source={image} style={{resizeMode: 'cover'}} />
      <Title>{title}</Title>
      <Info>
        <Label color={color}>
          <LabelText color={color}>{label}</LabelText>
        </Label>
        <DurantionText>{duration}</DurantionText>
      </Info>
    </Container>
  );
}
