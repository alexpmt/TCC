import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardPaciente() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Área do Paciente</Text>

      <TouchableOpacity onPress={() => router.push("/paciente/historico")} style={{ backgroundColor: "#007bff", padding: 15, marginBottom: 10, width: 200 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/paciente/notificacoes")} style={{ backgroundColor: "#007bff", padding: 15, width: 200 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Notificações</Text>
      </TouchableOpacity>
    </View>
  );
}
