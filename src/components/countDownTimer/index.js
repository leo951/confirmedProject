import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const CountDownTimer = ({counter}) => {
  const {minutes = 0, seconds = 60} = counter;
  const [[mins, secs], setTime] = React.useState([minutes, seconds]);

  const tick = () => {
    if (mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <View>
      <TextCounter>
        {`${mins.toString().padStart(2, '0')} : ${secs
          .toString()
          .padStart(2, '0')}`}
      </TextCounter>
    </View>
  );
};

const TextCounter = styled.Text`
  color: white;
  font-weight: bold;
`;

export default CountDownTimer;
