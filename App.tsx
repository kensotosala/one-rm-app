import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "./src/components/Header";
import Form from "./src/components/Form";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Table from "./src/components/Table";
import Separator from "./src/components/Separator";

const App = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="#000" />
        <Header />
        <Form />
        <Separator />
        <Table />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  scrollContainer: {},
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
