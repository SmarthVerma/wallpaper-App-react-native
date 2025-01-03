import SplitView from "@/components/my/SplitView";
import { useLikedWallpapers, useWallpapers } from "@/hooks/useWallpapers";
import { SafeAreaView, Text } from "react-native";

export default function Liked() {
    const wallpapers = useLikedWallpapers()
    return <SafeAreaView style={{ flex: 1 }}>
        <SplitView wallpapers={wallpapers} />
    </SafeAreaView>
}