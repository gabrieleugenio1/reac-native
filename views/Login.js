import React,{useState} from 'react';
import { KeyboardAvoidingView,TouchableOpacity, Text, View} from 'react-native';
import { Input } from 'react-native-elements';
import {css} from '../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config/config.json'

export default function Login({navigation}){
    const [display,setDisplay] = useState('none');
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
   //Envio do formulário de login
   async function sendForm(){
    let response = await fetch(`${config.urlRoot}login`,{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
    })

})
let json = await response.json();
if (json==="Error"){
    setDisplay("flex");
    setTimeout(()=>{setDisplay("none")},5000)
    await AsyncStorage.clear();
}else{
    await AsyncStorage.setItem('userData',
        JSON.stringify(json)
      );                
    navigation.navigate("Home");
};
};

    return(
        <KeyboardAvoidingView style={[css.container,{ backgroundColor:'#E7DDD7'}]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{alignItems:"center",marginTop:100}}>        
            <Icon name="user-circle" size={130} color="#000"/>
          </View>         
           
           
            <View style={css.login_cadastro_contato}>
            <View style={css.inputLogin}>
            <View >
                <Text style={css.login__msg(display)}>Email ou senha inválidos!</Text>
            </View>
            <Text style={{fontSize:25}}>Email</Text>
            <Input style={[css.input,{fontSize:20}]}  onChangeText={text=>setEmail(text)} placeholder="Digite seu email" placeholderTextColor={"#000"}/>
            <Text style={{fontSize:25}}>Senha</Text>
            <Input style={[css.input,{fontSize:20}]}  onChangeText={text=>setPassword(text)} placeholder="Digite sua senha" placeholderTextColor={"#000"}
            secureTextEntry={true}  />
                </View>

                <View style={css.botoes}>
                <TouchableOpacity style={css.button} onPress={()=>{
                sendForm();
            }}>
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