import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ViewPicture } from "@/components/my/ViewPicture";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { View, Text, StyleSheet, Button, Image, SafeAreaView, FlatList } from "react-native";
import SplitView from "@/components/my/SplitView";



export default function Explore() {
    const wallpapers = useWallpapers() as Wallpaper[]

    return <View style={{ flex: 1 }}>
        <ParallaxScrollView
            headerBackgroundColor={{ dark: "black", light: "white" }}
            headerImage={
                <Image
                    source={{ uri: wallpapers[0]?.url }}
                    style={{ width: '100%', height: '100%' }}
                />
            }
        >
            <SplitView wallpapers={wallpapers} />
        </ParallaxScrollView>
    </View >
}

