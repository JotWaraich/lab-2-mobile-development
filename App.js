import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

export default function App() {
  const [task, setTask] = useState([
    { task_name: "Do laundry", task_id: "1", complete: false },
    { task_name: "go gym", task_id: "2", complete: false },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setTask((task_id) => {
      return task_id.filter((task_id) => task_id.task_id != id);
    });
  };

  return (
    <View style={styles.container}>
      <ToDoList task={task} setTask={setTask} />
      <ToDoForm setTask={setTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
