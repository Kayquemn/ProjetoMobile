import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Texto from '../../../components/Texto';
import Logo from './../../../../assets/Imagem_Logo.png';



export default function sobre({ Titulosobre, efeito }) {

    return <>
        <View style={styles.geral}>
            <Image source={Logo} style={styles.imagem}resizeMode="contain"/>
            <Texto style={styles.Titulosobre}>{Titulosobre}</Texto>
            <Texto style={styles.efeito}>{efeito}</Texto>
        </View>
       
    </>
}

const styles = StyleSheet.create({
    geral: {
    
    }, 

    Titulosobre: {
        fontSize: 50,
        fontWeight: 'bold',
         top: 20,
         left: 50,
    },
    imagem: {
        width: 500,
        height: 420,
        alignSelf: "center",

    },
    efeito: {
        fontSize: 20,
        top: 30,
        left: 5,
        alignItems: "center",
        
    },

   
});