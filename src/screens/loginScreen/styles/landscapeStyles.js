
import { StyleSheet } from 'react-native';
import colors from "../../../theme/colors";




export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.blueDark,
            justifyContent: 'center',
            alignItems: 'center'
        },
        txtHeading:{
            color:'#fff',
            fontSize:h(5)
        },
        inputStyle: {
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#fff",
            width: '80%',
            marginVertical: 20,
            color:'#fff'
        },
    });
}




