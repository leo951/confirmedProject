import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Button, Dimensions} from 'react-native';
import {
  Image,
  TextShoe,
  TextColor,
  TextDetails,
  TextLoading,
  TextInput,
} from '../components/styles';
import {getSneaker} from '../utils/Request';
import styled from 'styled-components';

import addToFavorite from '../utils/Favorite/addFavorite';

const DetailsScreen = ({route}) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  const [sneaker, setSneaker] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    params: {id, auction},
  } = route;

  const navigation = useNavigation();

  console.log("Je suis l'id reçu dans details = ", id);

  useEffect(() => {
    setTimeout(() => {
      getShoe();
    }, 500);
  }, []);

  const isBuy = () => {
    navigation.navigate('Buy', {
      id: sneaker[0].id,
    });
  };

  const getShoe = () => {
    getSneaker(id)
      .then(response => {
        setSneaker(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Je suis error dans le getById = ', error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <TextLoading>Veuillez patienter</TextLoading>;
  }

  return (
    <Container>
      {sneaker[0] ? (
        <>
          <Image
            width={SCREEN_WIDTH}
            source={{
              uri: `https:${sneaker[0]?.media?.imageUrl.split(':')[1]}`,
            }}
          />
          <TextShoe>{sneaker[0]?.shoe}</TextShoe>
          <TextColor>{sneaker[0]?.colorway}</TextColor>
          {auction == true && (
            <TextAuction>
              Il vous reste moins de 20min pour participer au tirage au sort...
            </TextAuction>
          )}
          <TextDetails>
            Un prototype voit la lumière. Avec sa silhouette inédite issue de la
            collection adidas, cette chaussure affiche clairement son penchant
            pour la competition. la couleur {sneaker[0]?.colorway} ajoute une
            touche d'exigence.
          </TextDetails>

          <Add
            onPress={async () => {
              await addToFavorite(sneaker[0]);
            }}
            title={'AJOUTER AUX FAVORIES'}
          />
          <Add
            title={"Acheter"}
            onPress={async () => {
              await isBuy();
            }}></Add>
          <TextCarac>CARACTERISTIQUES</TextCarac>
        </>
      ) : (
        <>
          <TextLoading>Pas de Sneakers pour le moment</TextLoading>
          <Button onPress={getShoe()} title="recharger" />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

const ButtonBuy = styled.TouchableOpacity``;

const TextAuction = styled.Text`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  margin: 5px 0px;
  color: blue;
`;
const TextCarac = styled.Text`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  text-decoration: underline;
  margin-top: ${20}px;
`;

const Add = styled.Button`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  text-decoration-line: underline;
  margin-top: ${20}px;
`;

export default DetailsScreen;
