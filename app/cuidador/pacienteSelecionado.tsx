import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function PacienteSelecionado() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Paciente Selecionado</Text>

      <TouchableOpacity onPress={() => router.push("/paciente/historico")} style={{ backgroundColor: "#007bff", padding: 15, marginBottom: 10, width: 200 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/paciente/notificacoes")} style={{ backgroundColor: "#007bff", padding: 15, marginBottom: 10, width: 200 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/cuidador/pacientes")} style={{ backgroundColor: "#28a745", padding: 15, width: 200 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Meus Pacientes</Text>
      </TouchableOpacity>
    </View>
  );
}
