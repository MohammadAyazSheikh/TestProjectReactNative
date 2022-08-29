
import { StyleSheet } from 'react-native';
import colors from "../../../theme/colors";




export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container: {
            ...styles.container,
            backgroundColor: colors.blueDark,
            justifyContent: 'flex-start'
        },
        txtHeading: {
            color: '#fff',
            fontSize: h(8)
        },
    });
}




