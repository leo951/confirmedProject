import {useNavigation} from '@react-navigation/native';

const buy = async idProduct => {
  const navigation = useNavigation();

  console.log("Je suis navigation = ",navigation);

  console.log("Je suis idProduct = ",idProduct);

  return navigation.navigate('Buy', {
    id: idProduct,
  });
};

export default buy;
