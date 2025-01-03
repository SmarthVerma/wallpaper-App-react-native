import React from "react";
import { Pressable, Text, useColorScheme, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "../ThemedView";

const AuthButton = ({
  label,
  icon, // changed 'icons' to 'icon'
}: {
  label: string;
  icon: "logo-google" | "logo-apple"
}) => {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable style={[styles.button, {
      borderColor: theme == 'light' ? Colors.dark.background : Colors.light.background,
      backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background
    }]}>

      <Ionicons name={icon} size={18} style={{ color: theme === 'light' ? Colors.light.icon : Colors.dark.icon }} />
      <ThemedText style={[styles.text, { color: theme === 'light' ? Colors.light.text : Colors.dark.text }]}>{label}</ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    marginTop: 10,
    display: "flex",
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    borderWidth: 1
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
});

export default AuthButton;