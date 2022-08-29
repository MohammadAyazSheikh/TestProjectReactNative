
import { StyleSheet } from 'react-native';
import colors from "../../../theme/colors";
import { getShadow } from '../../../theme/platformSpecificStyles';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.blueDark,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btn: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.pink,
            marginVertical: 10,
            borderRadius: 10,
            width: w(90),
            paddingVertical: 20,
            ...getShadow({})
        },
        btnText: {
            color: '#fff',
            fontSize: w(6)
        },
    });
}




