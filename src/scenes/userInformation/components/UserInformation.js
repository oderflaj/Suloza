import React, { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { styles } from "../style";
import { globalStyle } from "../../../styles";
import Button from "../../../components/button/componets/Button";
import { FontAwesome } from "@expo/vector-icons";
import { FacebookLogIn, Register } from "../../../services/Data";

export default ({ closeUserInformation }) => {
  const [activityRegisterUser, setActivityRegisterUser] = useState(false);
  const [formNameValue, setFormNameValue] = useState("");
  const [formEmailValue, setFormEmailValue] = useState("");
  const [formPhoneValue, setFormPhoneValue] = useState("");

  const RegisterUser = () => {
    setActivityRegisterUser(true);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => closeUserInformation()}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container]}
      >
        {activityRegisterUser && (
          <View style={styles.activeIndicatorContainer}>
            <ActivityIndicator
              size="large"
              color={globalStyle.globalFontColor}
            />
          </View>
        )}
        <View style={[styles.subcontainer]}>
          <Text style={styles.normalText}>
            Para continuar regístrese con su cuenta de Facebook
          </Text>
          <View style={styles.facebookButtonContainer}>
            <Button
              backgroundColor={"#1877F2"}
              title={"Cuenta Facebook"}
              fatherConatinerWidth={"100%"}
              onPress={() => {
                if (FacebookLogIn()) {
                  closeUserInformation();
                }
              }}
            >
              <FontAwesome
                name="facebook-square"
                size={26}
                color={globalStyle.globalFontColorButton}
              />
            </Button>
          </View>
          <Text style={styles.normalText}>Ó</Text>

          <View style={styles.formUserInfoContent}>
            <Text style={[styles.normalText, { marginBottom: 10 }]}>
              Ingrese sus datos en el formulario:
            </Text>
            <Text style={styles.formUserInfoText}>Nombre</Text>
            <TextInput
              style={styles.formUserInfoTextInput}
              value={formNameValue}
              onChangeText={(text) => setFormNameValue(text)}
            />
            <Text style={styles.formUserInfoText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formUserInfoTextInput}
              value={formEmailValue}
              onChangeText={(text) => setFormEmailValue(text)}
            />
            <Text style={styles.formUserInfoText}>Teléfono (10 dígitos)</Text>
            <TextInput
              keyboardType="phone-pad"
              style={styles.formUserInfoTextInput}
              value={formPhoneValue}
              onChangeText={(text) => setFormPhoneValue(text)}
            />
            <View style={{ marginTop: 15 }}>
              <Button
                title={"Registrar"}
                fatherConatinerWidth={"100%"}
                backgroundColor={"green"}
                onPress={() => RegisterUser()}
              ></Button>
            </View>
            <View style={{ marginTop: 15 }}>
              <Button
                title={"Cancelar"}
                fatherConatinerWidth={"100%"}
                backgroundColor={"red"}
                onPress={() => closeUserInformation()}
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
