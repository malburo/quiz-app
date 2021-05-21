import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import defaultAvatar from '../../../../assets/default-avatar.jpg';
import Top1 from '../../../../assets/Top1.png';
import Top2 from '../../../../assets/Top2.png';
import Top3 from '../../../../assets/Top3.png';
import userApi from '../../../api/userApi';
const LeaderBoardScreen = (props) => {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    (async () => {
      if (isFocused) {
        const response = await userApi.leaderBoard();
        setLeaderBoard(response);
      }
    })();
  }, [isFocused]);
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
              {leaderBoard[1]?.imageUrl === '' || leaderBoard[1]?.imageUrl === null ? (
                <Image
                  source={defaultAvatar}
                  style={{ width: 110, height: 110, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
                />
              ) : (
                <Image
                  source={{ uri: leaderBoard[1]?.imageUrl }}
                  style={{ width: 110, height: 110, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
                />
              )}
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
                  {leaderBoard[1]?.point} <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>point</Text>
                </Text>
              </View>
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>{leaderBoard[1]?.fullName} </Text>
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
              {leaderBoard[0]?.imageUrl === '' || leaderBoard[0]?.imageUrl === null ? (
                <Image
                  source={defaultAvatar}
                  style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
                />
              ) : (
                <Image
                  source={{ uri: leaderBoard[0]?.imageUrl }}
                  style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
                />
              )}
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
                  {leaderBoard[0]?.point} <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>point</Text>
                </Text>
              </View>
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>{leaderBoard[0]?.fullName} </Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
              {leaderBoard[2]?.imageUrl === '' || leaderBoard[2]?.imageUrl === null ? (
                <Image
                  source={defaultAvatar}
                  style={{ width: 110, height: 110, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
                />
              ) : (
                <Image
                  source={{ uri: leaderBoard[2]?.imageUrl }}
                  style={{ width: 110, height: 110, borderRadius: 100, borderWidth: 3, borderColor: 'white' }}
                />
              )}
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
                  {leaderBoard[2]?.point} <Text style={{ color: 'white', fontSize: 14, fontWeight: '400' }}>point</Text>
                </Text>
              </View>
              <View>
                <Text style={{ color: 'white', textAlign: 'center' }}>{leaderBoard[2]?.fullName} </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ padding: 24 }}>
        {leaderBoard.length > 0 &&
          leaderBoard.splice(3).map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
              key={item.userId}
            >
              <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>{index + 4}th</Text>
                <Text style={{ marginLeft: 24, color: 'white', fontSize: 18, fontWeight: '600' }}>{item.fullName}</Text>
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>{item.point} pts</Text>
              </View>
            </View>
          ))}
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
