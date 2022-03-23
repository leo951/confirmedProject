import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View, TextInput, Button} from 'react-native';

import InputForm from '../inputForm/index';
import ButtonForm from '../buttonForm/index';

const LoginForm = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const navigation = useNavigation();

  const validate = () => {
    username.length > 3 ? setErrorUsername(false) : setErrorUsername(true);
    password.length > 7 ? setErrorPassword(false) : setErrorPassword(true);

    errorUsername == false && errorPassword == false
      ? getToken()
      : alert('Erreur avec vos identifiants');
  };

  const getToken = () => {
    axios
      .post(`https://easy-login-api.herokuapp.com/users/login`, {
        username,
        password,
      })
      .then(async function (response) {
        await AsyncStorage.setItem(
          'token',
          `${response.headers['x-access-token']}`,
        );
        const user = {username: username, password: password};
        await AsyncStorage.setItem('user', JSON.stringify(user));
        navigation.navigate('Home');
      })
      .catch(function (error) {
        console.log('Je suis erreur lors de la requete = ', error);
      });
  };

  return (
    <ViewContainer>
      <View>
        <InputForm
          placeholder={'Email'}
          typePassword={false}
          setText={setUsername}
          // text={username}
        />
        {errorUsername == true && (
          <UsernameErrorTrue>
            Format de nom d'utilisateur incorrect
          </UsernameErrorTrue>
        )}
        <InputForm
          placeholder={'Mot de passe'}
          typePassword={true}
          setText={setPassword}
          // text={password}
        />
        {errorPassword == true && (
          <PasswordErrorTrue>
            Format de mot de passe incorrect
          </PasswordErrorTrue>
        )}
      </View>
      <View>
        <ButtonForm email={username} password={password} validate={validate} />
      </View>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const UsernameErrorTrue = styled.Text`
  color: red;
`;
const PasswordErrorTrue = styled.Text`
  color: red;
`;

export default LoginForm;
