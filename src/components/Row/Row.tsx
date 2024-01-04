import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Row = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.subtitle}>Reps</Text>
        <Text style={styles.value}>1</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.subtitle}>Percentage</Text>
        <Text style={styles.value}>30%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  leftContainer: {
    // backgroundColor: "red",
    flex: 2,
  },
  rightContainer: {
    // backgroundColor: "blue",
    flex: 2,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
export default Row;
