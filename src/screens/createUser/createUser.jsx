import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./createUser.style.js";
import Header from "../../components/header/header.jsx";
import InputForm from "../../components/inputForm/inputForm.jsx";
import Button from "../../components/button/button.jsx";
import Base from "../base/base.jsx";
import Footer from "../../components/footer/footer.jsx";


export default function CreateUser() {
    return (
      <Base>
          <Header text="Criar sua conta." />

          <View style={styles.formGroup}>
              <View style={styles.form}>
                  <InputForm label="Nome Completo" />
              </View>

              <View style={styles.form}>
                  <InputForm label="E-mail" />
              </View>

              <View style={styles.form}>
                  <InputForm label="Escolha uma senha" isPassword={true} />
              </View>

              <View style={styles.form}>
                  <InputForm label="Confirme a senha" isPassword={true} />
              </View>

              <View style={styles.form}>
                  <Button text="Próximo passo" />
              </View>
          </View>

          <Footer text="Já tenho uma conta." />
      </Base>
    );
}
