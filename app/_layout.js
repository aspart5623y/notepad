import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';



const AppLayout = () => {
  return <Stack 
    screenOptions={{
        title: 'My Notes 📝',
        headerStyle: { backgroundColor: COLORS.white },
        headerShadowVisible: false,
        headerTintColor: COLORS.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30
        },
        headerRight: () => (
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="ios-search-outline" size={24} color={COLORS.primary} /> 
          </TouchableOpacity>
        ),
    }}
  />
}


const styles = StyleSheet.create({
    searchBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.light,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AppLayout
