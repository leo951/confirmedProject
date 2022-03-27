import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const useAuth = async props => {
  const navigation = useNavigation;
  let item = undefined;
  item = await AsyncStorage.getItem('user');
  if (!item) navigation.navigate('Login');
  else {
    return props.children;
  }
};

export default useAuth;
