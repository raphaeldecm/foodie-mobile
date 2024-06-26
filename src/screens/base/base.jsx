import { styles } from "./base.style";
import { View } from "react-native";

export default function Base(props) {
  return (
    <View style={ styles.container }>
      {props.children}
    </View>
  );
}