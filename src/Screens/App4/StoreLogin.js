import React ,{ useState,useEffect } from 'react';

import { Button, StyleSheet, TextInput, SafeAreaView ,Text ,Image,TouchableOpacity, View} from 'react-native';
import *    as yup from 'yup';
import { Formik } from 'formik';
import logofood from '../../assets/logofood.jpg'

const loginValidationSchema = yup.object().shape({
    name: yup.string().required('name is required!!'),
});


const StoreLogin = (props)=>{
    const name = "Rawan";
    return(
        <Formik
        initialValues={{name: '' }}
        validateOnMount={true}
        onSubmit={values => console.log(values)}
        validationSchema={loginValidationSchema}
        
        
        >
             {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <View style={styles.contView} >

            <View style={styles.TopBox}>
            <Image  source={logofood} style={{height:500,width:"100%",borderRadius:0}}/>
            </View>
 

            <View style={styles.BottomBox}>
                
                <View style={styles.Label}>
                    <Text style={{ fontSize: 18 }}>What is Your FirstName?</Text>
                    <TextInput
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    placeholder='Tony' style={styles.inputStyle} />
                </View>
                {(touched.name && errors.name) && <Text style={styles.error}>{errors.name}</Text>}
                <TouchableOpacity
                //  disabled={!isValid}
                    onPress={() => {
                          if(values.name=='Rawan' ){
                            //   values.name=''
                           props.navigation.navigate('StoreHome');
                                }else{
                                    console.log('no ')
                                 }
                     // props.navigation.navigate('StoreHome');
                   
                    }}
                    style={styles.btnStyle}>
                    <Text style={styles.BtnTextStyle}> Start Ordering </Text>
               </TouchableOpacity>

            </View>

        </View> )}
        </Formik>
    )
}

export default  StoreLogin;
const styles=StyleSheet.create({
contView:
{
    flex:1
},
TopBox:{
    backgroundColor:'#FFA451', 
    height:500
},
BottomBox:
{
    backgroundColor:'white', 
    flex:1
},
imgStyle1:
{
    marginTop:160,
    marginHorizontal:40
},
imgStyle2:
{
    justifyContent:'center', 
    alignItems:'center', 
    marginHorizontal:40, 
    marginTop:10
},
Label:{
    marginLeft:30, 
    marginTop:60, 
    marginRight:30
},
inputStyle:
{
    paddingHorizontal:20, 
    backgroundColor:'#dfdfdf', 
    paddingVertical:18, 
    alignItems:'center', 
    marginTop:35, 
    borderWidth:0, 
    borderRadius:10, 
    borderRadius:10,  
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    elevation: 1
},
btnStyle:
{
    backgroundColor:'#FFA451', 
    marginHorizontal:30, 
    paddingVertical:18, 
    alignItems:'center', 
    marginTop:35, 
    borderRadius:10, 
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    elevation: 1
},
BtnTextStyle:
{
    color:'white', 
    fontSize:16, 
    fontWeight:'bold'
},
error: {
    fontSize: 16,
    color: 'red',
    fontWeight: '300',
    marginTop: 3,
    paddingStart: 30
}


})