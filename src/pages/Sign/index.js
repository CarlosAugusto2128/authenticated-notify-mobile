import React, {useState} from 'react';
import {Image, Text} from 'react-native';

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

export default function Sign() {
  const [isVisibleSignIn, setIsVisibleSignIn] = useState(false);

  function handleVisibleSignIn() {
    setIsVisibleSignIn(!isVisibleSignIn);
  }

  return (
    <ContainerBackground
      source={require('../../assets/Images/backgroundImage.jpg')}>
      <BackgroundGray />
      <Image source={require('../../assets/Images/logoImage.png')} />
      <ContentSignIn isVisibleSignIn={isVisibleSignIn}>
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
          <BtnRegister onPress={handleVisibleSignIn}>
            <BtnText>Não possui cadastro? Cadastra-se!!</BtnText>
          </BtnRegister>
        </FormSignIn>
      </ContentSignIn>
    </ContainerBackground>
  );
}
