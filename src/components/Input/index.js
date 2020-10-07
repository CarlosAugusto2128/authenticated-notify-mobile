import React from 'react';

import {Container, TextInput} from './styles';

export default function Input({...rest}) {
  return (
    <Container>
      <TextInput {...rest} />
    </Container>
  );
}
