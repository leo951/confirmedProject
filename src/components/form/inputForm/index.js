import React from 'react';
import styled from 'styled-components';
import {Text, View, TextInput, Button} from 'react-native';

const InputForm = props => {
  return (
    <>
      <Input
        secureTextEntry={props.typePassword}
        placeholder={props.placeholder}
        autoComplete="off"
        onChangeText={isText => {
          props.setText(isText);
        }}
      />
    </>
  );
};

const Input = styled.TextInput`
  height: 45px;
  width: 250px;
  margin: 20px;
  padding: 10px;
  border: solid black 1px;
`;

export default InputForm;
