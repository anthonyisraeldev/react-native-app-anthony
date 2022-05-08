import { TextInput, Text, View, StyleSheet } from "react-native";
import React from "react";

const InputEditNote = ({ handleEdit, todoSelected }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={handleEdit}
        value={todoSelected.todo}
        multiline={true}
      />
      <View style={styles.ContainerInfoText}>
        <Text style={styles.infoText}>
          Just close the modal to save the note
        </Text>
      </View>
    </>
  );
};

export default InputEditNote;

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    width: 273.47,
    alignSelf: "center",
    paddingHorizontal: 8,
    fontSize: 16,
    height: 70,
    backgroundColor: "#ededed",
    marginTop: 20,
    paddingVertical: 10,
  },
  ContainerInfoText: {
    backgroundColor: "#e6f4ff",
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
  },
  infoText: {
    fontWeight: "bold",
    color: "#6c92af",
  },
});
