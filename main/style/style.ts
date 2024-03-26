import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    height: '100%',
    width: '100%',
    padding: 20,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    flexGrow: 1,
    height: 42,
    borderRadius: 25,
    paddingStart: 20,
    paddingEnd: 20,
    marginEnd: 20,
    marginRight: 20,
    textAlign: 'left',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  btn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  subitem: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: '#92c3d5',
    borderWidth: 1,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#92c3d5',
    borderRadius: 5,
  },
  mr_16: {
    marginEnd: 16,
  },
  mt_24: {
    marginTop: 24,
  },
});
