import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const genres = [
    {
        id: '1',
        genre: 'crime',
        icon: 'shoe-prints',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
    {
        id: '2',
        genre: 'fantasy',
        icon: 'hat-wizard',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
    {
        id: '3',
        genre: 'mystery',
        icon: 'user-secret',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
    {
        id: '4',
        genre: 'comedy',
        icon: 'poo',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
    {
        id: '5',
        genre: 'heart warming',
        icon: 'heart',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
    {
        id: '6',
        genre: 'life',
        icon: 'leaf',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
    {
        id: '7',
        genre: 'after dark',
        icon: 'moon',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
    {
        id: '8',
        genre: 'fan fiction',
        icon: 'quidditch',
        iconcolor: '#ffffffa5',
        boxcolor: 'cyan',
    },
]

const Item = ({genre, icon, iconcolor, boxcolor}) => {

    return (
        <View>
              <View style={[styles.genrebox, { backgroundColor: boxcolor}]}>
                    <View style={{ 
                        borderBottomLeftRadius: 15, 
                        borderTopLeftRadius: 15,
                        backgroundColor: '#000000a5',
                        padding: 5,
                        height: 60,
                        width: 80,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <FontAwesome5 
                            name={icon}
                            color={iconcolor}
                            size={25}
                        />
                    </View>
              
                <Text style={styles.genre}>
                  {genre}
                </Text>
              </View>
        </View>
    );
}

const GenreFlatList = () => {
   
    const renderItem = ({ item }) => (

        <Item 
            genre={item.genre}
            icon={item.icon}
            iconcolor={item.iconcolor}
            boxcolor={item.boxcolor}
        />
      );
    
    return (
        <View>
            <FlatList 
                data={genres}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ () => {
                    return (
                        <View style={{ marginTop: 20}}>
                            <Text style={styles.header}>
                                Browse By
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>

                                <View style={[styles.box, { backgroundColor: 'gold'}]}>
                                    <FontAwesome5 
                                    name='book-open'
                                    color='#000000a5'
                                    size={30}
                                    />
                                    <Text style={styles.title}>
                                        Author
                                    </Text>
                                </View>

                                <View style={[styles.box, { backgroundColor: 'gold'}]}>
                                    <FontAwesome5 
                                        name='book-reader'
                                        color='#000000a5'
                                        size={30}
                                    />
                                    <Text style={styles.title}>
                                    Narrator
                                    </Text>
                                </View>

                            </View>

                            <Text style={styles.header}>
                                Genres
                            </Text>
                        </View>                           
                    );
                }}
                ListFooterComponent={ () => {
                    return (
                    <View style={{ height:  70, alignItems: 'center'}}>
                        <Text style={{ color: 'white', margin: 20,}}>
                            Load more
                        </Text>
                    </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    title: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        textTransform: 'capitalize'
    },
    genre: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        paddingHorizontal: 20,
    },
      header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    box: {
        height: 100,
        width: 140,
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      genrebox: {
        height: 60,
        borderRadius: 15,
        marginVertical: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
});

export default GenreFlatList;