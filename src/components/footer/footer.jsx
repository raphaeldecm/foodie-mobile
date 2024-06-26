import { styles } from "./footer.style";
import { Text, TouchableOpacity, View } from "react-native";

export default function Footer({ text }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={styles.footerText}>{ text }</Text>
      </TouchableOpacity>
    </View>
  );
}