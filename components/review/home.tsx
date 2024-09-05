import { View, Text, Button } from "react-native"

const HomeScreen =  (props:any) => {
    const{navigation} = props; 
    return (
        <View>
            <Text style ={{fontSize:40}}>HomeScreen</Text>
            <Button title="View Detail" onPress={() => navigation.navigate("detail")}/>
        </View>
    )
}

export default HomeScreen;