import React from 'react';
import {Image} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  ContainerBackground,
  ContentSignUp,
  FormSignUp,
  BackgroundGray,
} from './styles';

export default function SignUp({navigation}) {
  return (
    <ContainerBackground
      source={require('../../assets/Images/backgroundImage.jpg')}>
      <BackgroundGray />
      <Image source={require('../../assets/Images/logoImage.png')} />
      <ContentSignUp>
        <FormSignUp>
          <Input placeholder="Name:" />
          <Input placeholder="Email:" />
          <Input placeholder="Senha:" type="password" />

          <Button>Cadastrar-se</Button>

          <Button onPress={() => navigation.goBack()}>
            Já possui cadastro? Logue-se!!
          </Button>
        </FormSignUp>
      </ContentSignUp>
    </ContainerBackground>
  );
}
