import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import '../global.css'

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="(noBottomBar)/accountInfo"
                        options={{ headerShown: true, headerTitle: "AccountInfo", headerBackTitle: "Go back" }}
                    />
                    <Stack.Screen
                        name="(noBottomBar)/licenses"
                        options={{ headerShown: true, headerTitle: "Licenses", headerBackTitle: "Go back" }}
                    />
                    <Stack.Screen
                        name="(noBottomBar)/privacyPolicy"
                        options={{ headerShown: true, headerTitle: "Privacy Policy", headerBackTitle: "Go back" }}
                    />
                    <Stack.Screen
                        name="(noBottomBar)/termsOfService"
                        options={{ headerShown: true, headerTitle: "Terms of Service", headerBackTitle: "Go back" }}
                    />
                </Stack>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}