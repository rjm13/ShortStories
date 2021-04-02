import React, {useState} from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Searchbar } from 'react-native-paper';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';

import AudioStoryFlatList from '../components/AudioStoryFlatList';
import Trending from '../components/HorizList/Trending';

const AudioStoryHome = ({navigation}) => {

    function SearchBar () {

        const [searchQuery, setSearchQuery] = useState('');
      
        const onChangeSearch = query => setSearchQuery(query);
      
        return (
          <View>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              iconColor='gray'
              style={{
                height: 35,
                width: 280,
                marginHorizontal: 20,
                borderRadius: 8,
                backgroundColor: '#a1a1a1',
              }}
              inputStyle={{fontSize: 16,}}
            />
          </View>
        );
      };


    return (
        <View style={styles.container}>
        <LinearGradient
            colors={['purple', 'black', 'black']}
            //style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
          
          <View style={{    flexDirection: 'row', justifyContent: 'space-between', 
                            marginTop: 40, marginBottom: 20, marginHorizontal: 20}}>
            <View style={{ flexDirection: 'row'}}>

                <Text style={{ color: 'white', marginHorizontal: 20, fontSize: 16}}>
                    Home
                </Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <FontAwesome
                    name='user'
                    size={20}
                    color='#fff'
                    style={{ paddingLeft: 30 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
            </View>
          </View>
        
          <View>
            <Trending />
          </View>

            
           
            
        
        </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default AudioStoryHome;
