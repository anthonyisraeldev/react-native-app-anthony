import { View, StyleSheet, Keyboard } from "react-native";
import React, { useState } from "react";
import Profile from "../components/Profile";
import InputCreateNote from "../components/InputCreateNote";
import NotesContainer from "../components/NotesContainer";
import { Colors } from "../Styles/Colors";
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todoSelected, setTodoSelected] = useState({});
  const [todoList, setTodoList] = useState([]);

  const handleAdd = (input) => {
    {
      setTodoList([{ id: Date.now(), todo: input }, ...todoList]);
      Keyboard.dismiss();
    }
  };

  const handleModal = (todoSelected) => {
    setModalVisible(true);
    setTodoSelected(todoSelected);
  };

  const handleDelete = () => {
    const todosFiltrados = todoList.filter((item) => item !== todoSelected);
    setTodoList(todosFiltrados);
    setModalVisible(false);
  };

  const handleEdit = (text) => {
    const todoToEdit = todoList.find((todo) => todo.id === todoSelected.id);
    todoToEdit.todo = text;
    const todoAux = [];
    todoList.forEach((item) => {
      todoAux.push(item);
    });
    setTodoList(todoAux);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Profile />
        <InputCreateNote handleAdd={handleAdd} />
      </View>
      <View style={styles.containerBottom}>
        <NotesContainer
          todoList={todoList}
          handleDelete={handleDelete}
          handleModal={handleModal}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleEdit={handleEdit}
          todoSelected={todoSelected}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    paddingTop: 80,
    backgroundColor: Colors.blue,
  },
  containerTop: {
    flexDirection: "column",
    width: 320,
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  containerBottom: {
    marginTop: 50,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
  },
  paddingBotton: {},
});
