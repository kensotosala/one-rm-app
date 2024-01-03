import { StyleSheet } from "react-native";
import React from "react";
import Header from "./src/components/Header";
import Form from "./src/components/Form";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <Header />
      <Form />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
