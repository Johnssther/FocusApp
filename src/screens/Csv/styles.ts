import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils/common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  text: {
    fontSize: 22,
    textAlign: 'justify',
    width: '100%',
    marginTop: 7,
  },
  items: {
    width: '100%',
    height: '50%',
    padding: 10,
    backgroundColor: '#f1f0f0',
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    width: '100%',
    marginTop: 7,
    marginBottom: 14,
  }
})

export default styles;
