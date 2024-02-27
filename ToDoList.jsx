import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function ToDoList({ task, setTask }) {
  const listCard = () => {
    return task.map((task) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setTask((task_id) => {
              return task_id.filter(
                (task_id) => task_id.task_id != task.task_id
              );
            });
          }}
        >
          <Text style={styles.uncomplete}>{task.task_name}</Text>
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => setComplete(!complete)}>
          <FlatList
            keyExtractor={(item) => item.task_id}
            data={task}
            renderItem={({ item }) => (
              <Text style={styles.uncomplete}>{item.task_name}</Text>
            )}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
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
