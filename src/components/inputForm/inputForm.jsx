import { styles } from "./inputForm.style";
import { Text, TextInput } from "react-native";

export default function InputForm({ label, placeholder, isPassword }) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword} />
    </>
  );
}