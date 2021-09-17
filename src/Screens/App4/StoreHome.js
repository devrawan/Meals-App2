import React, { useState, useEffect } from 'react';
import { FlatList, Switch, StyleSheet, Button, ScrollView, SafeAreaView, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import img from '../../assets/prod1.png'

import store from '../../Store'
import loadMeals from '../../network/Api'
import { add } from 'lodash';
import { MealStores } from '../../Stores/MealStore';
import { Observer, observer } from 'mobx-react'
// import { date } from 'yup/lib/locale';
// import { observable } from 'mobx';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoreDetail from './StoreDetail';
import OrderList from './OrderList';
import OrderComplete from './OrderComplete';



//`${colors[Math.floor(Math.random() * 8)]}`

var colors = ['#FFFAEB', '#FEF0F0', '#F1EFF6', '#ffd9ea', '#b8d6f0', '#ffd9ba', '#c6f2ff', '#ffd3b6', '#e6d9fd', '#d7ead6']
var temp = [];
let array = [];

const StoreHome = observer((props) => {

    const [index, setindex] = useState(0)
    const [arr, setArr] = useState([])
    const [text, onChangeText] = useState('')
    var indexx = 0;

    const nav = (item, arr) => {
        props.navigation.navigate('StoreDetail'
            , {
                arr: arr,
                item: item
            }
        );
    }
    return (
        <View style={styles.ViewCont}>
            <View style={styles.Header}>
                <FontAwesome5 onPress={() => {
                    props.navigation.navigate('StoreLogin');
                }} name="align-left" style={{ fontSize: 25, paddingTop: 8 }} />

                <FontAwesome onPress={() => {
                    props.navigation.navigate('OrderList');
                }}
                    name="shopping-basket" style={{ paddingRight: 5, fontSize: 25, marginBottom: 5, color: '#FFA451', paddingTop: 8 }} />
            </View>
            <View style={styles.TextView}>
                <Text style={styles.TextStyle}>Hello Tony, What favariout Meal
                    you want today?</Text>

            </View>
            <View style={styles.searchView}>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Search for Meal  you want '
                    style={styles.inputView}
                >

                </TextInput>
                <TouchableOpacity onPress={() => {
                    MealStores.SearchofMeal(text);
                    onChangeText('')
                }}>
                    <AntDesign
                        name="search1" style={styles.filtericon} />
                </TouchableOpacity>


            </View>


{MealStores.value == null ?  <View style={styles.titleView}>
                <Text style={styles.titleStyle}>Recommended Meals </Text>
            </View>:    <View style={styles.titleView}>
                <Text style={styles.titleStyle}> Result Search  </Text>
            </View>
                }
            <View style={styles.scrollCont}>

{ console.log("Search Value : " )}
{ console.log([MealStores.value])}
                <FlatList
                    style={{
                        paddingVertical: 5,
                        flexDirection: 'row',
                        paddingHorizontal: 10
                    }}
                    horizontal
                    data={MealStores.value == null ?   MealStores.Meals : [MealStores.value]}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#F1EFF6',
                                width: 180,
                                height: 220,
                                borderRadius: 10,
                                alignItems: 'center',
                                marginHorizontal: 5,
                                shadowColor: 'gray',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.7,
                                elevation: 1
                            }}>
                            <TouchableOpacity>
                                <AntDesign
                                    onPress={()=>MealStores.isLiked(item,'meals')}
                                    name={item.islike=="true" ? 'heart' : 'hearto'}
                                    color={item.islike=="true" ? 'red' : 'black'}
                                    style={{
                                        fontSize: 25,
                                        paddingTop: 10,
                                        marginLeft: 120
                                    }}></AntDesign>
                            </TouchableOpacity>


                            <Image source={{ uri: item.strMealThumb }} style={{
                                marginLeft: 10,
                                width: 110,
                                height: 110,
                                borderRadius: 60,
                            }} />
                            <Text style={{
                                color: '#27214D',
                                fontSize: 15,
                                marginTop: 8, alignItems: 'center', alignContent: 'center'
                            }}> {item.strMeal.substring(0, 20)} </Text>
                            <View style={{
                                marginTop: 5,
                                paddingVertical: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: '#27214D',
                                    marginRight: 70,
                                    fontSize: 16,
                                    paddingStart: 10
                                }}> ${parseInt(item.idMeal.substring(item.idMeal.length, item.idMeal.length - 3))} </Text>
                                <TouchableOpacity>
                                    <Ionicons onPress={() => nav(item, 'meals')} name="add-circle-outline" style={{
                                        fontSize: 30,
                                        paddingStart: 10
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.idMeal}

                />








            </View>










            <View style={{ flexDirection: 'row', marginHorizontal: 22, justifyContent: 'space-between' }}>


                <TouchableOpacity
                    onPress={() => {
                        MealStores.handleClick(1)
                    }} style={{ borderRadius: 15, paddingVertical: 12, marginHorizontal: 5 }}><Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: '#27214D'
                    }}>Beef </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    MealStores.handleClick(2)
                }} style={{ borderRadius: 15, paddingVertical: 12, marginHorizontal: 5 }}><Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: '#27214D'
                }}> Chicken </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => MealStores.handleClick(3)} style={{ borderRadius: 15, paddingVertical: 12, marginHorizontal: 5 }}><Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: '#27214D'
                }}>Dessert </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => MealStores.handleClick(4)} style={{ borderRadius: 15, paddingVertical: 12, marginHorizontal: 5 }}><Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: '#27214D'
                }}>Vegan </Text></TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row', paddingVertical: 5
            }}>


                {MealStores.click == 1 ? (
                    <FlatList

                        horizontal
                        style={{ paddingHorizontal: 15, paddingVertical: 2 }}
                        data={MealStores.Beef}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#ffd9ba', width: 140, height: 170, borderRadius: 10, alignItems: 'center', marginHorizontal: 5, shadowColor: 'gray',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.7,
                                    elevation: 1
                                }}>
                                <AntDesign

onPress={()=>MealStores.isLiked(item,'beef')}
name={item.islike=="true" ? 'heart' : 'hearto'}
color={item.islike=="true" ? 'red' : 'black'}
                                    style={{ fontSize: 20, paddingTop: 5, marginLeft: 100 }} />
                                <Image source={{ uri: item.strMealThumb }} style={{ width: 90, height: 70, resizeMode: 'contain' }} style={{ borderRadius: 100, width:90, height: 90 ,marginBottom:3}} />
                                <Text style={{ fontSize: 13, marginTop: 3, color: '#27214D' }}>{item.strMeal.substring(0, 13)} </Text>
                                <View style={{
                                    paddingVertical: 2, flexDirection: 'row',
                                    justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 0
                                }}>
                                    <Text style={{ fontWeight: '500', color: '#27214D', marginRight: 50, fontSize: 16, paddingStart: 10 }}>${parseInt(item.idMeal.substring(item.idMeal.length, item.idMeal.length - 3))} </Text>
                                    <Ionicons onPress={() => nav(item, 'beef')} name="add-circle-outline" style={{ fontSize: 26, paddingStart: 2 }} />
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.idMeal}

                    />) : (<View></View>)}

                {MealStores.click == 2 ? (
                    <FlatList
                        horizontal
                        style={{ paddingHorizontal: 15, paddingVertical: 2 }}
                        data={MealStores.Chicken}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#c6f2ff', width: 140, height: 170, borderRadius: 10, alignItems: 'center', marginHorizontal: 5, shadowColor: 'gray',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.7,
                                    elevation: 1
                                }}>
                                <AntDesign
                                onPress={()=>MealStores.isLiked(item,'chicken')}
                                name={item.islike=="true" ? 'heart' : 'hearto'}
                                color={item.islike=="true" ? 'red' : 'black'}
                                    style={{ fontSize: 20, paddingTop: 5, marginLeft: 100 }} />
                                <Image source={{ uri: item.strMealThumb }} style={{ width: 90, height: 70, resizeMode: 'contain' }} style={{  marginBottom:3,borderRadius: 100, width:90, height: 90 }} />
                                <Text style={{ fontSize: 13, marginTop: 3, color: '#27214D', fontWeight: '700' }}>{item.strMeal.substring(0, 13)} </Text>
                                <View style={{
                                    paddingVertical: 2, flexDirection: 'row',
                                    justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 0
                                }}>
                                    <Text style={{ fontWeight: '500', color: '#27214D', marginRight: 50, fontSize: 16, paddingStart: 10 }}>${parseInt(item.idMeal.substring(item.idMeal.length, item.idMeal.length - 3))} </Text>
                                    <Ionicons onPress={() => nav(item, 'chicken')} name="add-circle-outline" style={{ fontSize: 26, paddingStart: 2 }} />
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.idMeal}

                    />) : (<View></View>)}


                {MealStores.click == 3 ? (
                    <FlatList
                        horizontal
                        style={{ paddingHorizontal: 15, paddingVertical: 2 }}
                        data={MealStores.Dessert}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#e6d9fd', width: 140, height: 170, borderRadius: 10, alignItems: 'center', marginHorizontal: 5, shadowColor: 'gray',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.7,
                                    elevation: 1
                                }}>
                                <AntDesign
                                onPress={()=>MealStores.isLiked(item,'dessert')}
                                name={item.islike=="true" ? 'heart' : 'hearto'}
                                color={item.islike=="true" ? 'red' : 'black'}
                                    style={{ fontSize: 20, paddingTop: 5, marginLeft: 100 }} />
                                <Image source={{ uri: item.strMealThumb }} style={{ width: 90, height: 70, resizeMode: 'contain' }} style={{ borderRadius: 50, width: 80, height: 80 ,marginBottom:3}} />
                                <Text style={{ fontSize: 13, marginTop: 3, color: '#27214D', fontWeight: '700' }}>{item.strMeal.substring(0, 13)} </Text>
                                <View style={{
                                    paddingVertical: 2, flexDirection: 'row',
                                    justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 10
                                }}>
                                    <Text style={{ fontWeight: '500', color: '#27214D', marginRight: 50, fontSize: 16, paddingStart: 10 }}>${parseInt(item.idMeal.substring(item.idMeal.length, item.idMeal.length - 3))} </Text>
                                    <Ionicons onPress={() => nav(item, 'dessert')} name="add-circle-outline" style={{ fontSize: 26, paddingStart: 2 }} />
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.idMeal}

                    />) : (<View></View>)}


                {MealStores.click == 4 ? (
                    <FlatList
                        horizontal
                        style={{ paddingHorizontal: 15, paddingVertical: 2 }}
                        data={MealStores.Vegan}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#d7ead6', width: 140, height: 170, borderRadius: 10, alignItems: 'center', marginHorizontal: 5, shadowColor: 'gray',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.7,
                                    elevation: 1
                                }}>
                                <AntDesign
                                onPress={()=>MealStores.isLiked(item,'vegan')}
                                name={item.islike=="true" ? 'heart' : 'hearto'}
                                color={item.islike=="true" ? 'red' : 'black'}
                                    style={{ fontSize: 20, paddingTop: 5, marginLeft: 100 }} />
                                <Image source={{ uri: item.strMealThumb }} style={{ width: 90, height: 70, resizeMode: 'contain' }} style={{ borderRadius: 50, width: 80, height: 80 ,marginBottom:3}} />
                                <Text style={{ fontSize: 13, marginTop: 3, color: '#27214D', fontWeight: '700' }}>{item.strMeal.substring(0, 13)} </Text>
                                <View style={{
                                    paddingVertical: 2, flexDirection: 'row',
                                    justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 10
                                }}>
                                    <Text style={{ fontWeight: '500', color: '#27214D', marginRight: 50, fontSize: 16, paddingStart: 10 }}>${parseInt(item.idMeal.substring(item.idMeal.length, item.idMeal.length - 3))} </Text>
                                    <Ionicons onPress={() => nav(item, 'vegan')} name="add-circle-outline" style={{ fontSize: 26, paddingStart: 2 }} />
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.idMeal}

                    />) : (<View></View>)}












            </View>
        </View>





    )
}
)

//export default StoreHome;




const Stackk = createStackNavigator();

const  NewHom = () => {

  
    return (
    

            <Stackk.Navigator >

                <Stackk.Screen name='StoreHome' component={StoreHome} options={{ headerShown: false }} />
                <Stackk.Screen name='StoreDetail' component={StoreDetail} options={{ headerShown: false }} />
                <Stackk.Screen name='OrderList' component={OrderList} options={{ headerShown: false }} />
                <Stackk.Screen name='OrderComplete' component={OrderComplete} options={{ headerShown: false }} />

            </Stackk.Navigator>
      

    )


}




export default NewHom;

const styles = StyleSheet.create({
    ViewCont:
    {
        flex: 1,
        backgroundColor: '#fff'
    },
    Header:
    {
        backgroundColor: 'white',
        paddingBottom: 10,
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        paddingTop: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    TextView:
    {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    TextStyle:
    {
        fontSize: 18,
        color: '#27214D'
    },
    searchView:
    {
        paddingVertical: 5,
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    inputView: {
        fontSize: 18,
        paddingStart: 14,
        width: 300,
        backgroundColor: '#F3F4F9',
        paddingVertical: 15,
        alignItems: 'center',
        borderWidth: 0,
        borderRadius: 15
    },
    filtericon:
    {

        fontSize: 28,
        paddingTop: 10,
        marginLeft: 15
    },
    titleView:
    {
        paddingTop: 22,
        paddingHorizontal: 28,
        paddingBottom: 10
    },
    titleStyle:
    {
        fontSize: 22,
        fontWeight: '500',
        color: '#27214D'
    },
    scrollCont:
    {
        flexDirection: 'row',
        paddingVertical: 5
    },
    scrollStyle:
    {
        paddingHorizontal: 15,
        paddingVertical: 10
    }

})