import React,{useState  } from 'react';
import { KeyboardAvoidingView,TouchableOpacity, Text, View} from 'react-native';
import { Input } from 'react-native-elements';
import {css} from '../assets/css/Css';
import Menu from '../assets/components/MenuVoltar';
import config from "../config/config.json"


export default function Cadastro({navigation}){ 
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

      //Envio do formulário de cadastro
      async function sendForm(){
         await fetch(`${config.urlRoot}create`,{
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
     navigation.navigate("Login");
    
    };
    return(
        <KeyboardAvoidingView style={[css.container,{backgroundColor:'#E7DDD7'}]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
         <Menu navigation={navigation} nomeicone="arrow-circle-left" tela="Login" title="Cadastro usuário"/>

          <View style={[css.login_cadastro_contato,{justifyContent:"flex-start",marginTop:40}]}>
              <View style={css.inputLogin}>
          <Text style={{fontSize:25}}>Email</Text>
          <Input style={[css.input,{fontSize:20}]} placeholder="Digite seu email" placeholderTextColor={"#000"}  onChangeText={text=>setEmail(text)}/>
          <Text style={{fontSize:25}}>Senha</Text>
          <Input style={[css.input,{fontSize:20}]} placeholder="Digite sua senha" placeholderTextColor={"#000"} 
          onChangeText={text=>{setPassword(text)}}  secureTextEntry={true}  />
              </View>

              <View style={css.botoes}>
              <TouchableOpacity onPress={()=>{sendForm()}} style={css.button}>
                  <Text style={css.textoBotao}>Criar conta</Text>
              </TouchableOpacity>

              </View>
        
          </View>
      </KeyboardAvoidingView>

    )
    }