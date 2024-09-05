import { StyleSheet,View, Text } from "react-native"

const styles = StyleSheet.create({
        review:{
            fontFamily:'OpenSans-Regular',
            fontSize:30
        }
    }
)

const DetailScreen =  () => {
    return (
        <View >
            <Text style = {styles.review}>google</Text>
        </View>
    )
}

export default DetailScreen;