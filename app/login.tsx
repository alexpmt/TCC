import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      if (user.displayName === "cuidador") {
        router.push("/cuidador/dashboard");
      } else {
        router.push("/paciente/dashboard");
      }
    } catch (error: any) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#007bff", padding: 15 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/cadastro")} style={{ marginTop: 15 }}>
        <Text style={{ color: "#007bff", textAlign: "center" }}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/esqueciSenha/pedido")} style={{ marginTop: 15 }}>
        <Text style={{ color: "red", textAlign: "center" }}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}
