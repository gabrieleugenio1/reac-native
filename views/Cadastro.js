import React from 'react';
import { KeyboardAvoidingView,TouchableOpacity, Text, View} from 'react-native';
import { Input } from 'react-native-elements';
import {css} from '../assets/css/Css';
import Menu from '../assets/components/MenuVoltar';

export default function Cadastro({navigation}){

    return(
        <KeyboardAvoidingView style={[css.container,{backgroundColor:'#E7DDD7'}]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
         <Menu navigation={navigation} nomeicone="arrow-circle-left" title="Cadastro usuário"/>

          <View style={[css.login,{justifyContent:"flex-start",marginTop:40}]}>
              <View style={css.inputLogin}>
          <Text style={{fontSize:25}}>Email</Text>
          <Input style={[css.input,{fontSize:20}]} placeholder="Digite seu email" placeholderTextColor={"#000"}/>
          <Text style={{fontSize:25}}>Senha</Text>
          <Input style={[css.input,{fontSize:20}]} placeholder="Digite sua senha" placeholderTextColor={"#000"}
          secureTextEntry={true}  />
              </View>

              
              <View style={css.botoes}>
              <TouchableOpacity style={css.button}>
                  <Text style={css.textoBotao}>Criar conta</Text>
              </TouchableOpacity>

              </View>
        
          </View>
      </KeyboardAvoidingView>

    )
}