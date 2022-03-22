import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View, ScrollView} from 'react-native';

import Auction from '../components/auction';
import TwoProducts from '../components/twoProducts';
import FrameVideo from '../components/frameVideo';
import FrameImage from '../components/frameImage';
import LastImages from '../components/lastImages';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Home = ({navigation}) => {
  let randomInt = getRandomInt(4);
  const [product, setProduct] = useState([]);
  const [auction, setAuction] = useState([]);
  const [twoProducts, setTwoProducts] = useState([]);
  const videos = [
    'https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/ss22-ozworld-educate-hp-teaser-carousel-dual-animated-2-d_lsjete.mp4',
  ];
  const images = [
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/frFR/Images/Dotcom_BBall_MA_812x480px_tcm196-509729.jpg',
    'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/frFR/Images/ss22-velosamba-sustain-hp-tc-d_tcm196-801372.jpg',
  ];

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
      params: {limit: '20', brand: 'Adidas'},
      headers: {
        'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
        'x-rapidapi-key': '0b4a3b6537mshd039b5f654ce9b1p195a55jsn249c4d2939a2',
      },
    })
      .then(response => {
        setProduct(response.data.results);
      })
      .catch(function (error) {
        console.error('Je suis error = ', error);
      });
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const getRandomValue = (listSend, listReceive, setListReceive, max) => {
    if (max < listSend.length) {
      for (let i = 1; i < max; i++) {
        //Ajouter un element aleatoire de la liste d'envoie dans la liste de destination
        //autant de fois que voulu via le paramettre max
        var rand = getRandomInt(listSend.length);
        var rValue = listSend[rand];
        setListReceive([...listReceive, rValue]);

        //Supprime l'element ajouter dans la liste de destination dans la liste d'envoie
        listSend.splice(rand, 1);
      }
    }
  };

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView>
        <View>
          {/* Affichage des tirage au sort  */}
          <Text>
            {auction[0] != undefined && (
              <Auction auction={auction[0]} price={'200, 00 €'} />
            )}
          </Text>
          <Text>
            {
              (auction[1] != undefined && (
                <Auction auction={auction[1]} price={'230, 00 €'} />
              ))
            }
          </Text>
          <Text>
            {
              (auction[2] != undefined && (
                <Auction auction={auction[2]} price={'250, 00 €'} />
              ))
            }
          </Text>
        </View>

        <TwoProducts product1={product[0]} product2={product[1]} />

        <FrameVideo videos={videos} />

        <TwoProducts product1={product[2]} product2={product[3]} />

        <FrameImage image={images[0]} />

        <TwoProducts product1={product[4]} product2={product[5]} />

        <FrameImage image={images[1]} />

        <View>
          <LastImages images={product} />
        </View>
      </ScrollView>
    </View>
  );
};

const TextStyled = styled.Text``;
const Button = styled.TouchableOpacity``;

Home.propTypes = {};

export default Home;
