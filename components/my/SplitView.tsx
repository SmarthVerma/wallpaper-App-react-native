import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ThemedView } from '../ThemedView';
import { useWallpapers, Wallpaper } from '@/hooks/useWallpapers';
import { ImageCards } from './ImageCards';
import { ViewPicture } from './ViewPicture';

type SplitViewProps = {
    wallpapers: Wallpaper[];
};

const SplitView: React.FC<SplitViewProps> = ({ wallpapers }) => {
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

    return (
        <>
            <ThemedView style={{ flex: 1, flexDirection: 'row' }}>
                <FlatList
                    data={wallpapers}
                    renderItem={({ item }) => (
                        <ImageCards
                            openImage={() => setSelectedWallpaper(item)}
                            wallpaper={item}
                        />
                    )}
                    keyExtractor={(item) => item.title}
                    numColumns={2}
                    nestedScrollEnabled={true}
                // horizontal={true} // Uncomment if you want horizontal scrolling
                />

            </ThemedView>
            {selectedWallpaper && <ViewPicture data={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
        </>
    );
};

export default SplitView;