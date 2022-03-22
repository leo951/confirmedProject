import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const ButtonDisconnecting = props => {
  
  return (
    <>
      <Button onPress={props.validate} title="Deconnection" color="#841584" />
    </>
  );
};

export default ButtonDisconnecting;
