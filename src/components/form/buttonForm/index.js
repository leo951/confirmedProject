import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const ButtonForm = props => {
  return (
    <>
      <Button onPress={props.validate} title="Valider" color="#841584" />
    </>
  );
};

export default ButtonForm;
