import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "expo-router";

export default function PedidoSenha() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleEnviar = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      router.push("/esqueciSenha/verificar");
    } catch (error: any) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Redefinir Senha</Text>

      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TouchableOpacity onPress={handleEnviar} style={{ backgroundColor: "#007bff", padding: 15 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
