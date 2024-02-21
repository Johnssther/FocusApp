import { Dimensions, Platform } from "react-native"

const isIOS = () => {
 return Platform.OS === 'ios'
}

const isAndroid = () => {
  return Platform.OS === 'android'
}

const formatNumber = (x: number) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const generateUniqueId = () => {
  const randomNumber = Math.floor(Math.random() * 1000000); // Genera un número aleatorio entre 0 y 999999
  const timestamp = new Date().getTime(); // Obtiene el timestamp actual en milisegundos
  const uniqueId = randomNumber.toString() + timestamp.toString(); // Combina el número aleatorio con el timestamp
  return parseInt(uniqueId); // Convierte la cadena a un número entero
};

const getDate = () => {
  const now = new Date();

  const year = now.getFullYear(); // Año (ej: 2024)
  const month = now.getMonth() + 1; // Mes (0-11, agregar 1 para obtener el mes actual)
  const day = now.getDate(); // Día del mes (1-31)
  const hour = now.getHours(); // Hora (0-23)
  const minute = now.getMinutes(); // Minuto (0-59)
  const second = now.getSeconds(); // Segundo (0-59)

  return `${year}-${month}-${day}__${hour}h${minute}m${second}s`;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export { isIOS, isAndroid, SCREEN_WIDTH, SCREEN_HEIGHT, formatNumber, generateUniqueId, getDate }
