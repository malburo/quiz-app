import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, logout } from '../../auth/authSilce';
import ChangeAvatar from '../components/ChangeAvatar';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.current);
  const isFocused = useIsFocused();
  useEffect(() => {
    (async () => {
      if (isFocused) {
        await dispatch(getMe());
      }
    })();
  }, [isFocused]);
  const handleLogout = async () => {
    await dispatch(logout());
  };
  const navigation = useNavigation();
  return (
    <ScrollView style={{ height: '100%', backgroundColor: '#2F3237', padding: 24 }}>
      <View>
        <View
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            marginTop: 40,
          }}
        >
          <ChangeAvatar currentUser={currentUser} />
          <View>
            <Text style={{ fontSize: 24, fontWeight: '600', color: 'white', margin: 24 }}>{currentUser.fullName}</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <View
            style={{
              backgroundColor: '#454f59',
              width: 150,
              height: 80,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 32 }}>{currentUser.learningStreaks}</Text>
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 16 }}>streak</Text>
          </View>
          <View
            style={{
              backgroundColor: '#454f59',
              width: 150,
              height: 80,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 32 }}>{currentUser.point}</Text>
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 16 }}>Point</Text>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            borderWidth: 1,
            borderColor: '#454f59',
            borderRadius: 8,
            backgroundColor: '#2a2b2f',
          }}
        >
          <View style={{ padding: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: 'white' }}>FullName</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>{currentUser.fullName}</Text>
          </View>
          <View style={{ borderColor: '#454f59', borderWidth: 0.5 }}></View>
          <View style={{ padding: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8, color: 'white' }}>Email</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>{currentUser.email}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <View style={styles.list}>
            <View style={{ paddingHorizontal: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Change password</Text>
            </View>
            <View>
              <IconButton icon="arrow-right-drop-circle" color="white" style={{ margin: 0 }} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 24,
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#B23939',
            }}
          >
            <View style={{ paddingHorizontal: 12, marginTop: 6, marginBottom: 6 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#454f59',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#2a2b2f',
  },
});

export default ProfileScreen;
