import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the icon button!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContainer} onPress={handlePress}>
        <Entypo name="menu" size={64} color="#777777" />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
      </View>
      <TouchableOpacity style={styles.rightContainer}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={64}
          color="#777777"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0766AD",
    height: 115, //115
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50,
  },
  logo: {
    width: 134,
    height: 120,
  },
  leftContainer: {},
  centerContainer: {},
  rightContainer: {},
});
export default Header;
