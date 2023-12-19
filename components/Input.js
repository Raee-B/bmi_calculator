import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ label, value, onChangeText, keyboardType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "700",
  },
  input: {
    height: 48.5,
    width: 150,
    color: "#fff",
    backgroundColor: "rgba(6, 79, 21, 0.2)",
    paddingLeft: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: "right",
    borderBottomWidth: 2,
    borderColor: "rgba(6, 179, 21, 0.9)",
    fontSize: 18,
    padding: 5,
    paddingRight: 20,
  },
});

export default Input;
