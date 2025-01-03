import React, { useState } from 'react'
import { Pressable, View, StyleSheet, Text, useColorScheme, Animated, Appearance } from 'react-native'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'

function AccountSettings() {
    const theme = useColorScheme()  // Get the system theme (light or dark)
    const [currentTheme, setCurrentTheme] = useState(theme)

    const handleThemeChange = (selectedTheme: "light" | "dark" | null) => {
        console.log('jere', theme)
        Appearance.setColorScheme(selectedTheme)
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.headerText}>Settings</ThemedText>

            <ThemedView >
                <ThemedText style={styles.sectionTitle}>Theme</ThemedText>
                <ThemedView style={styles.buttonGroup}>
                    <Pressable
                        style={[styles.button, currentTheme === 'light' && styles.activeButton]}
                        onPress={() => handleThemeChange('light')}
                    >
                        <ThemedText style={styles.buttonText}>Light</ThemedText>
                    </Pressable>
                    <Pressable
                        style={[styles.button, currentTheme === 'dark' && styles.activeButton]}
                        onPress={() => handleThemeChange('dark')}
                    >
                        <ThemedText style={styles.buttonText}>Dark</ThemedText>
                    </Pressable>
                    <Pressable
                        style={[styles.button, currentTheme === null && styles.activeButton]}
                        onPress={() => handleThemeChange(null)}
                    >
                        <ThemedText style={styles.buttonText}>System</ThemedText>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        borderRadius: 10,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 5,
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: 3,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    activeButton: {
        backgroundColor: 'skyblue',  // Highlight active button
    },
})

export default AccountSettings