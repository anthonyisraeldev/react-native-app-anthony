import { StyleSheet, View } from "react-native";
import React from "react";
import ModalNote from "./ModalNote";
import CountNotes from "../components/CountNotes";
import ListNotes from "./ListNotes";
import MessageEmptyNotes from "./MessageEmptyNotes";

const NotesContainer = ({
  todoList,
  handleModal,
  handleDelete,
  handleEdit,
  todoSelected,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <View style={styles.container}>
      <CountNotes todoList={todoList} />
      {todoList.length !== 0 ? (
        <ListNotes todoList={todoList} handleModal={handleModal} />
      ) : (
        <MessageEmptyNotes />
      )}
      <ModalNote
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        todoSelected={todoSelected}
      />
    </View>
  );
};

export default NotesContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  containerCountTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
