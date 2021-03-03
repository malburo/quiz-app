import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './src/features/auth/authSilce';
import LoginScreen from './src/features/auth/screens/Login';
import RegisterScreen from './src/features/auth/screens/Register';
import Quiz from './src/features/quiz/screens/Quiz';
import ProfileScreen from './src/features/user/screens/profile';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Catalog Screen</Text>
      <Button title="Go to Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
}

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();
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
        <HomeStack.Navigator>
          <HomeStack.Screen name="Profile" component={ProfileScreen} />
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="Quiz" component={Quiz} />
        </HomeStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
      )}
    </>
  );
}

export default AppNavigator;
