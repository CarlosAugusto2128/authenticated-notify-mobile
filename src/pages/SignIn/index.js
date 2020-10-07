import React from 'react';
import {Image} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  ContainerBackground,
  ContentSignIn,
  FormSignIn,
  BackgroundGray,
} from './styles';

export default function SignIn({navigation}) {
  return (
    <ContainerBackground
      source={require('../../assets/Images/backgroundImage.jpg')}>
      <BackgroundGray />
      <Image source={require('../../assets/Images/logoImage.png')} />
      <ContentSignIn>
        <FormSignIn>
          <Input icon={'mail'} placeholder="Email:" />
          <Input icon={'lock'} placeholder="Senha:" type="password" />

          <Button onPress={() => {}}>Acessar</Button>
          <Button onPress={() => navigation.navigate('SignUp')}>
            Não possui cadastro? Cadastra-se!!
          </Button>
        </FormSignIn>
      </ContentSignIn>
    </ContainerBackground>
  );
}
