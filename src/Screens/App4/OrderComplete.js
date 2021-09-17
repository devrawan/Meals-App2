import React from 'react';
import { View,Button, SafeAreaView ,Text,Image, TouchableOpacity} from 'react-native';
import com from '../../assets/comp.png'
// import { Provider } from 'mobx-react';
// import store from '../../Store'
const OrderComplete =( { navigation,route})=>{
    return(
        //<Provider store={store}>
        <View style={{flex:1, alignItems:'center'}}>
         <View style={{height:'40%',width:'100%',justifyContent:'flex-end',alignItems:'center'}}> 
         <Image  source={com}style={{width:200,height:200}}/></View>
<Text style={{fontSize:28,color:'#27214D',marginTop:40,fontWeight:'700'}}>Congratulations!!!</Text>
<Text style={{color:'#27214D',fontSize:18,marginTop:40,paddingHorizontal:40}}> Your order have been taken and is  being attended to</Text>
            <TouchableOpacity   onPress={()=>{
    navigation.navigate('StoreHome')}} style={{height:55,width:140,backgroundColor:'#FFA451',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:40}}><Text style={{color:'#fff',fontSize:18}}>Track Order</Text></TouchableOpacity>
            <TouchableOpacity  onPress={()=>{
    navigation.navigate('StoreHome')}} style={{borderWidth:1, height:55,width:220,borderColor:'#FFA451',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:40}}><Text style={{color:'#FFA451',fontSize:18}}>Continue Shopping</Text></TouchableOpacity>
        </View>
       // </Provider>
    )
}

export default OrderComplete ;

