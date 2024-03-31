import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import MainLayout from "../layout/MainLayout";

const HomeScreen = ({ navigation }) => {
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

  const addTask = (text) => {
    setTask((prevTask) => {
      return [
        { task_name: text, task_id: Math.random().toString(), complete: false },
        ...prevTask,
      ];
    });
  };

  return (
    <MainLayout>
      <ToDoList tasks={task} taskComplete={toggleComplete} />
      <ToDoForm addTask={addTask} />
      <StatusBar style="auto" />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
