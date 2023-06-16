import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Switch, FlatList, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Chip, Divider } from "@react-native-material/core";
import NavigationBar from "../components/NavigationBar";
import { StatusBar } from "expo-status-bar";
import { request } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SetNotification_tag(){

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="<<"
          onPress={() => navigation.navigate('SetNotification')}
        />
      ),
    });
  }, [navigation])

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled_2, setIsEnabled_2] = useState(false);
  const [isEnabled_3, setIsEnabled_3] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled_2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled_3(previousState => !previousState);

  return(
    <View style={styles.container}>
      <View style={styles.categoryForm}>
        <Text style={{color: "grey"}}>알림 받을 태그를 선택해주세요.</Text>
        <View style={styles.categorySwitch}>
          <Text style={styles.category}>컴퓨터융합학부</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#4469C0' : '#99AFE3'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.categorySwitch}>
          <Text style={styles.category}>행정학부</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled_2 ? '#4469C0' : '#99AFE3'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled_2}
          />
        </View>
        <View style={styles.categorySwitch}>
          <Text style={styles.category}>정보화본부</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled_3 ? '#4469C0' : '#99AFE3'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled_3}
          />
        </View>
      </View>
      <View style={styles.submitForm}>
        <Button
          title="저장하기"
          onPress={()=>navigation.navigate('SetNotification')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  categorySwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  category: {
    fontSize: 20
  },
  categoryForm: {
    flex: 1,
    margin: 20,
  },
  tags: {
    paddingTop: 15,
  },
  input: {
    backgroundColor:"white",
    padding: 10,
    margin: 10,
    marginVertical: 20,
    fontSize: 18,
    width: 350,
    height: 50
  },
  buttons: {
    borderWidth: 1,
  },
  submitForm: {
    flex: 1
  }
})