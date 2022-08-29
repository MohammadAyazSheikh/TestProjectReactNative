import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import responsiveStyles from './styles/styles';
import { useFunctionalOrientation } from '../../utils/responsiveUtils/responsiveUtils';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
    return {

    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
    }
}


const RandomScreen = (props) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(responsiveStyles);



    return (
        <View style={styles.container}>
            <Text style={styles.txtHeading}>Some Random Screen </Text>
            <Text style={styles.txtHeading}>🚀 🔥 👾 🍉</Text>
        </View>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(RandomScreen);


