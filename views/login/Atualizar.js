import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  View
} from "react-native";
import { Input } from "react-native-elements";
import { css } from "../../assets/css/Css";
import MenuVoltar from "../../assets/components/MenuVoltar";
import axios from "axios";

export default function Atualizar({ navigation, route }) {
  const [resultado, setResultado] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const id = route.params.id;
  const url = `http://professornilson.com/testeservico/clientes/${id}`;

  useEffect(() => {
    axios.get(url).then(response => {
      setResultado(response.data);
      setNome(response.data[0].nome);
      setEmail(response.data[0].email);
      setTelefone(response.data[0].telefone);
    });
  }, []);

  if (!resultado) return null;

  console.log(nome);
  function atualizarDados() {
    axios
      .put(url, {
        nome: nome,
        telefone: telefone,
        email: email
      })
      .then(function(response) {
        navigation.navigate("Home");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function removerDados() {
    axios
      .delete(url, {
        nome: nome,
        telefone: telefone,
        email: email
      })
      .then(function(response) {
        navigation.navigate("Home");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView
      style={[css.container, { backgroundColor: "#E7DDD7" }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <MenuVoltar
        navigation={navigation}
        nomeicone="arrow-circle-left"
        tela="Home"
        title="Modificar contato"
      />

      <View
        style={[
          css.login_cadastro_contato,
          { justifyContent: "flex-start", marginTop: 40 }
        ]}
      >
        <View style={css.inputLogin}>
          <Text style={{ fontSize: 25 }}>Nome</Text>
          <Input
            style={[css.input, { fontSize: 20 }]}
            defaultValue={nome}
            onChangeText={text => setNome(text)}
            placeholder="Digite o nome"
            placeholderTextColor={"#000"}
          />
          <Text style={{ fontSize: 25 }}>Email</Text>
          <Input
            style={[css.input, { fontSize: 20 }]}
            onChangeText={text => setEmail(text)}
            defaultValue={email}
            placeholder="Digite o email"
            placeholderTextColor={"#000"}
          />
          <Text style={{ fontSize: 25 }}>Telefone</Text>
          <Input
            style={[css.input, { fontSize: 20 }]}
            defaultValue={telefone} keyboardType='numeric' maxLength={11}
            onChangeText={text => setTelefone(text)}
            placeholder="Digite o telefone"
            placeholderTextColor={"#000"}
          />
        </View>

        <View style={css.botoes}>
          <TouchableOpacity style={css.button} onPress={() => atualizarDados()}>
            <Text style={css.textoBotao}>Atualizar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => removerDados()}
            style={[css.button, { backgroundColor: "#FF1616" }]}
          >
            <Text style={css.textoBotao}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
