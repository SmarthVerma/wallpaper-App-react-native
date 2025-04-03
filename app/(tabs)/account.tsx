import AccountFooter from "@/components/my/AccountFooter";
import AccountHeader from "@/components/my/AccountHeader";
import AccountSettings from "@/components/my/AccountSettings";
import AuthButton from "@/components/my/AuthButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { View, Text, useColorScheme, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
    const theme = useColorScheme()
    console.log('theme', theme)
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>
            <AccountHeader />
            <AccountSettings />
            <AccountFooter />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    infoText: {
        marginTop: 20,
        fontSize: 18,
    },
    link: {
        marginTop: 10,
        color: "blue",
        textDecorationLine: "underline",
    },
});