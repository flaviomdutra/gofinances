import React from "react";
import { Text, View, Button, TextInput } from "react-native";

export function Profile() {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Flavio"
      />

      <TextInput testID="input-surname" placeholder="Sobrenome" value="Dutra" />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}
