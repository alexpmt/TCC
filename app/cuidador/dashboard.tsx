import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardCuidador() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Área do Cuidador</Text>

      <TouchableOpacity onPress={() => router.push("/cuidador/pacientes")} style={{ backgroundColor: "#007bff", padding: 15, marginBottom: 10, width: 220 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Selecionar Paciente</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/cuidador/agenda")} style={{ backgroundColor: "#007bff", padding: 15, width: 220 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Agenda de Medicações</Text>
      </TouchableOpacity>
    </View>
  );
}
