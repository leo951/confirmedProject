import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions, FlatList} from 'react-native';
import { Image } from '../styles';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const FrameImage = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <Image
        width={SCREEN_WIDTH}
        source={{
          uri: `https:${JSON.parse(JSON.stringify(props.image.split(':')[1]))}`,
        }}
      />
    </View>
  );
};

export default FrameImage;
