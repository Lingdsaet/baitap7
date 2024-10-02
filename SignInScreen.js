import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleContinue = () => {
    // Logic for handling phone number input and navigation
    if (phoneNumber.length === 10) {
      // Proceed to the next screen (e.g., HomeScreen)
      console.log('Phone number is valid. Navigating to HomeScreen...');
    } else {
      console.log('Invalid phone number');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.content}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          placeholderTextColor="#BDBDBD"
          keyboardType="numeric"
          maxLength={10}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#757575',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 18,
    color: '#000',
  },
  button: {
    width: '100%',
    backgroundColor: '#E0E0E0',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#757575',
  },
});

export default SignInScreen;
