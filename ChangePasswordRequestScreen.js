// ChangePasswordRequestScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ChangePasswordRequestScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Lógica para enviar solicitação de alteração de senha
    alert(`Solicitação de alteração de senha enviada para: ${email}`);
    // Navegar de volta para a tela de perfil
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alterar Senha</Text>
      <Text style={styles.subtitle}>Digite seu e-mail para receber instruções de alteração de senha.</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar Solicitação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3498db',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePasswordRequestScreen;
