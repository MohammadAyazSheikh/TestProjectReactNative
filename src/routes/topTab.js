import * as React from 'react';
import randomScreen from '../screens/RandomScreen/randomScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: colors.blue2 }
            }}
        >
            <Tab.Screen name="Home" component={randomScreen} />
            <Tab.Screen name="Settings" component={randomScreen} />
        </Tab.Navigator>
    );
}