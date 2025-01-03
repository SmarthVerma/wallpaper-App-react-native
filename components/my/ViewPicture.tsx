import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';
import DownloadButton from './DownloadButton';

export const ViewPicture = ({ onClose, data }: { onClose: () => void, data: Wallpaper }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const theme = useColorScheme() ?? "light"

    // renders
    return (
        <BottomSheet
            ref={bottomSheetRef}
            onClose={onClose}
            snapPoints={["99%"]}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
            index={1}
            handleIndicatorStyle={{ height: 0 }}
            handleStyle={{ display: 'none', overflow: 'hidden' }}

        >
            <BottomSheetView style={styles.contentContainer}>
                <Image style={styles.image} source={{ uri: data.url }} />
                <View style={styles.topBar} >
                    <Ionicons
                        name='close'
                        size={24}
                        color={theme == "light" ? 'white' : 'black'}
                    />
                    <View style={styles.innerTopbar}>
                        <Ionicons name='share' size={24} color={theme == "light" ? 'white' : 'black'} style={{ paddingRight: 5 }} />
                        <Ionicons name='heart' size={24} color={theme == "light" ? 'white' : 'black'} />
                    </View>
                </View>
                <ThemedText style={styles.text}>
                    {data.title}
                </ThemedText>
                <DownloadButton />
            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        position: "relative"
    },
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    image: {
        width: "100%",
        height: "70%",
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        borderRadius: 15
    },
    topBar: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        position: 'absolute',
        top: 0,
        padding: 14,
        alignItems: "center",
        justifyContent: "space-between"
    },
    innerTopbar: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 600
    }
});

