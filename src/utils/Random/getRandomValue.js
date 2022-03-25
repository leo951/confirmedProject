import getRandomInt from "./getRandomInt";

const getRandomValue = (listSend, listReceive, setListReceive, max) => {
  if (max < listSend.length) {
    for (let i = 1; i < max; i++) {
      var rand = getRandomInt(listSend.length);
      var rValue = listSend[rand];
      setListReceive([...listReceive, rValue]);

      listSend.splice(rand, 1);
    }
  }
};

export default getRandomValue;
