import React from 'react';
import styled from 'styled-components';
import {Text, View, TextInput, Button} from 'react-native';

const InputForm = props => {
  console.log("Je suis props dans InputForm = ",props);
  return (
    <>
      <Input
        secureTextEntry={props.typePassword}
        placeholder={props.placeholder}
        onChangeText={isText => {
          console.log("Je suis isText");
          props.setText(isText);
        }}
      />
    </>
  );
};

const Input = styled.TextInput`
  height: 45px;
  width: 250px;
  border: solid red 1px;
`;

export default InputForm;
