import React, { useState } from 'react';
import { Dimensions, Button, SafeAreaView, View, Text, TouchableOpacity, Image, Modal, Alert, Pressable, StyleSheet, TouchableOpacityBase } from 'react-native';
import image from '../../assets/breakfast.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { width } from 'styled-system';
import {MealStores} from '../../Stores/MealStore';
import  {observer} from 'mobx-react'

const StoreDetail = observer((props) => {
    const [isVisible, setisVisible] = useState(true);
    const {item,arr}=props.route.params;

    const displayModal = (show) => {
        setisVisible(show)
    }


    const AddToBasket =(item)=>{
        MealStores.BasketArray(item);

    }


    // const nav =(item)=>{
    //     props.navigation.navigate('StoreDetail'
    //     , {
    //          like: like,
    //         setLike: ()=>setLike(!like),
    //         item:item
    //       }
    //       );
    // }
    return (
      
        <View style={{
            flex: 1,
            backgroundColor: '#FFA451'
        }}>
            <TouchableOpacity onPress={() => {
               props.navigation.navigate('StoreHome');
            }} style={{ backgroundColor: 'white', marginTop: 80, flexDirection: 'row', alignItems: 'center', paddingStart: 10, paddingVertical: 12, borderRadius: 10, width: 100, marginStart: 30, borderRadius: 20 }}>
                <AntDesign name="left" style={{ fontSize: 15, fontWeight: 'bold' }} />
                <Text>Go back</Text>
            </TouchableOpacity>
            <View style={{ paddingVertical: 15, alignItems: 'center' }}>
                <Image source={{uri:item.strMealThumb}} style={{ width: 180, height: 180 ,borderRadius:90}} />
            </View>
            <Modal
            
                style={{ backgroundColor: 'red' }}
                animationType={"slide"}
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has now been closed.');
                }}>

                <View
                    style={styles.mod} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingEnd: 20, justifyContent: 'space-between' }}>
                        <Text style={styles.text}>
                          {item.strMeal}
                           </Text>
                        <AntDesign name="close" style={{ fontSize: 20, paddingEnd: 15 }} onPress={() => {
                            displayModal(!isVisible)
                        }} />
                    </View>
                    <View style={{ paddingBottom: 25, flexDirection: 'row', alignItems: 'center', paddingEnd: 20, justifyContent: 'space-between', paddingHorizontal: 30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign onPress={()=>MealStores.NumberOfMeal(item,arr)} name="pluscircleo" style={{ fontSize: 30, marginHorizontal: 10 }} />
                            <Text style={{ fontSize: 20, marginHorizontal: 10, color: '#27214D' }}>{item.num}</Text>
                            <AntDesign  onPress={()=>MealStores.minusMeal(item,arr)} name= {item.num>1 ?'minuscircleo' : 'minuscircle'} style={{ fontSize: 30, marginHorizontal: 10 }} />

                        </View>
                        <Text style={{ fontSize: 22, color: '#27214D' }}> ${item.num*parseInt(item.idMeal.substring(item.idMeal.length,item.idMeal.length-3))} </Text>


                    </View>
                    <View style={{

                        borderWidth: 1,
                        borderColor: '#F3F3F3'
                    }}></View>

                    <View style={{ paddingVertical: 30, paddingStart: 30 }}>
                        <Text style={{ color: '#27214D', fontSize: 20, paddingBottom: 10, paddingTop: 2, fontWeight: 'bold' }}>Meal Contain for :  </Text>
                        <Text style={{ color: '#27214D', fontSize: 14, paddingBottom: 5 }}>{`${item.strIngredient1} , ${item.strIngredient2} , ${item.strIngredient3}, ${item.strIngredient4}, ${item.strIngredient5}, ${item.strIngredient6}, ${item.strIngredient7}, ${item.strIngredient8}, ${item.strIngredient9}, ${item.strIngredient10}, ${item.strIngredient11}, ${item.strIngredient12} , ${item.strIngredient13} , ${item.strIngredient14}, ${item.strIngredient15}..`}</Text>

                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#F3F3F3'
                    }}></View>
                    <View style={{ paddingVertical: 30, paddingStart: 30, fontWeight: '400', paddingEnd: 30 }}>
                        <Text style={{ paddingBottom: 20, fontSize: 16 }}>if you like this meal can you take order and  add to your basket . </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingStart: 5, paddingVertical: 5, paddingEnd: 5, alignItems: 'center' }}>
                            <TouchableOpacity  
          style={{ backgroundColor: '#FFF7F0', width: 45, height: 45, borderRadius: 20, alignItems: 'center' }}>
                                <AntDesign 
                                onPress={()=>MealStores.isLiked(item,arr)}
                                 name={item.islike=="true" ? 'heart' : 'hearto'}
                                 color={item.islike=="true" ? 'red' : 'black'}
                                style={{ fontSize: 25, paddingTop: 10, color: '#FFA451' }} />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>{
                                displayModal(!isVisible);
                                MealStores.totall += item.num*parseInt(item.idMeal.substring(item.idMeal.length,item.idMeal.length-3))
                                AddToBasket(item) 
                              //  MealStores.totall += item.num*parseInt(item.idMeal.substring(item.idMeal.length,item.idMeal.length-3))
                                }}   style={{ backgroundColor: '#FFA451', width: 220, height: 55, alignItems: 'center', paddingTop: 15, borderRadius: 10 }}>

                                <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18 }}>Add To basket </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View></View>

                </View>
            </Modal>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    displayModal(true);
                }}>
                <Text style={styles.buttonText}>Show Meal Details </Text>
            </TouchableOpacity>
        </View>






    )
})

export default StoreDetail;

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'pink',
        padding: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    button: {
        marginStart: 40,
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: 'transparent',
        shadowColor: '#fff',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },
    closeButton: {
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3974',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },
    buttonText: {
        color: 'black',
        fontSize: 22,
    },
    mod: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
        marginTop: 320,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 24,
        color: '#27214D',
        padding: 40,
        // backgroundColor:'blue'
    },
    closeText: {
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center',

        // backgroundColor:'blue'
    }
});