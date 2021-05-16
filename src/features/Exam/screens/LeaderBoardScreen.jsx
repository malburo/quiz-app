import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Top1 from '../../../../assets/Top1.png';
import Top2 from '../../../../assets/Top2.png';
import Top3 from '../../../../assets/Top3.png';
import userApi from '../../../api/userApi';
const LeaderBoardScreen = (props) => {
  const [leaderBoard, setLeaderBoard] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await userApi.leaderBoard();
      console.log(response);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ height: 360, backgroundColor: '#2a2b2f', marginTop: 40 }}>
        <View style={{ backgroundColor: '#2F3237', height: 50 }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
              marginTop: 12,
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            Leader Board
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 80,
            position: 'relative',
            padding: 24,
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
              <Image
                source={{
                  uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/91559621_2324523201175704_4230156291042967552_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JbjiI1yz5WIAX8bS--R&_nc_ht=scontent-hkg4-1.xx&oh=aea45ba67c72aef10b9b137bec2ef95e&oe=60B863E3',
                }}
                style={{ width: 110, height: 110, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
              />
            </View>
            <Image
              source={Top2}
              style={{
                width: 30,
                height: 40,
                position: 'absolute',
                marginTop: 0,
                marginRight: 'auto',
                marginBottom: 0,
                marginLeft: 'auto',
                bottom: 60,
              }}
            />
            <View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600',
                    marginVertical: 12,
                    textAlign: 'center',
                    marginTop: 36,
                  }}
                >
                  500 <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>point</Text>
                </Text>
              </View>
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>Quoc bao</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              zIndex: 999,
              left: 0,
              right: 0,
              top: -50,
            }}
          >
            <View>
              <Image
                source={{
                  uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/91559621_2324523201175704_4230156291042967552_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JbjiI1yz5WIAX8bS--R&_nc_ht=scontent-hkg4-1.xx&oh=aea45ba67c72aef10b9b137bec2ef95e&oe=60B863E3',
                }}
                style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
              />
            </View>
            <Image
              source={Top1}
              style={{
                width: 30,
                height: 40,
                position: 'absolute',
                marginTop: 0,
                marginRight: 'auto',
                marginBottom: 0,
                marginLeft: 'auto',
                bottom: 60,
              }}
            />
            <View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600',
                    marginVertical: 12,
                    textAlign: 'center',
                    marginTop: 36,
                  }}
                >
                  500 <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>point</Text>
                </Text>
              </View>
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>Quoc bao</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
              <Image
                source={{
                  uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/91559621_2324523201175704_4230156291042967552_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JbjiI1yz5WIAX8bS--R&_nc_ht=scontent-hkg4-1.xx&oh=aea45ba67c72aef10b9b137bec2ef95e&oe=60B863E3',
                }}
                style={{ width: 110, height: 110, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
              />
            </View>
            <Image
              source={Top3}
              style={{
                width: 30,
                height: 40,
                position: 'absolute',
                marginTop: 0,
                marginRight: 'auto',
                marginBottom: 0,
                marginLeft: 'auto',
                bottom: 60,
              }}
            />
            <View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600',
                    marginVertical: 12,
                    textAlign: 'center',
                    marginTop: 36,
                  }}
                >
                  500 <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>point</Text>
                </Text>
              </View>
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>Quoc bao</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ padding: 24 }}>
        <View
          style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 24 }}
        >
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>4th</Text>
            <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>Quoc bao</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>95 pts</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 24 }}
        >
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>4th</Text>
            <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>Quoc bao</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>95 pts</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 24 }}
        >
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>4th</Text>
            <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>Quoc bao</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>95 pts</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 24 }}
        >
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>4th</Text>
            <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>Quoc bao</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>95 pts</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 24 }}
        >
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>4th</Text>
            <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>Quoc bao</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>95 pts</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 24 }}
        >
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>4th</Text>
            <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>Quoc bao</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>95 pts</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', marginBottom: 24 }}
        >
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>4th</Text>
            <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>Quoc bao</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>95 pts</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3237',
  },
});

export default LeaderBoardScreen;
