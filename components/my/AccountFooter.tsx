import React from "react";
import { ThemedText } from "../ThemedText";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

function AccountFooter() {
    return (
        <View style={styles.container}>
            <ThemedText style={styles.heading}>About</ThemedText>
            <View style={styles.list}>
                <ThemedText style={styles.item}>
                    <Link href="/accountInfo" >
                        Go to Account Info
                    </Link>
                </ThemedText>
                <ThemedText style={styles.item}>
                    <Link href={"/privacyPolicy"}>
                        Privacy Policy
                    </Link>
                </ThemedText>
                <ThemedText style={styles.item}>
                    <Link href={"/termsOfService"}>
                        Terms of Service
                    </Link>
                </ThemedText>
                <ThemedText style={styles.item}>
                    <Link href={"/licenses"}>
                        Licenses
                    </Link>
                </ThemedText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 12,
    },
    list: {
    },
    item: {
        fontSize: 16,
    },
});

export default AccountFooter;