import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const FrameImage = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      <Image
        style={{height: 250, width: SCREEN_WIDTH}}
        source={{
          uri: `https:${JSON.parse(JSON.stringify(props.image.split(':')[1]))}`,
        }}
      />
    </View>
  );
};

export default FrameImage;
