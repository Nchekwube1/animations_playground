import {Text, StyleProp, TextStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import globalStyles from '../styles/globalstyles';
interface textProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  children: ReactNode;
}
const TextComponent: FC<textProps> = ({style, numberOfLines, children}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        globalStyles.textSizeNormal,
        globalStyles.textBlack,
        globalStyles.fontMontserratAltRegular,
        style,
      ]}>
      {children}
    </Text>
  );
};

export default TextComponent;
