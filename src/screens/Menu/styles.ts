import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils/common";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  item: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemHovered: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item_text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
  },
  item_textD: {
    color: '#cccccc',
  }
})

export default styles;
