import { Wallpaper } from '@/hooks/useWallpapers';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

export const ImageCards = ({ wallpaper, openImage }: { wallpaper: Wallpaper, openImage: () => void }) => {
    const url = "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D";

    return (
        <TouchableOpacity delayPressIn={50} delayLongPress={2000} delayPressOut={50} onPress={openImage} style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: wallpaper.url }}
            />
            <View style={styles.overlay}>
                <Text style={styles.text}>{wallpaper.title}</Text>
                <Ionicons name='heart' size={18} style={{color: 'white' }} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        overflow: 'hidden',
        position: 'relative',
        flex: 1,
        margin: 4
    },
    image: {
        width: "100%",
        height: 200,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 4,
        paddingLeft: 9,
        paddingRight: 9,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        color: 'white',
    }
});