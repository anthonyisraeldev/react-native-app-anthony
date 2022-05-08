import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.containerProfile}>
      <Image source={require("../assets/user1.jpg")} style={styles.photo} />
      <View>
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.usernameText}>Anthony Terán</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerProfile: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 25,
  },
  photo: {
    width: "100%",
    maxWidth: 50,
    height: 50,
    borderRadius: 200,
    marginRight: 10,
  },
  welcomeText: {
    color: "#ffffff",
  },
  usernameText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
