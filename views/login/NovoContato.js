import React, { useState } from 'react';
import { TouchableOpacity,KeyboardAvoidingView,Text, View} from 'react-native';
import { Input } from 'react-native-elements';
import {css} from '../../assets/css/Css';
import MenuVoltar from '../../assets/components/MenuVoltar';
import axios from 'axios';

export default function NovoContato({navigation}){ 
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    function inserirDados(){
        axios.post('http://professornilson.com/testeservico/clientes'
        , {nome: nome,
        telefone: telefone,
        email: email
        }).then(function (response) {
        navigation.navigate("Home");
        console.log(response);
        }).catch(function (error) {
        console.log(error);   
             
        });    
        }

    return(
        <KeyboardAvoidingView style={[css.container,{backgroundColor:'#E7DDD7'}]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <MenuVoltar navigation={navigation} nomeicone="arrow-circle-left" tela="Home" title="Cadastrar contato"/>
            

          <View style={[css.login_cadastro_contato,{justifyContent:"flex-start",marginTop:40}]}>
              <View style={css.inputLogin}>
          <Text style={{fontSize:25}}>Nome</Text>
          <Input style={[css.input,{fontSize:20}]} onChangeText={(text)=> setNome(text)} placeholder="Digite o nome" placeholderTextColor={"#000"}/>
          <Text style={{fontSize:25}}>Email</Text>
          <Input style={[css.input,{fontSize:20}]} onChangeText={(text) => setEmail(text)} placeholder="Digite o email" placeholderTextColor={"#000"}/>
          <Text style={{fontSize:25}}>Telefone</Text>
          <Input style={[css.input,{fontSize:20}]} keyboardType='numeric' maxLength={11} onChangeText= {(text) => setTelefone(text)} placeholder="Digite o telefone" placeholderTextColor={"#000"}/>
              </View>

              
              <View style={css.botoes}>
              <TouchableOpacity style={css.button} onPress={()=>inserirDados()}>
                  <Text style={css.textoBotao}>Salvar Contato</Text>
              </TouchableOpacity>

              </View>
        
          </View>
      </KeyboardAvoidingView>




    )
}