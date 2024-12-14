import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ViewPicture } from "@/components/ViewPicture";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { View, Text, StyleSheet, Button, Image, SafeAreaView, FlatList } from "react-native";
import { ImageCards } from "@/components/ImageCards";



export default function Explore() {
    const [selectedWallpaper, setSelectedWallper] = useState<null | Wallpaper>(null)
    const wallpapers = useWallpapers()

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{flex: 1, backgroundColor: "yellow"}} >
            <ParallaxScrollView
                headerBackgroundColor={{ dark: "black", light: "white" }}
                headerImage={
                    <Image
                        source={{ uri: wallpapers[0]?.url }}
                        style={{ width: '100%', height: '100%' }}
                    />
                }
            >
                <View style={{ flex: 1, flexDirection: "row" }} >
                    <FlatList
                        data={wallpapers}
                        renderItem={({ item }) => <ImageCards openImage={() => setSelectedWallper(item)} wallpaper={item} />}
                        keyExtractor={item => item.title}
                        numColumns={2}
                    // horizontal={true}
                    />
                </View>
            </ParallaxScrollView>
            {selectedWallpaper && <ViewPicture data={selectedWallpaper} onClose={() => setSelectedWallper(null)} />}
        </View>
    </SafeAreaView >
}

