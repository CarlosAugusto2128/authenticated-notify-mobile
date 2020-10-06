import React from 'react';
import {Image} from 'react-native';

import {
  ContainerBackground,
  ContentSignUp,
  FormSignUp,
  InputSign,
  InputText,
  BackgroundGray,
  BtnSignUp,
  BtnText,
  BtnRegister,
} from './styles';

export default function SignUp({navigation}) {
  return (
    <ContainerBackground
      source={require('../../assets/Images/backgroundImage.jpg')}>
      <BackgroundGray />
      <Image source={require('../../assets/Images/logoImage.png')} />
      <ContentSignUp>
        <FormSignUp>
          <InputSign>
            <InputText placeholder="Name:" />
          </InputSign>
          <InputSign>
            <InputText placeholder="Email:" />
          </InputSign>
          <InputSign>
            <InputText placeholder="Senha:" type="password" />
          </InputSign>
          <BtnSignUp>
            <BtnText>Cadastrar-se</BtnText>
          </BtnSignUp>
          <BtnRegister onPress={() => navigation.goBack()}>
            <BtnText>Já possui cadastro? Logue-se!!</BtnText>
          </BtnRegister>
        </FormSignUp>
      </ContentSignUp>
    </ContainerBackground>
  );
}
