import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../Styles/Colors";
import React from "react";

const ButtonCreate = ({ handleAddAux }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => handleAddAux()}>
      <Text style={styles.text}>Create note</Text>
    </TouchableOpacity>
  );
};

export default ButtonCreate;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: Colors.magenta,
    borderRadius: 10,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
