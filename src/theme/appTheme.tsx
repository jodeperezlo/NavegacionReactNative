import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
    textAlign: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#212E36',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuButton: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 22,
    color: '#fff',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerFavoriteIcon: {
    marginTop: 50,
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#20232A',
    flex: 1,
  },
});

export const colors = {
  primary: '#212E36',
  secondary: '#192229',
  third: '#566169',
  light: '#95BBDF',
  white: '#fff',
  backgroundColor: '#20232A',
};
