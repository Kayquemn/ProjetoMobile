
import React from "react";
import Texto from '../../components/Texto'
import styles from './estilos';
import { Image, ScrollView, StyleSheet } from "react-native";

export default function index({info}){
    return <ScrollView style={styles.container}>
    <Image source={info.logo} style={styles.logo} resizeMode="contain"/>
    <Texto style={styles.textoSobre}>{info.Titulosobre}</Texto>
    <Texto style={styles.textoSobre1}>{info.efeito}</Texto>
    </ScrollView>
}