import React from 'react';
import { KeyboardAvoidingView,TouchableOpacity, Text, View} from 'react-native';
import { Input } from 'react-native-elements';
import {css} from '../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro({navigation}){

    return(
        <KeyboardAvoidingView style={[css.container,{ backgroundColor:'#E7DDD7'}]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{alignItems:"center",marginTop:100}}>        
            <Icon name="user-circle" size={130} color="#000"/>
          </View>         
           
           
            <View style={css.login}>
                <View style={css.inputLogin}>
            <Text style={{fontSize:25}}>Email</Text>
            <Input style={[css.input,{fontSize:20}]} placeholder="Digite seu email" placeholderTextColor={"#000"}/>
            <Text style={{fontSize:25}}>Senha</Text>
            <Input style={[css.input,{fontSize:20}]} placeholder="Digite sua senha" placeholderTextColor={"#000"}
            secureTextEntry={true}  />
                </View>

                <View style={css.botoes}>
                <TouchableOpacity style={css.button}>
                    <Text style={css.textoBotao}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[css.button,{backgroundColor:"#FF1616"}]} onPress={()=>navigation.navigate('Cadastro')}>
                    <Text style={css.textoBotao}>Cadastre-se</Text>
                </TouchableOpacity>
                </View>
          
            </View>
        </KeyboardAvoidingView>


    )
}