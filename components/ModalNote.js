import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ButtonDelete from "./ButtonDelete";
import InputEditNote from "./InputEditNote";

const ModalNote = ({
  modalVisible,
  setModalVisible,
  handleDelete,
  handleEdit,
  todoSelected,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textclose}>X</Text>
          </TouchableOpacity>
          <InputEditNote todoSelected={todoSelected} handleEdit={handleEdit} />
          <ButtonDelete handleDelete={handleDelete} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalNote;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000000c2",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textclose: {
    color: "#FF2929",
    alignSelf: "center",
    fontSize: 12,
  },
  closeIcon: {
    alignSelf: "flex-end",
    justifyContent: "center",
    marginRight: 13,
    marginTop: 20,
    backgroundColor: "#FDE0E4",
    height: 25,
    width: 25,
    textAlign: "center",
    borderRadius: 100,
  },
  content: {
    height: 300,
    width: 300,
    marginTop: 200,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.42,
    shadowRadius: 4.22,
    elevation: 10,
  },
});
