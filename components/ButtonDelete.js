import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const ButtonDelete = ({ handleDelete }) => {
  return (
    <View>
      <Text style={styles.confirmationtext}>¿Are you sure?</Text>
      <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
        <Text style={styles.textbtn}>Delete note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonDelete;

const styles = StyleSheet.create({
  deleteBtn: {
    alignSelf: "center",
    alignItems: "center",

    backgroundColor: "#FF6161",
    padding: 5,
    width: 150,
    textAlign: "center",
    borderRadius: 100,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.42,
    shadowRadius: 4.22,
    elevation: 10,
  },
  textbtn: {
    color: "#ffffff",
  },
  confirmationtext: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
});
