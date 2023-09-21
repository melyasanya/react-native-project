import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/PhotoBG.png")}
        style={styles.bgImage}
      >
        <View style={styles.registrationContainer}>
          <Text style={styles.registrationText}>Реєстрація</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    // height: "100%",
    // width: "100%",
  },
  registrationContainer: {
    backgroundColor: "#fff",
    height: 549,
    width: "100%",
    marginTop: "auto",
    borderTopLeftRadius: "25%",
    borderTopRightRadius: "25%",
  },
  registrationText: {
    textAlign: "center",
    marginTop: 92,
  },
});
