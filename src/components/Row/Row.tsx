import { View, Text, StyleSheet } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { reps, percentages } from "../../consts/consts";

const Row: React.FC<{ maxRM: number }> = ({ maxRM }) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.subtitle}>Reps</Text>
        {reps.map((item, index) => (
          <Text key={index} style={styles.value}>
            {item}
          </Text>
        ))}
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.subtitle}>Lift Weight</Text>
        {percentages.map((item, index) => (
          <Text key={index} style={styles.value}>
            {item * maxRM}
          </Text>
        ))}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.subtitle}>Percentage</Text>
        {percentages.map((item, index) => (
          <Text key={index} style={styles.value}>
            {(item * 100).toFixed(0)}%
          </Text>
        ))}
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
  centerContainer: {
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
