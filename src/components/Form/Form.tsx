import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import Table from "../Table";
import Separator from "../Separator";

const Form = () => {
  // Dropdown values
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Kg", value: "kg" },
    { label: "lb", value: "lb" },
  ]);

  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [maxRM, setMaxRM] = useState(0);

  const handleSumbit = () => {
    let maxRM = parseInt(weight) * (1 + 0.025 * parseInt(reps));
    setMaxRM(maxRM);
    console.log("1RM: ", maxRM);
    handleClear();
  };

  const handleClear = () => {
    setWeight("");
    setReps("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate your 1RM</Text>
      <View style={styles.weightInput}>
        <View style={styles.leftContainer}>
          <Input
            ref={null}
            label="Weight"
            labelStyle={{ color: "#000" }}
            value={weight}
            onChangeText={setWeight}
          />
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
          <Input
            ref={null}
            label="Reps"
            labelStyle={{ color: "#000" }}
            onChangeText={setReps}
            value={reps}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.calculateBtn} onPress={handleSumbit}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Calculate
          </Text>
        </TouchableOpacity>
      </View>
      {maxRM > 0 ? (
        <>
          <Separator />
          <Table maxRM={maxRM} />
        </>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 25,
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
    width: "75%",
  },
  rightContainer: {
    width: "25%",
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
