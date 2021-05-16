import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, getMe } from './src/features/auth/authSilce';
import ChangePasswordScreen from './src/features/auth/screens/ChangePasswordScreen';
import ForgotPassword from './src/features/auth/screens/ForgotPasswordScreen';
import LoginScreen from './src/features/auth/screens/LoginScreen';
import OnBoardScreen from './src/features/auth/screens/OnBoardScreen';
import RegisterScreen from './src/features/auth/screens/RegisterScreen';
import QuestionScreen from './src/features/Exam/screens/QuestionScreen';
import QuizScreen from './src/features/Exam/screens/QuizScreen';
import TopicScreen from './src/features/Exam/screens/TopicScreen';
import ProfileScreen from './src/features/User/screens/Profile';
import LeaderBoardScreen from './src/features/Exam/screens/LeaderBoardScreen';
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const QuizStack = createStackNavigator();

function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getInfo = async () => {
      const token = await AsyncStorage.getItem('@access_token');
      if (token) dispatch(getMe());
    };
    getInfo();
  }, [dispatch]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#2a2b2f',
          borderTopColor: '#454f59',
        },
        showLabel: false,
        activeTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="align-vertical-bottom" color={color} size={size} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Topic"
        component={TopicScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}
function AppNavigator() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const check = async () => {
      await dispatch(checkAuth());
    };
    check();
  }, []);

  return (
    <>
      {isAuth ? (
        <QuizStack.Navigator>
          <QuizStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <QuizStack.Screen
            name="Quiz"
            component={QuizScreen}
            options={{
              headerTitle: false,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#2F3237',
                borderColor: '#2F3237',
                shadowColor: 'transparent',
              },
            }}
          />
          <QuizStack.Screen
            name="Question"
            component={QuestionScreen}
            options={{
              headerShown: false,
            }}
          />
          <QuizStack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={{
              headerTitle: false,
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#454f59',
                borderColor: '#454f59',
                shadowColor: 'transparent',
              },
            }}
          />
        </QuizStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="OnBoard"
            component={OnBoardScreen}
            options={{
              headerShown: false,
            }}
          />
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#2F3237',
                borderColor: '#454f59',
                shadowColor: 'transparent',
              },
              headerTitle: false,
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#2F3237',
                borderColor: '#454f59',
                shadowColor: 'transparent',
              },
              headerTitle: false,
            }}
          />
          <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#2F3237',
                borderColor: '#454f59',
                shadowColor: 'transparent',
              },
              headerTitle: false,
            }}
          />
        </AuthStack.Navigator>
      )}
    </>
  );
}

export default AppNavigator;
