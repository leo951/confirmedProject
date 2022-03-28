import React, {useState} from 'react';
import styled from 'styled-components';

const ButtonForm = props => {
  return (
    <>
      <ViewInput onPress={props.validate}>VALIDER</ViewInput>
    </>
  );
};

const ViewInput = styled.Text`
  margin: 40px;
  border: solid black 1px;
  padding: 10px 30px;
  background-color: black;
  color: white;
`;

export default ButtonForm;
