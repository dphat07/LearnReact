import { StyleSheet,View,Text } from "react-native"
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPEN_SANS } from "./utils/const";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



SplashScreen.preventAutoHideAsync();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const App = () => {
    const [loaded, error] = useFonts({
        [OPEN_SANS]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    useEffect(() => {
    if (loaded || error) {
        SplashScreen.hideAsync();
    }
    }, [loaded, error]);

    if (!loaded && !error) {
    return null;
    }

    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        // <View>
        //     <HomeScreen/>
        //     <DetailScreen/>
        //     <AboutScreen/>
        // </View>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="home"
            component={HomeScreen} 
            options={{title:'Trang chủ'}}/>
            <Stack.Screen name="detail" component={DetailScreen } 
            options={{title:'Chi tiết'}}/>
          
        </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default App;