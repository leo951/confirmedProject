import styled from 'styled-components';

const ViewContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  height: ${250}px;
  width: ${props => props.width}px;
`;
const TextShoe = styled.Text`
  width: ${250}px;
  font-size: ${40}px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
`;
const TextShoeColor = styled.Text`
  width: ${250}px;
  font-size: ${40}px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
  color: ${props => props.color};
`;

const TextColor = styled.Text`
  width: ${230}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  margin-top: ${10}px;
  margin-bottom: ${30}px;
`;
const TextDetails = styled.Text`
  width: ${330}px;
  font-size: ${15}px;
  font-weight: 400;
  text-align: left;
  justify-content: flex-start;
  margin-top: ${10}px;
  margin-bottom: ${20}px;
`;
const TextLoading = styled.Text`
text-align: center;
margin-top: 50%;
font-size: 30px;
`
export {ViewContainer, Image, TextShoe, TextColor, TextDetails, TextShoeColor, TextLoading};
