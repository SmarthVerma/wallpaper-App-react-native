import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';

export const ViewPicture = ({ onClose, data }: { onClose: () => void, data: Wallpaper }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

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
                <Text>
                    {data.title}
                </Text>
                <Button title='Download' />

            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    image: {
        width: "100%",
        height: 400,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

