import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './pages/PostList';
import Post from './pages/Post';
import Notification from './pages/Notification';


// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다. 
const Stack = createStackNavigator(); 

export default function App() {

  return (
    //네비게이션의 트리를 관리해주는 컴포넌트 
    <NavigationContainer> 
      {/* 네비게이션 기본틀의 스택을 생성 */} 
        <Stack.Navigator> 
          {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
            <Stack.Screen 
              name="PostList" 
              component={PostList}
              options={{
                headerTitle: () => (
                  <View >
                    <Text style={styles.header}>CNU 똑똑이</Text>
                  </View>
                ),
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                  color: "4469C0" 
                },
              }}
            /> 
            <Stack.Screen 
              name="Post" 
              component={Post}
              options={{
                headerTitle: () => (
                  <View >
                    <Text style={styles.header}>내용확인</Text>
                  </View>
                ),
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                  color: "4469C0" 
                },
              }}
            /> 
            <Stack.Screen 
              name="Notification" 
              component={Notification}
            /> 
        </Stack.Navigator> 
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    color: "4469C0" 
  }
});