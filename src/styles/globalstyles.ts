import {Dimensions, StyleSheet} from 'react-native';
export const {height, width} = Dimensions.get('screen');
const globalStyles = StyleSheet.create({
  ansolute: {
    position: 'absolute',
  },
  pt10: {
    paddingTop: 10,
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
    paddingHorizontal: 10,
  },
  py20: {
    paddingHorizontal: 20,
  },
  py30: {
    paddingHorizontal: 30,
  },
  py40: {
    paddingHorizontal: 40,
  },
  py50: {
    paddingHorizontal: 50,
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
  flex: {
    display: 'flex',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyCenter: {justifyContent: 'center'},
  alignCenter: {alignItems: 'center'},
});

export default globalStyles;
