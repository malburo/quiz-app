import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './src/features/auth/authSilce';
import LoginScreen from './src/features/auth/screens/LoginScreen';
import OnBoardScreen from './src/features/auth/screens/OnBoardScreen';
import RegisterScreen from './src/features/auth/screens/RegisterScreen';
import QuestionScreen from './src/features/Exam/screens/QuestionScreen';
import QuizScreen from './src/features/Exam/screens/QuizScreen';
import TopicScreen from './src/features/Exam/screens/TopicScreen';
import ProfileScreen from './src/features/User/screens/Profile';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const QuizStack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
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
              headerTitle: false,
              headerStyle: {
                height: 48,
              },
            }}
          />
          <QuizStack.Screen name="Quiz" component={QuizScreen} />
          <QuizStack.Screen name="Question" component={QuestionScreen} />
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
              headerTitle: false,
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerTitle: false,
            }}
          />
        </AuthStack.Navigator>
      )}
    </>
  );
}

export default AppNavigator;
