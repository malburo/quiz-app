import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './src/features/auth/authSilce';
import LoginScreen from './src/features/auth/screens/Login';
import OnBoardScreen from './src/features/auth/screens/OnBoard';
import RegisterScreen from './src/features/auth/screens/Register';
import Catalog from './src/features/Exam/screens/Catalog';
import QuizDetail from './src/features/Exam/screens/QuizDetail';
import Quizzes from './src/features/Exam/screens/Quizzes';
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
        component={Catalog}
        options={{
          tabBarLabel: 'Topic',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
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
          <QuizStack.Screen name="Home" component={Home} />
          <QuizStack.Screen name="Quizzes" component={Quizzes} />
          <QuizStack.Screen name="QuizDetail" component={QuizDetail} />
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
