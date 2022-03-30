import {useNavigation} from '@react-navigation/native';

const buy = async idProduct => {
  const navigation = useNavigation();

  return navigation.navigate('Buy', {
    id: idProduct,
  });
};

export default buy;
