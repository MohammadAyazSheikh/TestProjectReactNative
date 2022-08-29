import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import responsiveStyles from './styles/styles';
import { useFunctionalOrientation } from '../../utils/responsiveUtils/responsiveUtils';
import { connect } from 'react-redux';
import colors from '../../theme/colors';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => dispatch({ type: 'LOGOUT_SUCCESS' })
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
    }
}


const HomeScreen = (props) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(responsiveStyles);



    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{
                width: '100%',
                alignItems: 'center',
                paddingTop: 100
            }}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: colors.pink2 }]}
                    onPress={() => { props.navigation.navigate("Drawer") }}
                >
                    <Text style={styles.btnText}> Drawer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: colors.red1 }]}
                    onPress={() => { props.navigation.navigate("TopTab") }}
                >
                    <Text style={styles.btnText}>Top Tab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: colors.purple }]}
                    onPress={() => { props.navigation.navigate("BottomTab") }}
                >
                    <Text style={styles.btnText}> Bottom Tab</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, { backgroundColor: "#f2f2f2" }]}
                    onPress={() => { props?.Logout() }}
                >
                    <Text style={[styles.btnText, { color: colors.blueDark }]}> Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


