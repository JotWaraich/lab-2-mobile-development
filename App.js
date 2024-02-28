import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

export default function App() {
  const [task, setTask] = useState([
    { task_name: "Do laundry", task_id: "1", complete: false },
    { task_name: "Go gym", task_id: "2", complete: true },
    { task_name: "Walk Dog", task_id: "3", complete: false },
  ]);

  const toggleComplete = (taskId) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.task_id === taskId ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={task} taskComplete={toggleComplete} />
      <ToDoForm setTask={setTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
