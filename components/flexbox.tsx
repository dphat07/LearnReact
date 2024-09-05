
import {StyleSheet, View, Text } from "react-native"

const styles = StyleSheet.create({
    container:
    {
        marginTop: 50,
        flex:1,
        borderWidth:1,
        borderColor:'red',
        justifyContent:'center'
        
     
    },

    item1:
    {
        backgroundColor:'green',
        padding: 40,
      
    },

    item2:
    {
        backgroundColor:'red',
        padding:40,
        
    },
    item3:
    {
        backgroundColor:'blue',
        padding:40,
       
    },
    item4:
    {
        backgroundColor:'pink',
        padding:40,
       
    },
})

const FlexBox = () =>
{
    return (
        <View style = {styles.container}>
            <View style = {styles.item1}>
                <Text>
                    item1
                </Text>
            </View>

            <View  style = {styles.item2}>
                <Text>
                    item2
                </Text>
            </View>

            <View style = {styles.item3}>
                <Text>
                    item3
                </Text>
            </View>

            <View style = {styles.item4}>
                <Text>
                    item4
                </Text>
            </View>
        </View>
        
    )
}

export default FlexBox;