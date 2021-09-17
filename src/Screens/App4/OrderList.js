import React, { useState } from 'react';
import { FlatList, ScrollView, Dimensions, Button, SafeAreaView, View, Text, TouchableOpacity, Image, Modal, Alert, Pressable, StyleSheet, TouchableOpacityBase, TextInput } from 'react-native';
import image from '../../assets/breakfast.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { width } from 'styled-system';
import { MealStores } from '../../Stores/MealStore';
import { observer } from 'mobx-react'
import *    as yup from 'yup';
import { Formik } from 'formik';
//MealStores.ArrayFav
const loginValidationSchema = yup.object().shape({
    name: yup.string().required('address is required !!'),
    email: yup.string().email('Please enter valid email !!').required('Email is required !!')
});
const OrderList = observer((props) => {
    const name = '';
    const email = '';
    //states
    const [isVisible, setisVisible] = useState(false);
    // const {item}=props.route.params;

    //functions 
    const displayModal = (show) => {
        setisVisible(show)

    }




    return (
        <Formik
        initialValues={{ name: '', email: '' }}
        validateOnMount={true}
        onSubmit={values => console.log(values)}
        validationSchema={loginValidationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <View style={{
            width: Dimensions.get('window').width,
            flex: 1,
            backgroundColor: 'white',
            opacity: isVisible ? 0.2 : null

        }}>
            <View style={{ backgroundColor: '#FFA451', height: '18%', flexDirection: 'row', paddingHorizontal: 18, paddingBottom: 30, paddingTop: 50 }}>


                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 30, alignItems: 'center', paddingHorizontal: 10, paddingVertical: 12, borderRadius: 10, marginStart: 10, borderRadius: 20 }}>
                    <AntDesign name="left" style={{ fontSize: 15, fontWeight: 'bold' }} />
                    <Text color="#0000">Go back</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 38, marginHorizontal: 40, fontSize: 20, color: '#fff', fontWeight: '400' }}>My Basket</Text>
            </View>
            <Modal

                animationType={"slide"}
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has now been closed.');
                }}>



                <View

                    style={styles.mod} >

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingStart: 18 }}>
                        <AntDesign name="closecircle" style={{ fontSize: 35, paddingEnd: 15 }} onPress={() => {
                            displayModal(!isVisible)
                        }} />
                    </View>
                    <View style={{ paddingBottom: 25, justifyContent: 'center', marginHorizontal: 30 }}>
                        <View style={{ marginVertical: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', paddingBottom: 15, color: '#27214D' }}> Delivery Address</Text>
                            <TextInput 
                             onChangeText={handleChange('name')}
                             onBlur={handleBlur('name')}
                             value={values.name}
                            placeholder="10th avenue, Lekki, Lagos State" style={{ fontSize: 16, paddingHorizontal: 10, width: '100%', height: 55, backgroundColor: '#F3F1F1', borderRadius: 10 }} />
                        </View>
                        {(touched.name && errors.name) && <Text style={styles.error}>{errors.name}</Text>}
                        <View style={{ marginVertical: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', paddingBottom: 15, color: '#27214D' }}> Delivery Email</Text>
                            <TextInput
                             onChangeText={handleChange('email')}
                             onBlur={handleBlur('email')}
                             value={values.email}
                            placeholder="Asd@gmail.com" style={{ fontSize: 16, paddingHorizontal: 10, width: '100%', height: 55, backgroundColor: '#F3F1F1', borderRadius: 10 }} />
                        </View>
                        {(touched.email && errors.email) && <Text style={styles.error}>{errors.email}</Text>}
                    </View>
                    <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, paddingHorizontal: 10 }}>
                        <TouchableOpacity 
                        disabled={!isValid}
                        onPress={() => {
                       if(isValid){
                          props.navigation.navigate('OrderComplete')
                          values.name=''
                          values.email=''
                                 displayModal(!isVisible);
                                }else{
                                    console.log('no ')
                                 }

                        }} style={{ width: 310, height: 56, borderColor: '#FFA451', borderRadius: 10, borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#FFA451' }}> Pay on delivery</Text></TouchableOpacity>
                    </View>






                </View>

            </Modal>


            <FlatList
                style={{ paddingHorizontal: 15, paddingVertical: 2 }}
                data={MealStores.ArrayFav}
                renderItem={({ item }) => (
                    <View>

                        <View style={styles.box}>
                            <View style={{ width: 80, height: 80, backgroundColor: '#F1EFF6', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={{ uri: item.strMealThumb }} style={{ width: 70, height: 70, borderRadius: 80 }} />
                            </View>
                            <View style={{ paddingHorizontal: 15 }}>
                                <Text style={{ fontSize: 18, paddingVertical: 8, width: 170 }}>{item.strMeal}</Text>
                                <Text>{item.num} Meal</Text>
                            </View>
                            <Text style={{ fontSize: 18, marginBottom: 12 }}>${item.num * parseInt(item.idMeal.substring(item.idMeal.length, item.idMeal.length - 3))}</Text>

                        </View>


                        <View style={{

                            borderWidth: 1,
                            borderColor: '#F3F3F3'
                        }}></View>
                    </View>
                )}
                keyExtractor={item => item.idMeal}

            />
            <View style={{ paddingTop: 10, height: '13%', paddingHorizontal: 35, alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
                <View>
                    <Text style={{ fontSize: 15 }}>Total</Text>
                    <Text style={{ fontSize: 22, paddingTop: 5 }}>${MealStores.totall}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    displayModal(!isVisible);
                }} style={{ backgroundColor: '#FFA451', width: 180, height: 55, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ color: "#fff", fontSize: 16 }}>CheackOut</Text></TouchableOpacity>
            </View>





        </View> 
          )}
          </Formik>

    )
}
)
export default OrderList;

const styles = StyleSheet.create({

    box: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 120,
        marginStart: 5,
        marginEnd: 5,
        marginVertical: 6,
        paddingHorizontal: 10
    }, button: {
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
        borderWidth: 1,
        marginTop: 320,
        backgroundColor: '#fff',
        borderColor: '#FFA451'
    },
    text: {
        fontSize: 24,
        color: '#27214D',
        padding: 40,
    },
    closeText: {
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center',
    },
    error: {
        fontSize: 18,
        color: 'red',
        fontWeight: '300',
        marginTop: 3,
        paddingStart: 30
    }
});