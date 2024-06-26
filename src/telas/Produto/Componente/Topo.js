import React from 'react';
import { Text, StatusBar, Image, Dimensions, View, StyleSheet } from 'react-native';
import photo from '../../../../assets/KIT AP PULSATIVO CARBURADO.jpg';
import Texto from '../../../components/Texto';

export default function Topo({titulo}) {
    return <View>
                <StatusBar />  
                <Image source={photo} style={styles.imagem} resizeMode="contain"/>
                <View style={styles.container}>
                    <View>
                    <Texto style={styles.titulo}>{titulo}</Texto>
                    </View>
                </View>     
            </View>
}
const styles = StyleSheet.create({
    imagem: {
        width: '100',
        height: 295,
    },
    container: {    
       // width: 300,
       // height: 0,
        //padding: 20,
       // marginBottom: 400,
    },
    titulo:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        
       
        
    }
});
