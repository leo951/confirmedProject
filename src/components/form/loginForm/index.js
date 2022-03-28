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
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const navigation = useNavigation();

  const validate = async () => {
    username.length > 3
      ? await setErrorUsername(false)
      : await setErrorUsername(true);
    password.length > 7
      ? await setErrorPassword(false)
      : await setErrorPassword(true);
    console.log(
      `Je suis username.length == ${username.length} &&& Je suis password.length == ${password.length}`,
    );
    console.log(
      `Je suis errorUsername == ${errorUsername} &&& Je suis errorPassword == ${errorPassword}`,
    );
    //Le problème viens du fait que ici les username && password ne s'actualise pas immediatement
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
      <TextTitle>Connexion</TextTitle>

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

const TextTitle = styled.Text`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;
const UsernameErrorTrue = styled.Text`
  color: red;
`;
const PasswordErrorTrue = styled.Text`
  color: red;
`;

export default LoginForm;
