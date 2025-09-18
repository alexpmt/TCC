import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ListaPacientes() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Lista de Pacientes</Text>

      {/* Exemplo: lista fake */}
      <TouchableOpacity onPress={() => router.push("/cuidador/pacienteSelecionado")} style={{ backgroundColor: "#007bff", padding: 15, marginBottom: 10, width: 200 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Paciente 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/cuidador/pacienteSelecionado")} style={{ backgroundColor: "#007bff", padding: 15, width: 200 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Paciente 2</Text>
      </TouchableOpacity>
    </View>
  );
}
