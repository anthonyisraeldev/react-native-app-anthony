import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const MessageEmptyNotes = () => {
  return (
    <View style={styles.containerNoTodo}>
      <Image
        source={require("../assets/no-todo.png")}
        style={styles.noTodoImg}
      />
      <Text style={styles.textInfoNotes}>No notes created yet 😴</Text>
    </View>
  );
};

export default MessageEmptyNotes;

const styles = StyleSheet.create({
  textInfoNotes: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  noTodoImg: {
    width: 185,
    height: 180,
    marginTop: 40,
    marginBottom: 25,
  },
  containerNoTodo: {
    padding: 10,
    alignItems: "center",
    flexDirection: "column",
  },
});
