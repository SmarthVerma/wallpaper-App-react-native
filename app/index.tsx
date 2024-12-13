import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function () {
    const [count, setCount] = useState(0)
    return <View>
        <Text>Hi there</Text>
        <Button onPress={() => setCount(count + 1)} title="Sign up" ></Button>
        <Text style={{ textAlign: "center" }}>{count}</Text>
    </View>
}