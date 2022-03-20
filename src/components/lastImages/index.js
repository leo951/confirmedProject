import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const LastImages = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <FlatList
        data={props.images}
        renderItem={({item}) => (
          <View>
            <Image
              style={{
                height: 250,
                width: SCREEN_WIDTH,
              }}
              source={{uri: `https:${item?.media.imageUrl.split(':')[1]}`}}
            />
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default LastImages;
