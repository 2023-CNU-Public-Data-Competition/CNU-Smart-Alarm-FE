import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
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
import SetNotification_keyword from './pages/SetNotification-keyword';
import SetNotification_tag from './pages/SetNotification-tag';
import SetNotification_category from './pages/SetNotification-category';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoScreen from './pages/LogoScreen';

// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다. 
const Stack = createStackNavigator(); 

const Tab = createBottomTabNavigator();



function HomeStack() {
  return (
    <Stack.Navigator> 
          {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
          <Stack.Screen 
              name="LogoScreen" 
              component={LogoScreen}
              options={{
                headerShown: false,
              }}
            />
          <Stack.Screen 
              name="Login" 
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="SignUp" 
              component={SignUp}
              options={{
                headerShown: false,
              }}
            /> 
          <Stack.Screen 
              name="SelectCategory" 
              component={SelectCategory}
              options={{
                headerShown: false,
              }}
            /> 
            
            
            <Stack.Screen 
              name="PostList" 
              component={PostList}
              options={{
                title: "CNU 똑똑이",
                headerStyle: {
                  backgroundColor: '#EEF5FE',
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 20
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
                  fontSize: 20
                },
              }}
            /> 
            <Stack.Screen 
              name="NotificationList" 
              component={NotificationList}
              options={{
                title: "알림",
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 20
                },
              }}
            /> 
            
        </Stack.Navigator>
  )
}

function MypageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
            name="Mypage" 
            component={Mypage} 
            options={{
              title: "마이페이지",
              headerStyle: {
                backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
              },
              headerTitleStyle: {
                color: "#4469C0",
                fontSize: 20
              },
            }}
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
                  fontSize: 20
                },
              }}
            /> 
            <Stack.Screen 
              name="SetNotification_keyword" 
              component={SetNotification_keyword}
              options={{
                title: "키워드 알림",
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 20
                },
              }}
            /> 
            <Stack.Screen 
              name="SetNotification_tag" 
              component={SetNotification_tag}
              options={{
                title: "태그 알림",
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 20
                },
              }}
            /> 
            <Stack.Screen 
              name="SetNotification_category" 
              component={SetNotification_category}
              options={{
                title: "카테고리 알림",
                headerStyle: {
                  backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
                },
                headerTitleStyle: {
                  color: "#4469C0",
                  fontSize: 20
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

export default function App({ focused }) {
  return (
    //네비게이션의 트리를 관리해주는 컴포넌트 
    <NavigationContainer > 
      {/* 네비게이션 기본틀의 스택을 생성 */} 
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen 
            name="Search" 
            component={SearchScreen} 
            options={{
              tabBarIcon: () => (
                <Icon
                  name={"magnify"}
                  size={30}
                  color="#4469C0"
                />
              ),
              tabBarShowLabel: false,

        }}
          />
          <Tab.Screen 
            name="Scrap" 
            component={ScrapScreen} 
            options={{
              tabBarIcon: () => (
                <Icon
                  name="bookmark-outline"
                  size={30}
                  color="#4469C0"
                />
              ),
              tabBarShowLabel: false,
            }} 
          />
          <Tab.Screen 
            name="Home" 
            component={HomeStack}
            options={({ route }) => ({
              headerShown: false,
              tabBarIcon: () => (
                <Icon
                  name="home-outline"
                  size={30}
                  color="#4469C0"
                />
              ),
              tabBarShowLabel: false,
              tabBarVisible: route.name !== 'Login' && route.name !== 'LogoScreen'
            })} 
          />
          <Tab.Screen 
            name="MypageStack" 
            component={MypageStack} 
            options={({ route }) => ({
              title: "마이페이지",
              headerStyle: {
                backgroundColor: '#EEF5FE', // 원하는 배경 색상으로 변경
              },
              headerTitleStyle: {
                color: "#4469C0",
                fontSize: 25
              },
              headerShown: false,
              tabBarIcon: () => (
                <Icon
                  name="account-outline"
                  size={30}
                  color="#4469C0"
                />
              ),
              tabBarShowLabel: false,
            })}
          />
        </Tab.Navigator> 
    </NavigationContainer>  
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
});