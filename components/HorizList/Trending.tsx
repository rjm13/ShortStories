import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

import DATA from '../../data/dummyaudio';

const Item = ({title, category, description, image, audioUri, author, narrator, time, liked, rating}) => {

    return (
        <View style={styles.containernew}>
          <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{ borderRadius: 16}}
          >
             <Text style={styles.title}>
              {title}
            </Text> 
          </ImageBackground>
          
      </View>
    );
}

const TrendingList = () => {

    const renderItem = ({ item }) => (

        <Item 
            title={item.title}
            image={item.image}
            category={item.category}
            audioUri={item.audioUri}
            description={item.description}
            author={item.author}
            narrator={item.narrator}
            time={item.time}
            liked={item.liked}
            rating={item.rating}
        />
      );

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    containernew: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 20,
        marginVertical: 20,
        borderRadius: 20,
      },
    image: {
        resizeMode: 'cover',
        width: 140,
        height: 100,
        justifyContent: 'flex-end',
      },
      title: {
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#000000a0',
      },
});

export default TrendingList;