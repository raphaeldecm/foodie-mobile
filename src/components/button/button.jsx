import { Text, TouchableOpacity } from 'react-native';
import { styles } from './button.style.js';

export default function Button({ text }) {
  return <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
}