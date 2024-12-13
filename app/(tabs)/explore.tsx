import { ViewPicture } from "@/components/ViewPicture";
import { useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function Explore() {
    const [isPictureOpen, setIsPictureOpen] = useState(false)
    console.log('this is picture Status', isPictureOpen)
    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Text>Explore Page</Text>
            <Button onPress={() => setIsPictureOpen(true)} title="Open bottom Sheet"></Button>
            {isPictureOpen && <ViewPicture onClose={() => setIsPictureOpen(false)} />}
        </View>
    </SafeAreaView>
}