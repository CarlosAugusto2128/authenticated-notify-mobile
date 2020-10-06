import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ContainerBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* padding: 0 30px; */
  position: relative;
`;

export const BackgroundGray = styled.View`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
`;

export const ContentSignUp = styled.View`
  width: 90%;
  padding: 20px;
  border-radius: 4px;
`;
export const FormSignUp = styled.View``;

export const InputSign = styled.View`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  border-radius: 10px;
  background: #f5f5f5;
  margin-bottom: 15px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: #333;
  font-size: 16px;
`;

export const BtnSignUp = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #7159c1;
`;

export const BtnText = styled.Text`
  color: #fff;
`;

export const BtnRegister = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
