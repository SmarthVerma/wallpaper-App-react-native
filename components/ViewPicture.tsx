import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export const ViewPicture = ({ onClose }: { onClose: () => void }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <GestureHandlerRootView style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                onClose={onClose}
                snapPoints={["99%"]}
                enablePanDownToClose={true}
                onChange={handleSheetChanges}
                index={1}
                handleIndicatorStyle={{ height: 0 }}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 26
    },
});
