import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text } from 'react-native';
import LibraryScreen from "@/app/library";
import LikedScreen from "@/app/liked";
import SugestedScreen from "@/app/suggested";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Suggested" component={SugestedScreen} />
            <Tab.Screen name="Liked" component={LikedScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} />
        </Tab.Navigator>
    );
}

