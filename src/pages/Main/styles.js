import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.Text`
  margin-top: 40px;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.1px;
  font-weight: bold;
  color: #000;
`;

export const Tab = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  flex-direction: row;
`;
export const BottomIndicator = styled.View`
  width: 134px;
  height: 5px;
  background-color: #979797;
  border-radius: 5px;
  margin: 10px auto 9px;
`;
