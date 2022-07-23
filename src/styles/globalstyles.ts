import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import colors from './colors';
export const {height, width} = Dimensions.get('screen');
const globalStyles = ScaledSheet.create({
  ansolute: {
    position: 'absolute',
  },
  bgDark: {
    backgroundColor: colors.bg,
  },
  pt10: {
    paddingTop: 10,
  },
  pt20: {
    paddingTop: 20,
  },
  pt30: {
    paddingTop: 30,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mt50: {
    marginTop: 50,
  },
  mb50: {
    marginBottom: 50,
  },
  mb40: {
    marginBottom: 40,
  },
  mb30: {
    marginBottom: 30,
  },
  mb20: {
    marginBottom: 20,
  },
  mb10: {
    marginBottom: 10,
  },
  px10: {
    paddingHorizontal: 10,
  },
  px20: {
    paddingHorizontal: 20,
  },
  px30: {
    paddingHorizontal: 30,
  },
  px40: {
    paddingHorizontal: 40,
  },
  px50: {
    paddingHorizontal: 50,
  },
  py10: {
    paddingVertical: 10,
  },
  py20: {
    paddingVertical: 20,
  },
  py30: {
    paddingVertical: 30,
  },
  py40: {
    paddingVertical: 40,
  },
  py50: {
    paddingVertical: 50,
  },
  h1: {
    height: '10%',
  },
  h2: {
    height: '20%',
  },
  h3: {
    height: '30%',
  },
  h4: {
    height: '40%',
  },
  h5: {
    height: '50%',
  },
  h6: {
    height: '60%',
  },
  h7: {
    height: '70%',
  },
  h8: {
    height: '80%',
  },
  h9: {
    height: '90%',
  },
  h10: {
    height: '100%',
  },
  w10: {
    width: '100%',
  },
  w9: {
    width: '90%',
  },
  w8: {
    width: '80%',
  },
  w7: {
    width: '70%',
  },
  w6: {
    width: '60%',
  },
  w5: {
    width: '50%',
  },
  w4: {
    width: '40%',
  },
  w3: {
    width: '30%',
  },
  w2: {
    width: '20%',
  },
  w1: {
    width: '10%',
  },
  flex: {
    display: 'flex',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  textBlack: {color: colors.black},
  textWhite: {color: colors.white},
  fontMontserratAltRegular: {
    fontFamily: 'MontserratAlternates-Regular',
  },
  textSizeXs: {
    fontSize: '11@s',
  },
  textSizeSmall: {
    fontSize: '13@s',
  },
  textSizeNormal: {
    fontSize: '14@s',
  },
  textSizeMedium: {
    fontSize: '16@s',
  },
  textSizeBig: {
    fontSize: '18@s',
  },
  textSize1xl: {
    fontSize: '20@s',
  },
  textSize2xl: {
    fontSize: '24@s',
  },
  textSize3xl: {
    fontSize: '30@s',
  },
  textSize4xl: {
    fontSize: '36@s',
  },
  justifyCenter: {justifyContent: 'center'},
  justifyBetweem: {justifyContent: 'space-between'},
  alignCenter: {alignItems: 'center'},
  borderradius: {borderRadius: 10},
  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
  borderGreen: {
    borderColor: colors.lemon,
  },
  colorGreen: {
    color: colors.lemon,
  },
  marRight: {
    marginRight: 6,
  },
});

export default globalStyles;
