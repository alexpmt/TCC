import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Verificar() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Enviamos um link de redefinição de senha para o seu email. Verifique sua caixa de entrada.
      </Text>

      <TouchableOpacity onPress={() => router.push("/esqueciSenha/novaSenha")} style={{ backgroundColor: "#28a745", padding: 15 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Já verifiquei</Text>
      </TouchableOpacity>
    </View>
  );
}
