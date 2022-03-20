import React, {useEffect, useState} from 'react';
import {Text, View, Image, Dimensions, FlatList} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const FrameVideo = props => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return (
    <View>
      {/* https://openbase.com/js/react-native-video-player/documentation#future-features */}
      <VideoPlayer
        style={{width: SCREEN_WIDTH, height: 250}}
        loop={true}
        // showDuration={false}
        resizeMode="cover"
        // onHideControls={false}
        disableFullscreen
        hideControlsOnStart={true}
        autoplay
        video={{uri: `https:${props.videos[0].split(':')[1]}`}}
      />
    </View>
  );
};

export default FrameVideo;
