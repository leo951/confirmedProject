import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View, TextInput, Button} from 'react-native';

import InputForm from '../inputForm/index';
import ButtonDisconnecting from '../buttonDisconnecting/index';

/**
 *
 * @todo: Je viens d'ajouter le contenu du localStorage à mon user
 * Il faut maintenant que je l'envoie à mes input
 * et que je gere l'affichage et l'update
 */

const ProfilForm = props => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState([]);

  const navigation = useNavigation();

  //Impossible d'utiliser cela car tourne en boucle ce qui ne laisse pas le temps a getUser de faire sa tache
  // useFocusEffect(async () => {
  //   getUser();
  // });

  useEffect(() => {
    getUser();
  }, [username]);

  const disconnecting = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Home');
  };

  const getUser = async () => {
    const item = await AsyncStorage.getItem('user');

    const itemParsed = JSON.parse(item);
    setUser(itemParsed);
    setUsername(user.username);
    return item;
  };

  return (
    <ViewContainer>
      <View>
        <Text>Bonjour {username}</Text>
      </View>
      <View>
        <ButtonDisconnecting validate={disconnecting} />
      </View>
      <View>
        <ButtonViewFav
          onPress={() => navigation.navigate('Favorite')}
          title={'VOIR FAVORIS'}
        />
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

const ButtonViewFav = styled.Button`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: flex-end;
`;

export default ProfilForm;
