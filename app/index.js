import { Link, Stack } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, NOTE_COLORS } from '../constants'
import { AntDesign } from '@expo/vector-icons';
import Note from '../components/Note';
import AsyncStorage from '@react-native-async-storage/async-storage';



const DATA = [
    {
        id: 'bdd7dacbea-gc1b1-46c2-aed5-3ad53abb28ba',
        title: 'My Note My Note My Note My Note My Note My Note My Note My Note My Note My Note My Note My Note',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!`,
            color: NOTE_COLORS.green_darner_tail
        },
    {
        id: 'bd7acbea-c1fb1-46rc2-aed5-3ad53abb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.shy_moment
    },
    {
        id: 'bd7acbea-c1b1-46c2-a3ed5r-3ad53abb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.faded_poster
    },
    {
        id: 'bd7acbea-c1b1-46c2-aefed5-3ad53abrb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.light_greenish_blue
    },
    {
        id: 'bd7acbeaa-c1b1-46c2-aed5-3ard53abb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.shy_moment
    },
    {
        id: 'bd7acbea-c1db1-46c2-aed5-3ad53awbb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.first_date
    },
    {
        id: 'bd7aecbea-c1b1-46c2-aefed5-3ad53abrb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.jiggly_puff
    },
    {
        id: 'bd7acbea-c1b1h-r46c2-agearfded5-3ad5e3abb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.bright_yarrow
    },
    {
        id: 'bd7acbea-c1ardb1-46c2-aed5-3adl53awbb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.storm_petrel
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.faded_poster
    },
    {
        id: 'bd7acbea-c1b1-46c2-agfded5-3ad5e3abb28ba',
        title: 'My Note',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur velit quia esse molestiae, inventore laudantium excepturi, atque ut alias earum, reiciendis ab quas consectetur fugit minus mollitia modi aspernatur!',
        color: NOTE_COLORS.shy_moment
    },
];

const App = () => {
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        async function configureData() {
          try {
            await AsyncStorage.setItem('NOTES', JSON.stringify(DATA));
            const fetchNotes = await AsyncStorage.getItem('NOTES');
            const parsedNotes = JSON.parse(fetchNotes);
            setNotes(parsedNotes);
          } catch (error) {
            console.log(error);
          }
        }
    
        configureData();
      }, []);

    return (
        <SafeAreaView style={{ 
            height: '100%',
            backgroundColor: COLORS.white,
            paddingHorizontal: 16
        }}>

            <FlatList
                data={notes}
                renderItem={(item) => <Note note={item.item} />}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity style={styles.addBtn}>
                <Link href='/note/add' style={styles.searchBtn}>
                    <AntDesign name="plus" size={30} color={COLORS.white} />
                </Link>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    addBtn: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        height: 55,
        width: 55,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App
