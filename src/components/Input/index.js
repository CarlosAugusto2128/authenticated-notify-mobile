import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, TextInput} from './styles';

export default function Input({icon, ...rest}) {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput {...rest} />
    </Container>
  );
}
