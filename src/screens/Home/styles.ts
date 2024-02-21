import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils/common";

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#e0e0e0',
    padding: 15,
    flexDirection: 'row',
    gap: 8
  },
  item: {
    width: 90,
    height: 90,
    backgroundColor: '#247291',
    borderRadius: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item_text: {
    color: '#e0e0e0',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default styles;
