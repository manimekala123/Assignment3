import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card, DataTable } from "react-native-paper";
import { courses, marks as marksData, subjects as subjectsData } from "../assets/StudentsDb";

const Subjects = ({ student }) => {
  const course = courses.find((c) => c.id === student.course_id);

  const marks = marksData.filter((m) => m.student_id === student.id);

  const subjects = subjectsData.filter((s) =>
    marks.map((m) => m.subject_id).includes(s.id)
  );

  const averageMarks =
    marks.reduce((acc, m) => acc + m.marks, 0) / marks.length || 0; // Prevent NaN for no subjects

  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Card style={{ margin: 20 }}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.h1}>{course.name}</Text>
          <Text style={{ textAlign: "center" }}>
            {marks.length} Subjects | Average Marks: {averageMarks.toFixed(2)}
          </Text>

          <View
            style={{
              marginVertical: 20,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
            Marks Information
          </Text>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Subject</DataTable.Title>
              <DataTable.Title numeric>Marks</DataTable.Title>
            </DataTable.Header>

            {subjects.map((subject) => {
              const subjectMarks = marks.find((m) => m.subject_id === subject.id)?.marks || "N/A";
              return (
                <DataTable.Row key={subject.id}>
                  <DataTable.Cell>{subject.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{subjectMarks}</DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Subjects;

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
});
