import React from 'react';
import {Image} from 'react-native';

import {
  ContainerBackground,
  ContentSignIn,
  FormSignIn,
  InputSign,
  InputText,
  BackgroundGray,
  BtnSignIn,
  BtnText,
  BtnRegister,
} from './styles';

export default function SignIn({navigation}) {
  return (
    <ContainerBackground
      source={require('../../assets/Images/backgroundImage.jpg')}>
      <BackgroundGray />
      <Image source={require('../../assets/Images/logoImage.png')} />
      <ContentSignIn>
        <FormSignIn>
          <InputSign>
            <InputText placeholder="Email:" />
          </InputSign>
          <InputSign>
            <InputText placeholder="Senha:" type="password" />
          </InputSign>
          <BtnSignIn>
            <BtnText>Acessar</BtnText>
          </BtnSignIn>
          <BtnRegister onPress={() => navigation.navigate('SignUp')}>
            <BtnText>Não possui cadastro? Cadastra-se!!</BtnText>
          </BtnRegister>
        </FormSignIn>
      </ContentSignIn>
    </ContainerBackground>
  );
}
