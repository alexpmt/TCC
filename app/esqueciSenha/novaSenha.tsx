import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function NovaSenha() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Para redefinir sua senha use o link enviado no seu email.
      </Text>

      <TouchableOpacity onPress={() => router.push("/login")} style={{ backgroundColor: "#007bff", padding: 15 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
}
