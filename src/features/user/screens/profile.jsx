import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import AvatarImage from '../../../assets/Saly.png';
import Button from '../../../components/Button';
import { logout } from '../../auth/authSilce';
const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <View>
        <Avatar.Image size={112} source={AvatarImage} />
        <Text>Your name</Text>
        <Button onPress={handleLogout} title="Logout" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18172B',
    height: '100%',
  },
});

export default ProfileScreen;
