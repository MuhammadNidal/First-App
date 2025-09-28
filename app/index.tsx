import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

export default function SplashScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Pulse animation for logo
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate automatically after 3s
    const timer = setTimeout(() => {
      router.replace("/(tabs)/tasks");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const navigateNow = () => {
    router.replace("/(tabs)/tasks");
  };

  return (
    <LinearGradient colors={["#2f95dc", "#1e3c72"]} style={styles.container}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          alignItems: "center",
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Image
          source={{ uri: "https://img.freepik.com/free-photo/3d-illustration-hand-putting-tick-paper_107791-15903.jpg?semt=ais_hybrid&w=740&q=80" }}
          style={styles.logo}
        />
        <Text style={styles.title}>My First React Native App</Text>
        <Text style={styles.subtitle}>ToDo App</Text>
      </Animated.View>

      <TouchableOpacity style={styles.button} onPress={navigateNow}>
        <Text style={styles.buttonText}>Enter App</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#f0f0f0",
    marginBottom: 50,
    textAlign: "center",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    position: "absolute",
    bottom: 70,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: "#2f95dc",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
