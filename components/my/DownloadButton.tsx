import React from "react";
import { Pressable, Text, useColorScheme, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const DownloadButton = () => {
    const theme = useColorScheme() ?? "light";

    return (
        <Pressable style={styles.button}>
            <Ionicons
                name="download-outline"
                size={24}
                color={theme === "light" ? "white" : "black"}
                style={styles.icon}
            />
            <Text style={styles.text}>Download</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        borderRadius: 12,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 80,
        paddingVertical: 1,
    },
    icon: {
        paddingRight: 5,
    },
    text: {
        fontSize: 18,
        color: "white",
        fontWeight: "600",
        textAlign: "center",
        padding: 10,
    },
});

export default DownloadButton;