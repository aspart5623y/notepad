import { Link, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants'

const Note = ({ note }) => {
    const router = useRouter();
    
    const goto = () => {
        router.push({ pathname: 'note', params: { id: note.id } })
    }

    return (
        <TouchableOpacity style={{ ...styles.note, backgroundColor: note.color }} onPress={goto}>
            <Text style={styles.title}>{note.title.length > 22 ? note.title.substring(0, 22) + '...' : note.title}</Text>
            <Text style={styles.text}>{note.body.length > 22 ? note.body.substring(0, 120) + '...' : note.body}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    note: {
        height: 'auto',
        padding: 10,
        width: '47.8%', 
        elevation: 2,
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginVertical: 10,
        marginRight: 17,
        borderRadius: 12
    }, 
    title: {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: '900',
        color: COLORS.white,
        letterSpacing: 1
    },
    text: {
        color: COLORS.white,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.4
    }
})

export default Note
