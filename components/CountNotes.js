import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../Styles/Colors";
const CountNotes = ({ todoList }) => {
  return (
    <View style={styles.containerCountTodo}>
      <Text style={styles.title}>Total notes:</Text>
      <View style={styles.totalNotes}>
        <Text style={styles.qty}>{todoList.length}</Text>
      </View>
    </View>
  );
};

export default CountNotes;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  containerCountTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalNotes: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffdce6",
    height: 25,
    width: 25,
    textAlign: "center",
    borderRadius: 100,
  },
  qty: {
    color: Colors.magenta,
    fontWeight: "bold",
    fontSize: 12,
  },
});
