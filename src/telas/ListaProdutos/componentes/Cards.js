import React from "react";
import {View,ScrollView,StyleSheet} from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

// import logoLogo from "./../../../../assets/gravatas.jpg"
// import Texto from "../../../componentes/Texto";
// import Add from "./../../../componentes/Botao";
 import css from "./css"

export default function Detalhes() { 
    return <>
        <ScrollView >
            <View style={css.geral}>
                <Card>
                    <Card.Title title="Carburador 2E" subtitle="Card"/>
                    <Card.Content>
                        <Text>Carburador 2e</Text>
                        <Text>Card content</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>  
            </View>
           
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    geral:{
      backgroundColor: '#808080',
      alignItems:'center',      
    },
    titulo:{
      fontSize: 30,
      fontWeight:"bold",
      color:'#E5B80B',
      textAlign:'center',
    },
    corpo:{
      paddingTop: 30,
      fontSize: 20,
      color:'gray',
    },
    preco:{
      paddingTop: 10,
      fontSize: 25,
      textAlign:'center',
      fontWeight:"bold",
      color:'white'
    },
    logo:{
      paddingLeft: 100,
      paddingRight: 100,
      width:80,
      height:80,
    },
    logotipo: {
      /*flexDirection:"row",*/
    },
    Backgroud:{
        backgroundColor: '#3d0c02',
        alignItems:'center',      
      },
      detalhes:{
        fontSize: 30,
        fontWeight:"bold",
        color:'#E5B80B',
        textAlign:'center',
        width:"100%",
      },
      ar:{
        width: 200,
        height: 200,
      },
      ar2:{
        width: 50,
        height: 50,
        marginLeft: 250,
        position:"absolute",
        display:"flex",
      },
      arr:{
        flexDirection:"row",
      },
      Carrinho:{
        position:"absolute",
        paddingLeft: 240,
      },
  });