
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FlexBox from './components/flexbox';

interface ITOdo
{
  id: number
  name: string
}

export default function App() {

  const [todo, setTodo] =useState("");
  const [lisTodo, setListTodo] = useState<ITOdo[]>([]);

  const handleAddTodo = () =>
  {
    if (!todo) 
    {
      Alert.alert("Lỗi input todo","Todo không được để trống",[
        {
          // text: 'Hủy',
          // onPress: () => console.log('Cancel Pressed'),
          // style: 'cancel',
        },
        {text: 'Xác nhận', onPress: () => console.log('OK Pressed')},
      ]);
      
      return;
    }
    setListTodo([...lisTodo, {id: randomInteger(1,100), name: todo }]);
    setTodo("")
  }

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const deleteTodo = (id: number) =>
  {
    const newTodo = lisTodo.filter(item => item.id !== id);
    setListTodo(newTodo)
  }

  

  //jsx
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
    //   <View style={styles.container}>
    //     {/* header */}
    //     <Text style= {styles.header}>Todo App</Text>
        
    //     {/* from */}
    //     <View style = {styles.body}>
    //       <TextInput
    //         value={todo}
    //         style={styles.todoInput} 
    //         onChangeText={(value) => setTodo(value)}
    //       />
    //       <Button
    //         title='Add todo'
    //         onPress={ handleAddTodo}  
    //       />

    //     {/* todo list */}
    //     </View>
    //       <FlatList 
    //         data={lisTodo}
    //         keyExtractor={item => item.id + ""}
    //         renderItem={({item}) => {
    //           return(
    //             <Pressable 
    //               onPress={() => deleteTodo(item.id)}
    //               style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
    //               <Text style={styles.todoItem}>{item.name}</Text>
    //             </Pressable>
    //           )
    //         }}
    //       />
    //     <View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
    <FlexBox/>
    
  );
}



const styles = StyleSheet.create({
  header:
  {
    backgroundColor:"orange",
    fontSize: 60,
    textAlign: "center",
    paddingHorizontal:20,

  },
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoInput: 
  {
    padding: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    margin: 15,
    borderBottomColor:"green"
  },
  todoItem:
  {
    fontSize:30,
    padding:15,
    marginTop:10,
    backgroundColor:'pink'
  },
  body:
  {
    paddingHorizontal:10
  }
 
});
