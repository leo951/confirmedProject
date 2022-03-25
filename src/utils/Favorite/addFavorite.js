import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import readFavorite from './readFavorite';

const addToFavorite = async item => {
  const formerFavorite = await readFavorite();
  const filteredFavorite = formerFavorite.filter(fav => fav.id !== item.id);
  const arrayOfFavorite = filteredFavorite || [];

  try {
    const jsonValue = JSON.stringify([...arrayOfFavorite, item]);
    // await AsyncStorage.removeItem('favorite');

    await AsyncStorage.setItem('favorite', jsonValue);
    // await AsyncStorage.removeItem('favorite')
    const getFavorite = await AsyncStorage.getItem('favorite');

    showMessage({
      message: `${item.name} à bien été ajouté aux favoris`,
      type: 'success',
    });
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger',
    });
  }
};

export default addToFavorite;
