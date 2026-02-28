import Button from "../components/Button";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function index() {
  // Capital letter
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>
        <Button />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    backgroundColor: "plum",
    flex: 1,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "yellow",
        textAlign: "center",
        fontSize: 32,
      },
      android: {
        color: "blue",
      },
    }),
  },
});
