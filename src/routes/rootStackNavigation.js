import React from "react";
import { View, Text, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../theme/colors";
import loginScreen from "../screens/loginScreen/loginScreen";
import randomScreen from "../screens/RandomScreen/randomScreen";
import { connect } from 'react-redux';
import homeScreen from "../screens/HomeScreen/homeScreen";
import DrawerNav from "./drawer";
import BottomTab from "./bottomTab";
import TopTab from "./topTab";


function Screen() {
    return (
        <View style={{ backgroundColor: colors.blueDark, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Starter Application 🔥 📱 👾</Text>
        </View>
    )
}

const Stack = createStackNavigator();

const AuthRoute = () => {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={loginScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerBackgroundContainerStyle: { backgroundColor: colors.pink }
                }}
            />
        </>
    )
}

const HomeRoute = () => {
    return (
        <>
            <Stack.Screen
                name="Home"
                component={homeScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerBackgroundContainerStyle: { backgroundColor: colors.pink }
                }}
            />
            <Stack.Screen
                name="Drawer"
                component={DrawerNav}
                options={{
                    headerShown: false,
                    headerTintColor: '#fff',
                    headerBackgroundContainerStyle: { backgroundColor: colors.pink }
                }}
            />
            <Stack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{
                    headerShown: false,
                    headerTintColor: '#fff',
                    headerBackgroundContainerStyle: { backgroundColor: colors.pink }
                }}
            />
            <Stack.Screen
                name="TopTab"
                component={TopTab}
                options={{
                    headerShown: false,
                    headerTintColor: '#fff',
                    headerBackgroundContainerStyle: { backgroundColor: colors.pink }
                }}
            />
        </>
    )
}


const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const RootStack = (props) => {

    // alert(JSON.stringify(props?.user))
    const isUser = props?.user?.user;

    return (
        <NavigationContainer
            theme={{
                dark: true,
                colors: {
                    background: colors.blueDark,
                    // ...DefaultTheme.colors,
                    // card: "red",
                },
            }}
        >
            <StatusBar
                backgroundColor={'#040926'}
                animated
            />
            <Stack.Navigator>
                {
                    isUser ? HomeRoute() : AuthRoute()
                }
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default connect(mapStateToProps, null)(RootStack);