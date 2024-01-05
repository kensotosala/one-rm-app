import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Row from "../Row";

const Table: React.FC<{ maxRM: number }> = ({ maxRM }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>1RM Repetition Percentages</Text>
      <Row maxRM={maxRM} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 350,
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default Table;
