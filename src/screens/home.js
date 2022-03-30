import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {ViewContainer, TextLoading} from '../components/styles/index';

import getRandomInt from '../utils/Random/getRandomInt';
import getRandomValue from '../utils/Random/getRandomValue';

import {getSneakers} from '../utils/Request';

import images from '../libs/img';
import videos from '../libs/video';

import Auction from '../components/auction';
import TwoProducts from '../components/twoProducts';
import FrameVideo from '../components/frameVideo';
import FrameImage from '../components/frameImage';
import LastImages from '../components/lastImages';

const Home = ({navigation}) => {
  let randomInt = getRandomInt(4);
  const [product, setProduct] = useState([]);
  const [auction, setAuction] = useState([]);
  const [twoProducts, setTwoProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getShoes();
    }, 1000);
  }, []);

  const getShoes = () => {
    getSneakers()
      .then(response => {
        setProduct(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <TextLoading>Veuillez patienter</TextLoading>;
  }

  const addValueInTwoProducts = t => {
    getRandomValue(product, twoProducts, setTwoProducts, t);
  };

  const addAuction = t => {
    getRandomValue(product, auction, setAuction, t);
  };

  if (product.length > 0 && twoProducts.length < 6) {
    //A lancer 3 fois
    addValueInTwoProducts(2);
  }
  if (product.length > 0 && auction.length < randomInt) {
    //A lancer entre 1 & 3 fois
    addAuction(randomInt);
  }

  return (
    <ViewContainer>
      {product[0] ? (
        <ScrollView>
          <View>
            <Text>
              {auction[0] != undefined && (
                <Auction navigation={navigation} auction={auction[0]} />
              )}
            </Text>
            <Text>
              {auction[1] != undefined && (
                <Auction navigation={navigation} auction={auction[1]} />
              )}
            </Text>
            <Text>
              {auction[2] != undefined && (
                <Auction navigation={navigation} auction={auction[2]} />
              )}
            </Text>
          </View>
          <View>
            <TwoProducts
              navigation={navigation}
              product1={product[0]}
              product2={product[1]}
            />
          </View>

          <FrameVideo videos={videos} />

          <TwoProducts
            navigation={navigation}
            product1={product[2]}
            product2={product[3]}
          />

          <FrameImage image={images[0]} />

          <TwoProducts
            navigation={navigation}
            product1={product[4]}
            product2={product[5]}
          />

          <FrameImage image={images[1]} />

          <View>
            <LastImages navigation={navigation} images={product} />
          </View>
        </ScrollView>
      ) : (
        <>
          <TextLoading>Pas de Sneakers pour le moment</TextLoading>
          <Button onPress={getShoes()} title="recharger"/>
        </>
      )}
    </ViewContainer>
  );
};

export default Home;
