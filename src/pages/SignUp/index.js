import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function SignUp({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>SignUp</Text>
    </TouchableOpacity>
  );
}
