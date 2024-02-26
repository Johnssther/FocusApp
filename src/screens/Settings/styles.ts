import { StyleSheet } from "react-native";
import COLORS from "../../Constants/Colors";

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor:COLORS.slate[200],
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    textAlign: 'justify',
    width: '100%',
    marginTop: 7,
  }
})

export default styles;
