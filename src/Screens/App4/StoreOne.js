import React,{useState} from 'react';
import { Button, SafeAreaView ,Text ,Image,TouchableOpacity, View} from 'react-native';
import logoo from '../../assets/Logoo.png'
import textt from '../../assets/TextLogo.png'
import fruits from '../../assets/fruits.png'
import Ellipse from '../../assets/Ellipse.png'
import title from '../../assets/title.png'
import subtitle from '../../assets/subtitle.png'
import fru from '../../assets/fru.png'
import logofood from '../../assets/logofood.jpg'
import ims from '../../assets/ims.jpg'
import axios from 'react-native-axios';
import loadMeals from '../../network/Api'
import Card from '../../Components/Card'
var temp =[]
//str.substr(str.length-3, str.length);


const StoreOne =({navigation})=>{

    return(
        <View style={{flex:1, backgroundColor:'black'}} >
           <View  style={{ backgroundColor:'#FFA451',height:500}}>
             <Image  source={ims} style={{height:500,width:"100%",borderRadius:0}}/>
             
               </View>
               <View style={{backgroundColor:'white',flex:1}}>
              {/* <Image source={title} style={{marginLeft:30,marginTop:70}}/> */}
                {/* <Image  source={subtitle} style={{marginLeft:30,marginTop:30}}/> */}
                {/* <Text style={{marginLeft:30,marginTop:70}}> Get the freshest meal </Text> */}
               <Text style={{color:'#27214D', marginLeft:30,marginTop:28,fontSize:20,fontWeight:'600',marginRight:10}}>Healthy eating is important for many reasons, including fueling your body, acquiring necessary nutrients, lowering your disease risk, increasing your longevity, and promoting optimal mental and physical well-being.</Text>
               <TouchableOpacity 
               onPress = {()=>{
                navigation.navigate('StoreLogin');
    }}
               style={{backgroundColor:'#FFA451',marginHorizontal:30,paddingVertical:18,alignItems:'center',marginTop:35,borderRadius:10}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}> Let's continue</Text></TouchableOpacity>
           </View>
        </View>
    // <View>
    //{renderr()}
   // {temp.map((item)=>(<Text key={item.idMeal}>{item.strArea} {item.idMeal} {item.strMealThumb} {parseInt( item.idMeal.substr(item.idMeal.length-3, item.idMeal.length) )} </Text>))} 
  // {temp.map((item)=>(<Card key={item.idMeal} title={item.strMeal} imgg={item.strMealThumb} price ={parseInt( item.idMeal.substr(item.idMeal.length-3, item.idMeal.length) )}/>))} 
    // </View>
    )
}

export default StoreOne ;