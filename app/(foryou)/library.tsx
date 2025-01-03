import SplitView from "@/components/my/SplitView";
import { useLibraryWallpapers, useWallpapers } from "@/hooks/useWallpapers";
import { SafeAreaView, Text, View } from "react-native";


export default function Library() {
    const wallpapers = useLibraryWallpapers()
    return <SafeAreaView style={{ flex: 1 }}>
        <SplitView wallpapers={wallpapers} />
    </SafeAreaView>
}