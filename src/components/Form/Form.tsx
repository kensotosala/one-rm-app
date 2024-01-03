import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";

const Form = () => {
  // Dropdown values
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Kg", value: "kg" },
    { label: "lb", value: "lb" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate your 1RM</Text>
      <View style={styles.weightInput}>
        <View style={styles.leftContainer}>
          <Input ref={null} label="Weight" labelStyle={{ color: "#000" }} />
        </View>
        <View style={styles.rightContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={"lb"}
          />
        </View>
      </View>
      <View>
        <View>
          <Input ref={null} label="Reps" labelStyle={{ color: "#000" }} />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.calculateBtn}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Calculate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
  },
  weightInput: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    width: "80%",
  },
  rightContainer: {
    width: "20%",
  },
  btnContainer: {},
  calculateBtn: {
    backgroundColor: "#0766AD",
    color: "#fff",
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 20,
  },
});
export default Form;
