import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../../utils/common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  text: {
    fontSize: 22,
    textAlign: 'justify',
    width: '100%',
    marginTop: 7,
  }
})

export default styles;
