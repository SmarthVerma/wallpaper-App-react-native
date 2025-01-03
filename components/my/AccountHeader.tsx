import React from 'react';
import { View, StyleSheet, SafeAreaView, Pressable, useColorScheme } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import AuthButton from './AuthButton';
import { Colors } from '@/constants/Colors';

function AccountHeader() {
    const theme = useColorScheme()
    return (
        <SafeAreaView >
            <ThemedText style={styles.title}>Panels</ThemedText>
            <ThemedText style={styles.subtitle}>Sign in to save your data</ThemedText>
            <ThemedView style={[styles.buttonContainer, { backgroundColor: theme == 'light' ? "#d3d7e0" : "#2b2c2e" }]} >
                <AuthButton label='Sign in' icon="logo-google" />
                <AuthButton label='Sign in' icon="logo-apple" />
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 8, // Adjust space between title and subtitle
    },
    subtitle: {
        fontSize: 16,
        color: 'gray', // Adjust color for subtitle
    },
});

export default AccountHeader;