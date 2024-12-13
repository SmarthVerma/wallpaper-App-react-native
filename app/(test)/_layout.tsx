import { Slot } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Layout() {
    return <SafeAreaView>
        <Text style={{ backgroundColor: "red" }} >Go back</Text>
        <Slot />
    </SafeAreaView>
}