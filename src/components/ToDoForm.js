import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  Button,
} from "react-native";

export default function ToDoForm({ addTask }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  const submitHendler = (text) => {
    console.log(text);
    addTask(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task here"
        value={text}
        onChangeText={(val) => changeHandler(val)}
      />
      <Button title="Add Task" onPress={() => submitHendler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 30,
  },
  input: {
    marginBottom: 10,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#000000",
  },
});
