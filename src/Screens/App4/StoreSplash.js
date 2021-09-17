import React from 'react';
import { Button, SafeAreaView ,Text ,Image,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';
import san from '../../assets/san.jpg'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoreLogin from './StoreLogin';
import StoreHome from './StoreHome';
import { MealStores } from '../../Stores/MealStore';
import { observer } from 'mobx-react'



var isUserLogin = false;




const NewHome = observer(({ navigation }) => {

    setTimeout( ()=>{
        if (MealStores.auth){
             navigation.replace('StoreHome')
        }else{
            navigation.replace('StoreLogin')

        }
            console.log(" finish splash screens")
    } , 3000)

    return (
        <ImageBackground source={san}  style={{
            flex: 1,
            justifyContent: "center",
                   
        }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black', opacity: 0.23 }}>

            </SafeAreaView>
   
        </ImageBackground>


    )
})


const Stack = createStackNavigator();

const  HomeStackScreen = () => {

  
    return (
        <NavigationContainer >

            <Stack.Navigator >

                <Stack.Screen name='Splash' component={NewHome} options={{ headerShown: false }} />
              
                <Stack.Screen name='StoreLogin' component={StoreLogin} options={{ headerShown: false }} />
              
               <Stack.Screen name='StoreHome' component={StoreHome} options={{ headerShown: false }} />
              

            </Stack.Navigator>
        </NavigationContainer>

    )


}




export default HomeStackScreen;












const styles = StyleSheet.create({

contView:
{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
},
imgStyle:
{
    width:'100%', 
    height:200,
   borderRadius:100,
},
box:
{
     backgroundColor:'black', 
    marginTop:700, 
    width:'80%',
    alignItems:'center',
  marginLeft:40,
    marginHorizontal:10,
    borderRadius:40
},
textStyle:
{
    fontSize:25, 
    color:'#ffff',
    fontWeight:'bold'
}


})