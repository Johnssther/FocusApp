import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils/common";

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: 'column',
    gap: 8,
  },
})

export default styles;
 