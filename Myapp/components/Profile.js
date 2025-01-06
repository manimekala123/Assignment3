import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";

const Profile = ({ student }) => {
  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Card style={{ margin: 20 }}>
        <Card.Content style={styles.cardContent}>
          <Image source={student.profile_pic} style={styles.profile_pic} />
          <Text style={styles.h1}>{student.name}</Text>
          <Text style={{ textAlign: "center" }}>
            Age : {student.age} | Gender: {student.gender}
          </Text>

          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            Contact Information
          </Text>
          <Text>Email: {student.email}</Text>
          <Text>Phone: {student.phone}</Text>
          <Text>Address: {student.address}</Text>

          <View
            style={{
              marginBlock: 20,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <Text style={{ fontWeight: "bold" }}>Biological Information</Text>
          <Text>Gender: {student.gender}</Text>
          <Text>Age: {student.age}</Text>
          <Text>Blood Group: {student.blood_group}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  profile_pic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: "auto",
  },
});
