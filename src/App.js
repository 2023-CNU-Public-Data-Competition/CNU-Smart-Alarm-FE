import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostList from './pages/PostList';
import Post from './pages/Post';
import NotificationList from './pages/NotificationList';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SelectCategory from './pages/SelectCategory';
import Mypage from './pages/Mypage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SetNotification from './pages/SetNotification';

// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다. 
const Stack = createStackNavigator(); 

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator> 
          {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
          <Stack.Screen 
              name="Login" 
              component={Login}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="SignUp" 
              component={SignUp}
              options={{
                headerShown: false
              }}
            /> 
          <Stack.Screen 
              name="SelectCategory" 
              component={SelectCategory}
              options={{
                headerShown: false
              }}
            /> 
            
            
            <Stack.Screen 
              name="PostList" 
              component={PostList}
              options={{
                title: "CNU 똑똑이",
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 25
                },
              }}
            />
            
            
             
            
            
            
            <Stack.Screen 
              name="Post" 
              component={Post}
              options={{
                title: "내용 확인",
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 25
                },
              }}
            /> 
            <Stack.Screen 
              name="NotificationList" 
              component={NotificationList}
            /> 
            <Stack.Screen 
              name="SetNotification" 
              component={SetNotification}
              options={{
                title: "알림 편집",
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 25
                },
              }}
            /> 
        </Stack.Navigator>
  )
}

function SearchScreen() {
  return <View><Text>Search</Text></View>
}

function ScrapScreen() {
  return <View><Text>Scrap</Text></View>
}
        // initialRouteName="Home"

export default function App() {
  return (
    //네비게이션의 트리를 관리해주는 컴포넌트 
    <NavigationContainer > 
      {/* 네비게이션 기본틀의 스택을 생성 */} 
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Scrap" component={ScrapScreen} />
          <Tab.Screen 
            name="Home" 
            component={HomeStack}
            options={{
              headerShown: false
            }} 
          />
          <Tab.Screen 
            name="Mypage" 
            component={Mypage} 
            options={{
              title: "마이페이지",
              headerStyle: {
                backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
              },
              headerTitleStyle: {
                color: "#4469C0",
                fontSize: 25
              },
            }}
          />
        </Tab.Navigator> 
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
});