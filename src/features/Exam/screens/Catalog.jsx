import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { TOPICS_DATA } from '../../../../fakeData';
import TopicCard from '../components/TopicCard';

const Catalog = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [topics, setTopics] = useState(TOPICS_DATA);
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <ScrollView style={{ padding: 24, backgroundColor: '#fff' }}>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      <FlatList
        data={topics}
        renderItem={() => <TopicCard navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default Catalog;
