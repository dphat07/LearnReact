import { StyleSheet,View, Text, Button } from "react-native"
import { OPEN_SANS } from "../../utils/const";
import { NavigationProp, useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
        review:{
            fontFamily:OPEN_SANS,
            fontSize:30
        }
    }
)

const DetailScreen =  () => {
   
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View >
            <Text style = {styles.review}>google</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('home')}/>
        </View>
    )
}

export default DetailScreen;