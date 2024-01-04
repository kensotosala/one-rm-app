import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Separator = () => {
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "90%",
    height: 1,
    marginHorizontal: 50,
    marginTop: 30,
  },
});

export default Separator;
