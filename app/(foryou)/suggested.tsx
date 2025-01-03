import SplitView from "@/components/my/SplitView";
import { useSuggestedWallpapers, useWallpapers } from "@/hooks/useWallpapers";
import { SafeAreaView, Text } from "react-native";

export default function Suggested() {
    const wallpapers = useSuggestedWallpapers()
    return <SafeAreaView style={{ flex: 1 }}>
        <SplitView wallpapers={wallpapers} />
    </SafeAreaView>
}