import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
    return <SafeAreaView>
        <Text>Account Page</Text>
        <Link href={'/accountInfo'}>
            <Text>
                Account info
            </Text>
        </Link>
    </SafeAreaView>
} 