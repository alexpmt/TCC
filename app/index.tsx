import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // redirecionar conforme tipo de usuário
        if (user.displayName === "cuidador") {
          router.replace("/cuidador/dashboard");
        } else {
          router.replace("/paciente/dashboard");
        }
      } else {
        router.replace("/login");
      }
    });
    return unsubscribe;
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
}
