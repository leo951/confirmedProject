import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {ViewContainer} from '../components/styles/index';

import getRandomInt from '../utils/Random/getRandomInt';
import getRandomValue from '../utils/Random/getRandomValue';

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

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
      params: {limit: '20', brand: 'Adidas'},
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
        // 'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
        // 'X-RapidAPI-Key': '4fa17e2b51msha2b169814db974ep1b2769jsnc61411cb32f6',
      },
    })
      .then(response => {
        setProduct(response.data.results);
      })
      .catch(function (error) {
        console.error('Je suis error = ', error);
      });
  }, []);

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
    </ViewContainer>
  );
};

export default Home;
