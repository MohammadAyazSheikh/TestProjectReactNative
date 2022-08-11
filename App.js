
import React, { useEffect } from "react";
import { StatusBar, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";






const Screen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>Itmeenan</Text>
        </View>
    )
}

const Stack = createStackNavigator();

const AuthRoute = () => {

    return (
        <>
            <Stack.Screen
                name="Splash"
                component={Screen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Registration"
                component={Screen}
                options={{
                    headerShown: false,
                }}
            />
        </>
    );
}









function App(props) {

  


    return (
        <NavigationContainer
            theme={{
                dark: true,
                colors: {
                    // ...DefaultTheme.colors,
                    // background: colors.purple1,
                    // card: "red",
                },
            }}
          
        >
          
            <>
                <Stack.Navigator
                    initialRouteName="Splash"
                    screenOptions={{
                        headerTintColor: "#fff",
                        headerStyle: {
                            backgroundColor: "tomato",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                        // animationEnabled: false
                    }}
                >
                    {
                       
                            AuthRoute()
                    }
                </Stack.Navigator>
            </>
        </NavigationContainer>
    );
}


export default App;