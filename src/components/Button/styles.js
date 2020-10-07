import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 15px 10px;
  background: #7159c1;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
