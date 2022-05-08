import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Note = ({ item, handleModal }) => {
  const [done, setDone] = useState(false);
  const { todo } = item;
  console.log(done);

  const handleDone = () => {
    setDone(!done);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleDone(item)}>
        <View style={styles.containerMessage}>
          {done ? (
            <View style={styles.btnPending}>
              <Text style={styles.btnTextDone}>DONE</Text>
            </View>
          ) : (
            <View style={styles.btnDone}>
              <Text style={styles.btnTextPending}>mark as done</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.note} onPress={() => handleModal(item)}>
        <Text style={done ? styles.textDone : styles.textPending}>{todo}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  note: {
    padding: 25,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 15,
    borderLeftColor: "#3366FF",
    borderLeftWidth: 4,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.42,
    shadowRadius: 4.22,
    elevation: 10,
  },
  textDone: {
    textDecorationLine: "line-through",
    color: "#ababab",
  },
  textPending: {
    textDecorationLine: "none",
  },
  btnDone: {
    textDecorationLine: "none",
    width: 93,
    backgroundColor: "#fff8c4",
    padding: 3,
    borderRadius: 10,
  },
  btnPending: {
    textDecorationLine: "none",
    width: 64,
    backgroundColor: "#bbffc0",

    padding: 3,
    borderRadius: 10,
  },
  btnTextDone: {
    color: "#26892d",
    fontSize: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  btnTextPending: {
    color: "#246a29",
    fontSize: 10,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  containerMessage: {
    marginBottom: 15,
  },
});
