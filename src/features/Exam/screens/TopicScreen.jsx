import { useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { Avatar, Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import topicApi from '../../../api/topicApi.js';
import TopicCard from '../components/TopicCard';
import defaultAvatar from '../../../../assets/default-avatar.jpg';
const TopicScreen = ({ navigation }) => {
  const currentUser = useSelector((state) => state.auth.current);
  const isFocused = useIsFocused();
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredTopics, setFilteredTopics] = useState([]);
  const onChangeSearch = (query) => {
    setSearch(query);
  };

  React.useEffect(() => {
    (async () => {
      if (isFocused) {
        const response = await topicApi.getAll();
        setTopics(response);
      }
    })();
  }, [isFocused]);

  React.useEffect(() => {
    setFilteredTopics(topics.filter(({ topic }) => topic.topicName.toLowerCase().includes(search.toLowerCase())));
  }, [search, topics]);
  return (
    <ScrollView style={{ backgroundColor: '#2F3237', padding: 24 }}>
      <StatusBar />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 24,
          marginTop: 40,
        }}
      >
        <View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 8, color: 'white' }}>
              Hi {currentUser?.fullName}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>Welcome back 👋</Text>
          </View>
        </View>
        <View>
          {currentUser?.imageUrl === '' || currentUser?.imageUrl === null ? (
            <Avatar.Image size={40} source={defaultAvatar} />
          ) : (
            <Avatar.Image
              size={40}
              source={{
                uri: currentUser.imageUrl,
              }}
            />
          )}
        </View>
      </View>

      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={search}
        style={{ marginBottom: 24, shadowOpacity: 0, backgroundColor: '#454f59', overflow: 'hidden' }}
        iconColor="white"
        theme={{ colors: { text: 'white', placeholder: 'white' } }}
        inputStyle={{ overflow: 'hidden' }}
        selectionColor="white"
      />
      <View>
        <Text style={{ fontSize: 24, fontWeight: '700', marginVertical: 12, color: 'white' }}>Topics</Text>
      </View>
      <View style={{ marginBottom: 24 }}>
        {filteredTopics.map((item) => (
          <TopicCard navigation={navigation} topic={item.topic} totalQuiz={item.totalQuiz} key={item.topic.topicId} />
        ))}
      </View>
    </ScrollView>
  );
};

export default TopicScreen;
