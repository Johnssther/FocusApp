import { StyleSheet } from 'react-native';

const primaryColor = '#728242';
const primaryTextColor = 'white';

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    height: 50,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
  },
  buttonText: {
    color: primaryTextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
