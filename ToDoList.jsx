import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function ToDoList({ tasks, taskComplete }) {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task) => (
        <TouchableOpacity
          key={task.task_id}
          style={styles.task}
          onPress={() => taskComplete(task.task_id)}
        >
          <Text style={task.complete ? styles.complete1 : styles.uncomplete}>
            {task.task_name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  uncomplete: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "lightgray",
    flex: 1,
  },
  complete1: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    backgroundColor: "gray",
    flex: 1,
  },
});
