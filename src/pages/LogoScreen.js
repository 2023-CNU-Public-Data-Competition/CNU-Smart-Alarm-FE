import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import { View, ImageBackground, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogoScreen(){

  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.name)

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [navigation])
  
  return(
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/cnu_knockknock.png')} 
        resizeMode='cover'
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
})