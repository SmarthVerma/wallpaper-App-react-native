import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text } from 'react-native';
import LibraryScreen from "@/app/(foryou)/library";
import LikedScreen from "@/app/(foryou)/liked";
import SugestedScreen from "@/app/(foryou)/suggested";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Suggested" component={SugestedScreen} />
            <Tab.Screen name="Liked" component={LikedScreen} />
        </Tab.Navigator>
    );
}

