import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import ButtonCreate from "./ButtonCreate";
import { Colors } from "../Styles/Colors";

const InputCreateNote = ({ handleAdd }) => {
  const [input, setInput] = useState("");

  const handleAddAux = () => {
    if (input !== "") {
      handleAdd(input);
      setInput("");
    }
  };
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        placeholder="Note..."
        placeholderTextColor="#ffffff"
        onChangeText={setInput}
        value={input}
        multiline={false}
        blurOnSubmit={true}
      />
      <ButtonCreate handleAddAux={handleAddAux} />
    </View>
  );
};

export default InputCreateNote;

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 8,
    fontSize: 18,
    height: 35,
    color: "#ffffff",
    paddingLeft: 10,
    fontSize: 14,
  },
});
