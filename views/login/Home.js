import React, {useState,useEffect} from 'react';
import { Text, View , FlatList, TouchableOpacity } from 'react-native';
import {css} from '../../assets/css/Css';
import MenuHome from '../../assets/components/MenuHome';
import axios from 'axios';
import {styles} from '../../assets/css/Style'
import Icon from 'react-native-vector-icons/FontAwesome';

const url = 'http://professornilson.com/testeservico/clientes';

export default function Home({navigation}){ 
    const [resultado, setResultado] = useState([]);

    const pegarDados = () => {
        axios.get(url)
            .then((resposta) => setResultado(resposta.data))
            };

    const renderItem = (dados) => {
        return (
            <View style={styles.containerFlate}>
 
                <TouchableOpacity style={[{flex:1,flexDirection:"row",alignItems:"center",marginBottom:5}]}
                onPress={()=>navigation.navigate('Atualizar', { 
                    id: dados.item.id,                  
                  })}> 
                    <View>
                         <Icon name="user-circle" size={90} color="#227FBB"/>
                   </View>
                    <View style={{marginLeft:20}}>
                        <Text style={styles.titulo}>Nome : {dados.item.nome}</Text>
                        <Text style={styles.titulo}>Telefone : {dados.item.telefone}</Text>
                    </View> 
                </TouchableOpacity>                
            </View>
       
        );
    }

   useEffect(() => {
        axios.get(url).then(() => {
          pegarDados()
        });
      });
    
    return(
        <View style={[css.container,{backgroundColor:'#E7DDD7'}]}>
            <MenuHome navigation={navigation} iconeleft="sign-out" iconeright="plus" title="Lista de contato"/>
            <FlatList
                data={resultado}
                renderItem={renderItem}
                keyExtractor={(item) => item.id }
            />   
         </View>
    )
}