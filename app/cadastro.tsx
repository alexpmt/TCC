import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function Cadastro() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState<"paciente" | "cuidador" | null>(null);

  const handleCadastro = async () => {
    if (!tipo) {
      Alert.alert("Erro", "Escolha se você é paciente ou cuidador.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      await updateProfile(userCredential.user, { displayName: tipo });

      Alert.alert("Sucesso", "Conta criada!");
      router.replace("/login");
    } catch (error: any) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Criar Conta</Text>

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

      <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
        <TouchableOpacity onPress={() => setTipo("paciente")} style={{ padding: 10, backgroundColor: tipo === "paciente" ? "#28a745" : "#ccc" }}>
          <Text style={{ color: "#fff" }}>Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTipo("cuidador")} style={{ padding: 10, backgroundColor: tipo === "cuidador" ? "#28a745" : "#ccc" }}>
          <Text style={{ color: "#fff" }}>Cuidador</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: "#28a745", padding: 15 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")} style={{ marginTop: 15 }}>
        <Text style={{ color: "#007bff", textAlign: "center" }}>Já tenho conta</Text>
      </TouchableOpacity>
    </View>
  );
}
