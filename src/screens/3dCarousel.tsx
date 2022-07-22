import {View, Text} from 'react-native';
import React from 'react';
import {width} from '../styles/globalstyles';
import {faker} from '@faker-js/faker';
const ThreedCarousel = () => {
  const IMAGE_WIDTH = width * 0.65;
  const IMAGE_HEIGTH = IMAGE_WIDTH * 0.7;
  const images = [
    'https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/8908938/pexels-photo-8908938.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/12790459/pexels-photo-12790459.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/12739401/pexels-photo-12739401.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/11942783/pexels-photo-11942783.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/12793815/pexels-photo-12793815.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/12681236/pexels-photo-12681236.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/12066797/pexels-photo-12066797.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/8908938/pexels-photo-8908938.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    'https://images.pexels.com/photos/12790459/pexels-photo-12790459.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  ];
  faker.seed(10);
  const DATA = [...Array(images.length).keys()].map((_, i) => {
    return {
      key: faker.random.alphaNumeric(),
      images: images[i],
      title: faker.commerce.productName(),
      subtitle: faker.company.bs(),
      price: faker.finance.amount(80, 200, 0),
    };
  });
  const SPACING = 20;
  return (
    <View>
      <Text>ThreedCarousel</Text>
    </View>
  );
};

export default ThreedCarousel;
