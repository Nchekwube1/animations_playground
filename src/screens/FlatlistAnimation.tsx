import {View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import globalStyles from '../styles/globalstyles';
import ListItem from './components/ListItem';
import {ViewToken} from 'react-native';

const FlatlistAnimation = () => {
  const viewableValue = useSharedValue<ViewToken[]>([]);
  const values = new Array(50).fill('&').map((_, id) => ({
    name: 'Sophia Akodu',
    message: 'Reply me ASAP',
    date: '1:57 PM',
    img: 'https://picsum.photos/200',
    id,
  }));
  return (
    <View style={[globalStyles.flexOne]}>
      {/* <SafeAreaView style={[globalStyles.flexOne, globalStyles.bgGray]}> */}
      <FlatList
        onViewableItemsChanged={({viewableItems}) => {
          viewableValue.value = viewableItems;
          console.log({'------viewableItems----------': viewableItems});
        }}
        data={values}
        // keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={[globalStyles.pt20, globalStyles.px20]}
        showsVerticalScrollIndicator={false}
        renderItem={({index, item}) => (
          <ListItem
            item={item}
            viewAbleItems={viewableValue}
            key={index.toString()}
          />
        )}
      />
      {/* </SafeAreaView> */}
    </View>
  );
};

export default FlatlistAnimation;
