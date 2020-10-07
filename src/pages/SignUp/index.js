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
          <Input icon={'user'} placeholder="Name:" />
          <Input icon={'mail'} placeholder="Email:" />
          <Input icon={'lock'} placeholder="Senha:" type="password" />

          <Button>Cadastrar-se</Button>

          <Button onPress={() => navigation.goBack()}>
            Já possui cadastro? Logue-se!!
          </Button>
        </FormSignUp>
      </ContentSignUp>
    </ContainerBackground>
  );
}
