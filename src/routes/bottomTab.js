import * as React from 'react';
import randomScreen from '../screens/RandomScreen/randomScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
        screenOptions={{
        tabBarStyle :{backgroundColor:colors.blue2},
        tabBarIcon:()=> null,
        tabBarLabelStyle:{fontSize:15}
        }}
        >
            <Tab.Screen name="Home" component={randomScreen} 
            />
            <Tab.Screen name="Chat" component={randomScreen} 
            />
            <Tab.Screen name="Notification" component={randomScreen} />
            <Tab.Screen name="Settings" component={randomScreen} />
        </Tab.Navigator>
    );
}