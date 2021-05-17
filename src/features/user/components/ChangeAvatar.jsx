import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Platform, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { changeAvatar } from '../../auth/authSilce';
import defaultAvatar from '../../../../assets/default-avatar.jpg';
import { ActivityIndicator } from 'react-native-paper';
const ChangeAvatar = ({ currentUser }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      setIsLoading(true);
      if (!result.cancelled) {
        if (Platform.OS === 'web') {
          const formData = new FormData();
          formData.append('file', result.uri);
          formData.append('upload_preset', 'y6uwotih');
          const image = await axios.post('https://api.Cloudinary.com/v1_1/malburo/image/upload', formData);
          const payload = { userId: currentUser.userId, data: { imgUrl: image.data.secure_url } };
          await dispatch(changeAvatar(payload));
          return;
        }
        const formData = new FormData();
        formData.append('file', `data:image/jpg;base64,${result.base64}`);
        formData.append('upload_preset', 'y6uwotih');
        const image = await axios.post('https://api.Cloudinary.com/v1_1/malburo/image/upload', formData);
        const payload = { userId: currentUser.userId, data: { imgUrl: image.data.secure_url } };
        await dispatch(changeAvatar(payload));
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <View style={{ borderColor: '#3475da', borderWidth: 5, padding: 12, borderRadius: 24 }}>
        {isLoading ? (
          <View style={{ width: 80, height: 80, alignContent: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color="white" />
          </View>
        ) : currentUser.imageUrl === '' || currentUser.imageUrl === null ? (
          <Image source={defaultAvatar} style={{ width: 80, height: 80, borderRadius: 12 }} />
        ) : (
          <Image source={{ uri: currentUser.imageUrl }} style={{ width: 80, height: 80, borderRadius: 12 }} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChangeAvatar;
