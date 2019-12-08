import styled from 'styled-components/native';

export const Container = styled.View`
  width: 142px;
  height: 252px;
  margin-right: 16px;
`;

export const ImageLogo = styled.Image`
  width: 142px;
  height: 192px;
  border-radius: 10px;
`;
export const Title = styled.Text`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #333333;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const Info = styled.View`
  height: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
`;
export const Label = styled.View`
  height: 20px;
  background-color: ${({color}) =>
    `rgba(${color.r}, ${color.g}, ${color.b}, 0.1)`};
`;
export const LabelText = styled.Text`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-weight: bold;
  text-align: center;
  color: ${({color}) => `rgb(${color.r}, ${color.g}, ${color.b})`};
  padding: 0 5px 0 5px;
`;
export const DurantionText = styled.Text`
  font-size: 12px;
  line-height: 13px;
  color: #bdbdbd;
  margin-left: 8px;
`;
