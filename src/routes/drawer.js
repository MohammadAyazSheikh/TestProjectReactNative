import * as React from 'react';
import randomScreen from '../screens/RandomScreen/randomScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../theme/colors';



const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
                drawerStyle: { backgroundColor: colors.pink },
                headerStyle:{
                    backgroundColor:colors.pink,
                },
                headerTintColor:'#fff'
            }
            }>
            <Drawer.Screen name="Home" component={randomScreen} />
            <Drawer.Screen name="Notifications" component={randomScreen} />
        </Drawer.Navigator>
    );
}