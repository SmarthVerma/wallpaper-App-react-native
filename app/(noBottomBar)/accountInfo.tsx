import { Link } from "expo-router";
import { SafeAreaView, Text, View, StyleSheet, Button } from "react-native";
import PagerView from "react-native-pager-view";
import { useRef, useState } from "react";

export default function MyPager() {
    const pagerRef = useRef<PagerView>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (pagerRef.current) {
            const nextPage = currentPage + 1;
            pagerRef.current.setPage(nextPage);
            setCurrentPage(nextPage);
        }
    };

    const handlePrevious = () => {
        if (pagerRef.current) {
            const prevPage = currentPage - 1;
            pagerRef.current.setPage(prevPage);
            setCurrentPage(prevPage);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Link href="/licenses">
                <Text style={styles.link}>
                    This is MyPager. Click me to go to licenses.
                </Text>
            </Link>

            <View style={{ flex: 1 }}>
                <PagerView
                    style={styles.pagerView}
                    initialPage={0}
                    ref={pagerRef}
                    orientation={"vertical"}
                    onPageSelected={(e) => {
                        console.log('and also', e.nativeEvent)
                        setCurrentPage(e.nativeEvent.position)
                    }}
                >
                    <View key="1" style={styles.page}>
                        <Text style={styles.text}>Page One</Text>
                    </View>
                    <View key="2" style={styles.page}>
                        <Text style={styles.text}>Page Two</Text>
                    </View>
                    <View key="3" style={styles.page}>
                        <Text style={styles.text}>Page Three</Text>
                    </View>
                </PagerView>
            </View>

            {/* Make sure the buttons are visible */}
            <View style={styles.buttons}>
                <Button
                    title="Previous"
                    onPress={handlePrevious}
                    disabled={currentPage === 0}
                />
                <Button
                    title="Next"
                    onPress={handleNext}
                    disabled={currentPage === 2}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
        height: 400,
        backgroundColor: '#f0f0f0',
        marginTop: 10,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    link: {
        color: 'blue',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
});