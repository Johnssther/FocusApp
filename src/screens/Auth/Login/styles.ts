import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../../utils/common";

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    height: SCREEN_HEIGHT
  },
  image: {
    width: 128, // Ancho deseado de la imagen
    height: 128, // Altura deseada de la imagen
    borderRadius: 100, // Para redondear la imagen (la mitad del ancho o altura)
    objectFit: 'cover',
  },
  containerLogo: {
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#ffffff',
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#36b436',
    padding: 10,
    borderRadius: 35,
    width: '100%',
    height: 50,
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginButtonGoogle: {
    padding: 10,
    borderRadius: 35,
    width: '100%',
    height: 50,
    marginTop: 12,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
    borderWidth: 1,
    borderColor: '#bcabab',
  },
  loginButtonGoogleText: {
    color: '#3b82f6',
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  forgotPasswordContainer: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#8d7f7f',
  },

  forgotRegisterContainer: {
    marginTop: 16,
  },
  forgotRegisterText: {
    color: '#3b3be5',
    fontSize: 18,
    fontWeight: 'bold'
  },
})

export default styles;
