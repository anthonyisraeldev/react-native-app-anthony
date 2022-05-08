import { View, FlatList, StyleSheet } from "react-native";
import Note from "./Note";
import React from "react";

/**
 * Componente lista para renderizar todos
 * @param handleModal Manejar la visibilidad del modal
 * @param todoList Listado de todos
 */
const ListNotes = ({ todoList, handleModal }) => {
  const renderTodo = ({ item }) => (
    <Note item={item} handleModal={handleModal} />
  );
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todoList}
        keyExtractor={(todo) => todo.id}
        renderItem={renderTodo}
      />
    </View>
  );
};

export default ListNotes;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 300,
  },
});
