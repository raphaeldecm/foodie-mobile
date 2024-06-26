import { Image, Text, View } from 'react-native';
import { styles } from './header.style.js';
import icons from '../../constants/icons.js';

export default function Header({ text }) {
  return (
    <View style={styles.header}>
      <Image source={icons.logo} style={styles.logo} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}