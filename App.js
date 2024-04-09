import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";

import Header from "./Components/Header";

import Card from "./Components/Card";

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>

      <Card
        porcentagem="20%"
        titulo="Leitura"
        imagem=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K8YrLCekTz2lj236GCUTnfBoLNTE3nYg0e0VakYflPgiotVTEsHXgEkRSy8vPwaiBtU&usqp=CAU"
        descricao="Livros de Romances"
      ></Card>

      <Card
        porcentagem="40%"
        titulo="Ir para a escola"
        imagem="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/62649497_1099632600224745_1950717718562865152_n.jpg"
        descricao="Para estudar"
      ></Card>

      <Card
        porcentagem="10%"
        titulo="Estudos para o Enem"
        imagem="https://www.estudaqui.com/wp-content/uploads/2020/05/como-estudar-enem-sozinho.png"
        descricao="Para um futuro melhor"
      ></Card>

      <Card
        porcentagem="5%"
        titulo="Jantar"
        imagem=" https://previews.123rf.com/images/nutalinakul/nutalinakul2004/nutalinakul200400008/143842426-jantar-com-bife-e-batata-no-prato-pratos-de-desenhos-animados-isolados-ilustra%C3%A7%C3%A3o-de-cor-doodle-de.jpg"
        descricao="Comer comida"
      ></Card>

      <Card
        porcentagem="10%"
        titulo="Skincare"
        imagem=" https://i.pinimg.com/736x/ea/ff/48/eaff48848f0dc941adc908a01838f716.jpg"
        descricao="Se arrumar para ir para Etec"
      ></Card>

      <Card
        porcentagem="15%"
        titulo="Dormir"
        imagem=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-PipcwlEy9oBiBmyO5kumj0TgubX8jILPA&s"
        descricao="Dormir faz bem"
      ></Card>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    backgroundColor: "#CAF0F8",

    borderColor: "#90E0EF",

    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 35,

    fontWeight: "bold",

    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,

    fontWeight: "bold",

    marginTop: 15,
  },

  cardTarefa: {
    marginTop: 20,

    backgroundColor: "#A8DADC",

    width: "100%",

    height: 125,

    alignItems: "center",

    justifyContent: "space-between",

    borderRadius: 10,

    borderColor: "white",

    borderWidth: 2,

    flexDirection: "row",

    padding: 15,

    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.3,

    shadowRadius: 2,

    elevation: 5,
  },

  tituloCard: {
    fontSize: 15,

    fontWeight: "bold",

    color: "#1d3557",
  },

  textoCard: {
    fontSize: 10,

    marginTop: 5,
  },

  imagemCard: {
    width: 60,

    height: 60,

    marginRight: 15,
  },
});
