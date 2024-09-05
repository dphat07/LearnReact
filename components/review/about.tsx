import { StyleSheet,View, Text } from "react-native"
import { globalStyles } from "../../utils/const";

const style = StyleSheet.create ({
    about:{
        fontSize:30,
    }
})
const AboutScreen =  () => {
    return (
        <View>
        <Text style = {[style.about, globalStyles.globalFont]}>
                google
            </Text>
        </View>
    )
}


export default AboutScreen;