import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.Image`
  width: 257px;
  height: 271px;
  margin-top: 10px;
`;
export const Title = styled.Text`
  margin-top: 40px;
  color: #333;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.2px;
  text-align: center;
  line-height: 28px;
`;
export const SubTitle = styled.Text`
  margin-top: 24px;
  color: #4f4f4f;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
export const ButtonSumit = styled(RectButton)`
  margin-bottom: 20px;
  width: 284px;
  height: 48px;
  background-color: #5b3fff;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  elevation: 2px;
`;
export const ButtonSumitText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  line-height: 17px;
`;
export const CancelText = styled.Text`
  color: #bdbdbd;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.08px;
`;
export const BottomIndicator = styled.View`
  margin-bottom: 9px;
  margin-top: 40px;
  width: 134px;
  height: 5px;
  background-color: #979797;
  border-radius: 5px;
`;

export const Top = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Bottom = styled.View`
  align-items: center;
  justify-content: center;
`;
