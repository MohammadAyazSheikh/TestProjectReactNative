import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import responsiveStyles from './styles/styles';
import { useFunctionalOrientation } from '../../utils/responsiveUtils/responsiveUtils';
import { connect } from 'react-redux';
import colors from '../../theme/colors';
import { Login } from '../../redux/actions/authActions/loginActions';


const mapDispatchToProps = (dispatch) => {
    return {
        Login: (data) => dispatch(Login(data))
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
    }
}


const LoginScreen = (props) => {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(responsiveStyles);

    const [isFocused, setIsFocused] = useState(false);

    const [name, setName] = useState(null);


    return (
        <View style={styles.container}>
            <Text style={styles.txtHeading}>Enter Name To Continue 🔥 👾</Text>
            <TextInput
                style={[styles.inputStyle, { borderColor: isFocused ? colors.pink : "#fff" }]}
                placeholderTextColor="#fff"
                placeholder='Enter Name'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={name}
                onChangeText={(val) => { setName(val) }}
            />
            <Button
                title="Continue"
                color={colors.pink}
                accessibilityLabel="Learn more about this purple button"
                onPress={() => { props.Login({ name }) }}
            />
        </View>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


