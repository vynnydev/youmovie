import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #595cdc;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Arial';
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
`;
