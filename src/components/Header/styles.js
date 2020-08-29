import styled from 'styled-components/native';

// To work with the soundbox of iphoneX
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';
// in the place of padding -> padding-top: ${getStatusBarHeight}px;

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;
