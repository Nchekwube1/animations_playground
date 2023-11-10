import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalstyles';

const SpinningWheel = () => {
  const {width} = useWindowDimensions();
  const cardImg =
    'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';
  const colors = ['red', 'orange', 'blue'];
  const cardNumber = 4;

  type Card = {
    key: string;
    imgUrl: string;
    bg?: string;
  };
  const _size = 120;

  const _cardSize = {
    width: _size,
    height: _size * 1.67,
    borderRadius: 12,
  };
  const cardList: Card[] = new Array(cardNumber).fill('&').map((_, index) => ({
    imgUrl: cardImg,
    key: index.toString(),
    bg: index < colors.length ? colors[index] : colors[index % colors.length],
  }));

  const cardVisibility = 0.5;
  const cardSize = cardVisibility * _cardSize.width;
  const R = Math.max((cardSize * cardNumber) / (2 * Math.PI), width / 2);
  // circle circumference ie circle length = 2piR
  // since circle circmference is length of circle,
  // its cardSize * number of cards for its length
  const twoPi = 2 * Math.PI;
  const theta = twoPi / cardNumber; // angle of rotation for each card
  //  2 * Math.PI * R = cardSize * cardNumber ;
  //  ie R = cardSize * cardNumber  / 2  * Math.PI

  const SingleCard = ({card, index}: {card: Card; index: number}) => {
    return (
      <View
        style={{
          height: R * 2,
          //   height: R,
          width: _cardSize.width,
          //   backgroundColor: 'green',
          position: 'absolute',
          paddingRight: 20,
          //   backgroundColor: card.bg,
          transform: [
            {
              rotate: `${theta * index}rad`,
            },
          ],
        }}>
        <TouchableOpacity style={[globalStyles.w10, globalStyles.h10]}>
          <Image
            resizeMode="cover"
            source={{uri: card.imgUrl}}
            style={{
              width: _cardSize.width,
              height: _cardSize.height,
              borderRadius: _cardSize.borderRadius,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const Wheel = ({cards}: {cards: Card[]}) => {
    return (
      <View
        style={[
          globalStyles.justifyCenter,
          globalStyles.alignCenter,
          {
            width: R * 2,
            height: R * 2,
            borderRadius: R,
            backgroundColor: 'white',
          },
        ]}>
        {cards.map((card, index) => (
          <SingleCard key={index.toString()} card={card} index={index} />
        ))}
      </View>
    );
  };
  return (
    <View
      style={[
        globalStyles.flexOne,
        globalStyles.bgBlack,
        globalStyles.justifyCenter,
        globalStyles.alignCenter,
      ]}>
      <Wheel cards={cardList} />
    </View>
  );
};

export default SpinningWheel;
