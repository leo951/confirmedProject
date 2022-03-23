import AsyncStorage from '@react-native-async-storage/async-storage'

const readFavorite = async () => {
  try {
    const item = await AsyncStorage.getItem('favorite')

    return item !== null ? JSON.parse(item) : []
  } catch (e) {
    console.log('Je suis err = ', e)
  }
}

export default readFavorite
