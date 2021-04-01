import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { Image, Platform, View } from 'react-native';
import axios from 'axios';
const ChangeAvatar = () => {
  const [image, setImage] = useState(null);
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
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result);
      const formData = new FormData();
      formData.append('file', result.uri);
      formData.append('upload_preset', 'y6uwotih');
      const image = await axios.post('https://api.Cloudinary.com/v1_1/malburo/image/upload', formData);
    }
  };

  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ChangeAvatar;
