
import { StyleSheet } from 'react-native';
import colors from "../../../theme/colors";




export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.blueDark,
            justifyContent: 'center',
            alignItems: 'center',
        },
        txtHeading:{
            color:'#fff',
            fontSize:w(8)
        },
    });
}




