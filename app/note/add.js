import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { COLORS } from '../../constants'
import { Feather } from '@expo/vector-icons';


const Add = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>      
      <SafeAreaView>
        <ScrollView style={styles.formContainer}>
          <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.white },
                headerShadowVisible: false,
                headerTitle: "Create new note",
                headerRight: () => (
                  <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="check" size={24} color={COLORS.primary} /> 
                  </TouchableOpacity>
                ),
            }}
          />
        
          <TextInput
            maxLength={40}
            // value={value}
            // onChangeText={text => onChangeText(text)}
            placeholder="Enter title"
            cursorColor={COLORS.primary}
            style={styles.titleInput}
          />
          <TextInput
            style={styles.bodyInput}
            cursorColor={COLORS.primary}
            placeholder="Start typing..."
            multiline 
            // onChangeText={text => onChangeText(text)}
            // value={value}
          />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 30,
    paddingBottom: 50,
    height: '100%',
    paddingHorizontal: 16
  },
  titleInput: {
    paddingVertical: 10, 
    fontSize: 24, 
    fontWeight: 'bold',
  },
  bodyInput: {
    fontSize: 16, 
    paddingVertical: 14, 
    paddingBottom: 40,
    fontWeight: 'normal',
    textAlignVertical: 'top',
    minHeight: '100%',
  },
});

export default Add
