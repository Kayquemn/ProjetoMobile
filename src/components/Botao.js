import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from './Texto'

export default function Botao({textoBotao}){
return  <TouchableOpacity style={styles.botao}>
<Texto style={styles.botaoTexto}>{textoBotao}</Texto>
</TouchableOpacity>
}


const styles = StyleSheet.create({
botao: {
     marginTop: 16,
    backgroundColor: 'blue',
    paddingVertical: 20,
    borderRadius: 15,
   
  

    },
});