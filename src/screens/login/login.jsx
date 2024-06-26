import { View, TouchableOpacity, Text } from "react-native";
import Header from "../../components/header/header";
import InputForm from "../../components/inputForm/inputForm";
import Base from "../base/base";
import Button from "../../components/button/button";
import { styles } from "./login.style";
import Footer from "../../components/footer/footer";

export default function Login() {
  return (
    <Base>
      <Header text="Acesse sua conta." />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <InputForm label="E-mail" placeholder="Digite seu e-mail" />
        </View>
        <View style={styles.form}>
          <InputForm label="Senha" placeholder="Digite sua senha" isPassword={true} />
        </View>
        <View style={styles.form}>
          <Button text="Entrar" />
        </View>
      </View>

      <Footer text="Criar minha conta." />

    </Base>
  );
}