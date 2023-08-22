import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useLocalSearchParams } from 'expo-router';
import { COLORS } from '../../constants';
import { Feather } from '@expo/vector-icons';


const NoteDetails = () => {
    const params = useLocalSearchParams();
    const noteId = params.id;
    const [noteData, setNoteData] = useState(null);

    const fetchNoteData = async () => {
        try {
          const storedNotes = await AsyncStorage.getItem('NOTES');
          
          if (storedNotes) {
            const parsedNotes = JSON.parse(storedNotes);
            const selectedNote = parsedNotes.find(note => note.id === noteId);
            setNoteData(selectedNote);
          }
        } catch (error) {
          console.log(error);
        }
    }
  
    useEffect(() => {
      fetchNoteData();
    }, [noteId]);
  
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerRight: () => (
                        <TouchableOpacity style={styles.searchBtn}>
                            <Feather name="edit" size={24} color={COLORS.primary} /> 
                        </TouchableOpacity>
                    ),
                }}
            />
            {noteData ? (
                <View style={styles.noteContainer}>
                    <Text style={styles.noteHeader}>{noteData.title}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.noteBody}>{noteData.body}</Text>
                    </ScrollView>
                </View>
                ) : (
                <Text>Error fetching data</Text>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLORS.white
    },
    noteContainer: {
        marginTop: 'auto',
        maxHeight: '95%',
        backgroundColor: COLORS.light,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    noteHeader: {   
        fontSize: 30,
        lineHeight: 35,
        fontWeight: '900',
        color: COLORS.primary,
        letterSpacing: 1,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.gray,
        paddingTop: 30,
        paddingBottom: 20,
        padding: 16,
    },
    noteBody: {
        color: COLORS.dark,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.4,
        paddingVertical: 40,
        // paddingBottom: 20,
        padding: 16
    }
})

export default NoteDetails