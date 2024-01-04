import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Row from "../Row";

const Table = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>1RM Repetition Percentages</Text>
      <Row />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 700,
    marginTop: 10,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default Table;
